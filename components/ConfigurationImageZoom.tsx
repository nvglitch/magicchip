'use client';

import { useEffect, useRef, useState, type PointerEvent } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { ZoomIn } from 'lucide-react';

type ZoomRegion = {
  popupLeft: number;
  popupTop: number;
  popupWidth: number;
  popupHeight: number;
  imageWidth: number;
  imageHeight: number;
  imageLeft: number;
  imageTop: number;
  lensLeft: number;
  lensTop: number;
  lensWidth: number;
  lensHeight: number;
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

// Used only for the preview next to a selected configuration's specifications.
export default function ConfigurationImageZoom({ image, title, onPreview }: {
  image: string;
  title: string;
  onPreview: (image: string) => void;
}) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [zoom, setZoom] = useState<ZoomRegion | null>(null);
  const isZooming = zoom !== null;

  useEffect(() => {
    if (!isZooming) return;
    const dismiss = () => setZoom(null);
    const dismissOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') dismiss(); };
    window.addEventListener('scroll', dismiss, true);
    window.addEventListener('resize', dismiss);
    window.addEventListener('blur', dismiss);
    window.addEventListener('keydown', dismissOnEscape);
    return () => {
      window.removeEventListener('scroll', dismiss, true);
      window.removeEventListener('resize', dismiss);
      window.removeEventListener('blur', dismiss);
      window.removeEventListener('keydown', dismissOnEscape);
    };
  }, [isZooming]);

  const moveZoom = (event: PointerEvent<HTMLDivElement>) => {
    const img = imageRef.current;
    if (event.pointerType !== 'mouse' || !window.matchMedia('(hover: hover) and (pointer: fine)').matches || !img?.naturalWidth) return;
    const bounds = img.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return;

    // Match object-contain's actual image area, including its letterboxing.
    const fit = Math.min(bounds.width / img.naturalWidth, bounds.height / img.naturalHeight);
    const width = img.naturalWidth * fit;
    const height = img.naturalHeight * fit;
    const offsetX = (bounds.width - width) / 2;
    const offsetY = (bounds.height - height) / 2;
    const popupWidth = Math.min(420, window.innerWidth - 24);
    const popupHeight = Math.min(360, window.innerHeight - 24);
    const scale = Math.max(3, popupWidth / width, popupHeight / height);
    const lensWidth = popupWidth / scale;
    const lensHeight = popupHeight / scale;
    const centerX = clamp(event.clientX - bounds.left - offsetX, lensWidth / 2, width - lensWidth / 2);
    const centerY = clamp(event.clientY - bounds.top - offsetY, lensHeight / 2, height - lensHeight / 2);
    const popupLeft = event.clientX + 24 + popupWidth <= window.innerWidth - 12
      ? event.clientX + 24
      : event.clientX - popupWidth - 24;

    setZoom({
      popupLeft: clamp(popupLeft, 12, window.innerWidth - popupWidth - 12),
      popupTop: clamp(event.clientY + 24, 12, window.innerHeight - popupHeight - 12),
      popupWidth, popupHeight,
      imageWidth: width * scale, imageHeight: height * scale,
      imageLeft: popupWidth / 2 - centerX * scale,
      imageTop: popupHeight / 2 - centerY * scale,
      lensLeft: offsetX + centerX - lensWidth / 2,
      lensTop: offsetY + centerY - lensHeight / 2,
      lensWidth, lensHeight,
    });
  };

  return <>
    <button type="button" onClick={() => { setZoom(null); onPreview(image); }} onBlur={() => setZoom(null)} aria-label={title} className="w-full cursor-zoom-in select-none rounded-lg bg-white p-3 focus-visible:outline-2 focus-visible:outline-blue-600">
      <div className="relative" onPointerEnter={moveZoom} onPointerMove={moveZoom} onPointerLeave={() => setZoom(null)} onPointerCancel={() => setZoom(null)}>
        <Image ref={imageRef} src={image} alt={title} width={960} height={540} draggable={false} className="aspect-[4/3] w-full object-contain" />
        <span aria-hidden="true" className="pointer-events-none absolute bottom-1 right-1 rounded-full border border-blue-100 bg-white/90 p-1.5 text-slate-500"><ZoomIn className="h-4 w-4" /></span>
        {zoom && <span aria-hidden="true" className="pointer-events-none absolute border border-blue-400 bg-blue-100/30" style={{ left: zoom.lensLeft, top: zoom.lensTop, width: zoom.lensWidth, height: zoom.lensHeight }} />}
      </div>
    </button>
    {zoom && createPortal(
      <div aria-hidden="true" data-configuration-image-zoom className="pointer-events-none fixed z-[70] overflow-hidden rounded-xl border border-blue-200 bg-white shadow-xl" style={{ left: zoom.popupLeft, top: zoom.popupTop, width: zoom.popupWidth, height: zoom.popupHeight }}>
        <Image src={image} alt="" width={960} height={540} className="absolute max-w-none" style={{ width: zoom.imageWidth, height: zoom.imageHeight, left: zoom.imageLeft, top: zoom.imageTop }} />
      </div>, document.body,
    )}
  </>;
}
