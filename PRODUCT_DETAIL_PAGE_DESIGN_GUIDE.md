# Product Detail Page Design Guide

This guide summarizes the product introduction page pattern used for MCIPCB13. It is intended for quickly producing consistent, premium industrial product pages in batches.

## Goal

Build a product detail page that feels professional, technical, and sales-ready without becoming visually heavy.

The page should:

- Use a dark, premium hero section only at the top.
- Keep all following sections light, clean, and easy to scan.
- Show product images without artificial gray margins or mismatched fixed containers.
- Add restrained image hover feedback and click-to-enlarge preview.
- Present specifications in a clear left-label/right-value layout with richer visual hierarchy.
- Translate brochure/PDF content into a structured web page.

## Required Assets

For each product, prepare one folder under `public`.

Recommended structure:

```text
public/ProductModel/
  ProductModel brochure.pdf
  image-folder/
    1.jpg
    2.jpg
    3.jpg
    4.jpg
    5.jpg
    6.jpg
```

Image usage:

- `1.jpg`: hero product image, white-background product render/photo.
- `2.jpg` to `4.jpg`: three different product angle/detail images.
- `5.jpg` and `6.jpg`: selling-point card images.
- Brochure PDF: source for technical specifications.

## Page Structure

### 1. Hero Section

Use a dark background only here.

Content:

- Back link to category page.
- Product category pill, such as `Industrial Mini PC`.
- Product model name as H1.
- Short tagline.
- One concise product overview paragraph.
- 4 compact highlight chips.
- Only one product image: `1.jpg`.

Design rules:

- Do not show thumbnails in the hero.
- The hero image must be placed on a white card if the source image has a white background.
- The image should use natural dimensions: `display: block; width: 100%; height: auto;`.
- Do not use fixed aspect-ratio gray containers around the image.
- Add a restrained hover effect, such as a 1-2% scale increase and a slightly stronger shadow.
- Clicking the image should open a full-screen preview.

Example highlights:

```text
Intel Core i3/i5/i7 options
2 x GbE RJ45 LAN
4 x USB 3.0 + 4 x USB 2.0
193.9 x 127 x 57.2 mm
```

### 2. Angle Image Gallery

Show `2.jpg`, `3.jpg`, and `4.jpg` below the hero.

Design rules:

- Add a clear gallery heading explaining that the images show different product views.
- Recommended eyebrow: `Product Gallery`.
- Recommended heading pattern: `Explore [ProductModel] from every angle`.
- Optionally add one short sentence describing enclosure, interface, and installation details.
- Use a light section background, such as `bg-slate-50`.
- Use a 3-column grid on desktop and 1-column grid on mobile.
- Each image card may have a thin border and subtle shadow.
- Do not force images into a fixed aspect ratio.
- Do not add gray image padding unless the source image itself requires it.
- Use `img` with `block w-full h-auto`.
- Use a subtle hover lift, shadow increase, and maximum 2-3% image scale.
- Clicking any gallery image should open a full-screen preview.

### 3. Specification Matrix

Use the brochure/PDF as the source of truth.

Use a visually enhanced specification table while keeping the most direct reading pattern:

- Dark header bar.
- Section eyebrow, such as `MCIPCB13 Specification Matrix`.
- Clear title, such as `Brochure-based hardware parameters`.
- One key spec badge on the right, such as operating temperature.
- Each specification uses a left-label/right-value row.
- On desktop, keep a stable label column width and allow the value column to use the remaining space.
- On mobile, stack the label above the value.
- Each row has:
  - Sequential number, for example `01`.
  - Uppercase field label on the left.
  - Full parameter value on the right.
  - Thin row and column dividers.
  - Alternating light row backgrounds.
  - Subtle hover background and blue side accent.

Recommended spec fields:

```text
Model
CPU
Video
RAM
USB
Power Input
NIC
COM
Storage
Expansion
Front I/O
Rear I/O
System
Working Environment
Size
```

Writing rules:

- Preserve important brochure values exactly.
- Convert malformed symbols to clean web text, for example multiplication marks can be written as `x`.
- Use readable units: `193.9 x 127 x 57.2 mm`.
- Keep long multi-generation specs in one field if they belong together.

