# Pexelicons

Pexelicons is a collection of custom Windows folder icons. Browse 30 handcrafted 32-bit ICO files in honey yellow and royal purple colorways, search by name or category, save favorites in your browser, and download icons directly.

The site is designed around the icons themselves. It pairs an interactive specimen stage and scale preview slider with a searchable catalog, a desktop comparison section, and a practical Windows installation guide.

## Features

- Browse all 30 Windows folder icons across yellow and royal purple colorways.
- Filter the collection by color (all, yellow, purple) and category (Work, Media, System).
- Search by icon name, color, or category with instant keyboard shortcut (`/`).
- Toggle between gallery grid and compact list view.
- Interactive scale preview slider testing sizes from 16px up to 256px.
- Save favorites in local browser storage.
- One-click direct ICO download for Windows 10 and 11.
- Step-by-step Windows folder icon customization guide.
- Responsive layout with accessible keyboard focus styles and smooth micro-interactions.

## Run locally

Requirements: Node.js and pnpm.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available commands

```bash
pnpm dev       # Start the Next.js development server
pnpm build     # Create an optimized production build
pnpm start     # Start the production server
pnpm lint      # Run ESLint
```

## Project structure

```text
app/
  catalog.tsx      Searchable, filterable icon catalog state and layout
  icon-data.ts     Icon records, categories, colorways, and asset URL helpers
  layout.tsx       Root layout, viewport, and SEO metadata
  page.tsx         Landing page assembling hero, specimen, catalog, and guide
  globals.css      Tailwind CSS setup, color tokens, and base typography
components/
  catalog-filters.tsx  Search bar, colorway filters, and view mode toggles
  comparison-section.tsx Windows folder vs Pexelicons comparison
  empty-state.tsx      Zero-state fallback view
  footer.tsx           Site footer and author attribution
  guide-card.tsx       Single step card
  guide-section.tsx    Four-step Windows folder customization guide
  hero-header.tsx      Top headline and badge highlights
  icon-card.tsx        Gallery grid icon item with lift effect and download button
  icon-row.tsx         Compact list item
  navbar.tsx           Sticky navigation with responsive mobile menu
  scale-slider.tsx     Dedicated icon scale slider mechanism
  specimen-viewer.tsx  Active specimen stage, specs, and scale preview
  wordmark.tsx         Brand logo and typography
public/
  brand/           Brand logo and favicon
  icons/
    yellow/        Yellow ICO files
    purple/        Purple ICO files
  og-image.jpg     Social preview OpenGraph image
  robots.txt       Search engine indexing instructions
```

## Icon files

The ICO files are served from `public/icons/yellow` and `public/icons/purple`. Their names, categories, colorways, and stable IDs are defined in [`app/icon-data.ts`](app/icon-data.ts). Keep the filenames and folder names in sync with those records. Some original filenames contain spaces or spelling variations. The URL helper encodes filenames before building download and image URLs.

Favorites are stored in the visitor's browser under `pexelicons:favorites`. They are local to that browser and are not synced between devices.

## Change a folder icon in Windows

1. Download an ICO file and save it somewhere that will not move.
2. Right-click a folder and select **Properties**.
3. Open **Customize**, then select **Change Icon**.
4. Browse to the downloaded ICO file, select it, then choose **Apply** and **OK**.

Keep the ICO file at the same path. Windows uses that file to display the folder icon.

## Design direction

The site uses a cool neutral light palette (`#f4f6f8` canvas, `#ffffff` surface, `#0c0d0e` hard black ink), clean typography, zero border outlines, zero drop shadows, an interactive scale preview slider (16px to 256px), an interactive specimen showcase, and a direct Windows folder comparison between default yellow and royal purple Photos assets. Design tokens live in `app/globals.css`. Styling is expressed with Tailwind CSS utilities.

## License

See [`LICENSE`](LICENSE) for the MIT license notice included with the project.

## Project links

- Source: [github.com/vinodjangid07/Pexelicons](https://github.com/vinodjangid07/Pexelicons)
- Creator: [Vinod Jangid](https://github.com/vinodjangid07)
