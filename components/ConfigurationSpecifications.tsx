'use client';

import { useState } from 'react';
import Image from 'next/image';
import SpecificationTable from '@/components/SpecificationTable';
import ConfigurationImageZoom from '@/components/ConfigurationImageZoom';
import type { ProductConfiguration, ProductSpecification } from '@/lib/product-specifications';

export default function ConfigurationSpecifications({ title, image, imageAlt, imageCaption, specs, galleryCards = [], onPreview }: {
  title: string;
  image: string;
  imageAlt: string;
  imageCaption?: string;
  specs: ProductSpecification[];
  galleryCards?: ProductConfiguration['galleryCards'];
  onPreview: (image: string) => void;
}) {
  const [selectedView, setSelectedView] = useState(image);
  const views = [{ image, title: imageAlt }, ...galleryCards.filter(view => view.image !== image)];
  const activeView = views.find(view => view.image === selectedView) || views[0];

  return (
    <div className="grid md:grid-cols-[300px_1fr]">
      <div className="min-w-0 border-b border-blue-100 p-5 md:border-b-0 md:border-r">
        <div className="md:sticky md:top-28">
          <ConfigurationImageZoom key={activeView.image} image={activeView.image} title={activeView.title} onPreview={onPreview} />
          {views.length > 1 && <div className="mt-3 grid grid-cols-2 gap-2">
            {views.map(view => <button key={view.image} type="button" aria-label={view.title} aria-pressed={view.image === activeView.image} onClick={() => setSelectedView(view.image)} className={`overflow-hidden rounded-lg border p-1 focus-visible:outline-2 focus-visible:outline-blue-600 ${view.image === activeView.image ? 'border-blue-500 bg-blue-50' : 'border-blue-100 hover:border-blue-400'}`}>
              <Image src={view.image} alt="" width={200} height={125} className="aspect-[8/5] w-full object-contain" />
            </button>)}
          </div>}
          {imageCaption && <p className="mt-2 text-center text-xs text-slate-500">{imageCaption}</p>}
        </div>
      </div>
      <SpecificationTable title={title} specs={specs} framed={false} />
    </div>
  );
}