### 4. Product Advantages

Use a light section, not a dark one.

Content:

- Short section eyebrow: `Product Advantages`.
- One value proposition headline.
- One paragraph summarizing practical buyer value.
- Three feature cards with icons.

Feature card pattern:

```text
Title: Flexible Intel Core Platform
Description: Covers multiple Intel Core generations so projects can balance cost, lifecycle, and performance.

Title: Industrial Connectivity
Description: Dual Gigabit LAN, dual DB9 COM, and eight USB ports support controllers, sensors, cameras, and peripherals.

Title: Wide Temperature Operation
Description: Designed for -20 deg C to +60 deg C operation in demanding industrial and edge environments.
```

Design rules:

- White cards on light gray background.
- Thin slate border.
- Subtle shadow.
- Blue icon tile.
- Hover lift is acceptable but should be restrained.

### 5. Selling-Point Image Cards

Use `5.jpg` and `6.jpg`.

Each card contains:

- Natural-size image at top.
- Title.
- Short benefit-driven description.

Design rules:

- Use two columns on desktop and one column on mobile.
- No fixed image ratio.
- Use `block w-full h-auto`.
- Add text content below the image, separated by a thin top border.
- Use subtle hover lift, shadow increase, and image scale only if it does not crop important product details.
- Clicking either image should open a full-screen preview.

Example copy:

```text
Dense I/O in a compact body
Front and rear interfaces are arranged for practical cabinet, kiosk, and machine-side installation without wasting panel space.

Built for long-running deployments
Wide-voltage input, expandable storage, wireless expansion, watchdog support, and Linux/Windows compatibility help simplify field maintenance.
```

### 6. CTA Section

Use a simple white section.

Content:

- `Interested in ProductModel?`
- One line about pricing, lifecycle planning, customization, and bulk order support.
- Primary button: `Contact Sales`.
- Secondary button: `View on Alibaba`.

## Visual Style

Use this general style direction:

- Top hero: dark ink and deep teal industrial gradient.
- Other sections: white or light slate backgrounds.
- Cards: white, thin border, restrained shadow.
- Corners: use small-to-medium radius, such as `rounded-lg` or `rounded-xl`.
- Primary accent: teal, used for technical labels, primary actions, and connectivity.
- Secondary accent: amber, used for specification field names, operating ranges, and key data.
- Supporting accent: coral or rose, used sparingly for feature-card differentiation and high-value details.
- Mint or emerald may be used for reliability and system-status concepts.
- Avoid large dark sections after the hero.
- Avoid decorative blobs/orbs.
- Avoid gray image boxes that do not match image dimensions.
- Do not use one accent color for every link, icon, border, and button.

## Color System

Recommended semantic roles:

```text
Ink / dark background: #172033
Technical teal:        #087f8c
Soft teal surface:     #e4f5f4
Specification amber:   #d88a16
Soft amber surface:    #fff5df
Supporting coral:      #d95d4f
Soft coral surface:    #fff0ed
Reliability mint:      #49a58d
Neutral surface:       #f5f8f7
Neutral divider:       #d9e4e1
```

Color responsibilities:

- Teal: primary actions, category identity, technical/connectivity labels.
- Amber: specification fields, operating range, highlighted hardware data.
- Coral/rose: limited supporting emphasis; never dominate the page.
- Ink: hero backgrounds and specification headers.
- Light neutral/mint surfaces: separate sections without relying on gray alone.

Specification rows must use color as well as typography:

- Left field-name column: soft amber background, amber divider, dark amber text.
- Right parameter-value column: very light teal background, dark teal/ink text.
- Hover: slightly strengthen both surfaces and reveal the amber side accent.
- Do not rely only on font weight or font size to distinguish field names from values.

## Image Container Rules

These are important.

Use this for product images that must fit their real dimensions:

```tsx
<img src={image} alt={alt} className="block w-full h-auto" />
```

Avoid this when the user wants image-size-perfect display:

