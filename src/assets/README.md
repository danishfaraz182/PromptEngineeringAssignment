# assets/

This project intentionally ships without binary image assets (no network access
was available while generating this project, so no photography could be fetched
or licensed). Visual richness instead comes from:

- CSS gradients, blur/glass panels, and grain textures (see `src/styles/index.css`)
- Inline SVG illustrations (hero emblem, favicon, OG image in `public/`)
- Framer Motion animation rather than photography

## Adding real photography

When you have licensed or your own campus photography, the recommended pattern is:

1. Drop files into `src/assets/images/` (create the folder) — e.g. `campus-aerial.jpg`.
2. Import them where needed: `import campusAerial from '@/assets/images/campus-aerial.jpg';`
3. Use them as you would any React image source: `<img src={campusAerial} alt="..." />`.

For hero/background images, prefer `.webp` or `.avif` with a `.jpg` fallback, and
keep hero images under ~300KB for performance. See the "Image Replacement" section
of the root README for more detail.
