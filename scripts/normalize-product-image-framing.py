"""Normalize product cutout framing on square white canvases.

All product images use the MCSRP2-HDMI main view as the reference (84% of the
canvas long edge). The script preserves product pixels, aspect ratio, and a
white canvas.
"""

from __future__ import annotations

import argparse
from pathlib import Path

from PIL import Image, ImageChops


MAIN_COVERAGE = 0.84
GALLERY_COVERAGE = 0.84
WHITE_THRESHOLD = 18


def foreground_bbox(image: Image.Image) -> tuple[int, int, int, int] | None:
    rgba = image.convert("RGBA")
    flattened = Image.new("RGB", rgba.size, "white")
    flattened.paste(rgba, mask=rgba.getchannel("A"))
    difference = ImageChops.difference(flattened, Image.new("RGB", rgba.size, "white")).convert("L")
    return difference.point(lambda value: 255 if value > WHITE_THRESHOLD else 0).getbbox()


def normalize(path: Path) -> tuple[float, float] | None:
    with Image.open(path) as opened:
        source = opened.convert("RGBA").copy()
    bbox = foreground_bbox(source)
    if bbox is None:
        return None

    width, height = source.size
    crop = source.crop(bbox)
    crop_width, crop_height = crop.size
    old_coverage = max(crop_width / width, crop_height / height)
    target_coverage = MAIN_COVERAGE if path.name == "main-square.png" else GALLERY_COVERAGE
    scale = target_coverage / old_coverage
    resized = crop.resize(
        (max(1, round(crop_width * scale)), max(1, round(crop_height * scale))),
        Image.Resampling.LANCZOS,
    )

    canvas = Image.new("RGBA", source.size, "white")
    position = ((width - resized.width) // 2, (height - resized.height) // 2)
    canvas.alpha_composite(resized, position)
    output = path.with_suffix(".normalizing.png")
    canvas.convert("RGB").save(output, "PNG", optimize=True)
    output.replace(path)
    return old_coverage, target_coverage


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("root", type=Path)
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    paths = sorted(args.root.glob("**/images/*.png"))
    changed = 0
    for path in paths:
        with Image.open(path) as source:
            bbox = foreground_bbox(source)
            if bbox is None:
                continue
            width, height = source.size
            old_coverage = max((bbox[2] - bbox[0]) / width, (bbox[3] - bbox[1]) / height)
            target = MAIN_COVERAGE if path.name == "main-square.png" else GALLERY_COVERAGE
        if abs(old_coverage - target) < 0.005:
            continue
        changed += 1
        print(f"{path}: {old_coverage:.1%} -> {target:.1%}")
        if not args.dry_run:
            normalize(path)

    print(f"Processed {len(paths)} PNG files; normalized {changed}.")


if __name__ == "__main__":
    main()