```tsx
<div className="aspect-[4/3] bg-slate-50">
  <img className="h-full w-full object-contain p-4" />
</div>
```

Why:

- Fixed aspect-ratio containers create empty gray/white bands when the image ratio differs.
- Padding around already-white-background product images creates visible artificial margins.
- Natural image flow better preserves the source asset.

## Image Interaction Rules

All important product images should behave consistently.

Recommended hover behavior:

- Show `cursor-zoom-in`.
- Increase image scale by approximately `1.02` to `1.03`.
- Optionally lift the surrounding card by a few pixels.
- Slightly strengthen the shadow.
- Use a smooth transition around 300-500ms.

Avoid:

- 3D card effects.
- Large rotations.
- Aggressive scaling.
- Continuous animations.
- Effects that crop ports, labels, or product edges.

Recommended image button pattern:

```tsx
<button
  type="button"
  onClick={() => setPreviewImage(image)}
  aria-label="Enlarge product view"
  className="group block w-full cursor-zoom-in overflow-hidden"
>
  <img
    src={image}
    alt="Product view"
    className="block w-full h-auto transition-transform duration-500 group-hover:scale-[1.025]"
  />
</button>
```

Preview behavior:

- Open the selected image in a full-screen dark translucent overlay.
- Keep the image fully visible with `max-height`, `max-width`, and `object-contain`.
- Clicking the overlay or enlarged image closes the preview.
- Pressing `Escape` closes the preview.
- Disable body scrolling while the preview is open.
- Use `cursor-zoom-out` in the enlarged state.

## Content Production Workflow

1. Collect all images and brochure PDF.
2. Extract brochure text with a PDF text tool.
3. Identify exact technical specifications.
4. Write a short product overview paragraph.
5. Select 4 highlight chips from the most buyer-relevant specs.
6. Convert the brochure specs into the specification matrix.
7. Summarize 3 feature-card advantages.
8. Write 2 selling-point cards using images `5.jpg` and `6.jpg`.
9. Verify page in browser:
   - Hero has only `1.jpg`.
   - The angle image gallery has a clear section heading.
   - All images load.
   - No fixed gray image containers remain.
   - Every important image has a restrained hover effect.
   - Clicking images opens and closes the full-screen preview.
   - Specification rows clearly show field names on the left and values on the right.
   - Specifications are readable on desktop and mobile.
10. Run production build.

## Implementation Checklist

- [ ] Product appears on category page.
- [ ] Category card links to `/products/category/product-id`.
- [ ] Hero uses only `1.jpg`.
- [ ] `2.jpg` to `4.jpg` appear below hero.
- [ ] The angle image gallery clearly explains that it shows different product views.
- [ ] Specs are based on brochure/PDF.
- [ ] Spec section uses matrix/card styling, not a plain table.
- [ ] Spec rows use left-side field names and right-side parameter values.
- [ ] Selling-point section uses `5.jpg` and `6.jpg`.
- [ ] All image containers match natural image dimensions.
- [ ] All important images have restrained hover feedback.
- [ ] Images support click-to-enlarge and click/Escape-to-close.
- [ ] Build passes.
- [ ] Browser check confirms no broken images.

## Reusable Prompt for Future Pages

```text
Create a product detail page for [ProductModel] under [Category].
All assets are in public/[ProductModel].
Use 1.jpg as the only hero image on a white image card.
Show 2.jpg, 3.jpg, and 4.jpg as natural-size angle images below the hero.
Add a clear gallery heading such as Explore [ProductModel] from every angle.
Build a visually rich specification matrix based on [ProductModel] brochure.pdf.
Use a clear left-field/right-parameter row layout for specifications.
Below the specs, create a light-background product advantages section with 3 feature cards.
Use 5.jpg and 6.jpg as two selling-point image cards with concise benefit copy.
Only the top hero should use a dark background; all following sections should be light.
Do not use fixed gray aspect-ratio image containers. Images must use natural dimensions with block w-full h-auto.
Add restrained hover effects to all important product images.
Clicking an image must open a full-screen preview; clicking again or pressing Escape must close it.
Run build and verify all images load.
```
