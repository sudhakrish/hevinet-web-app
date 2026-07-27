# Hevinet Website — React Version

This repository contains a React conversion of the Hevinet static website.
It preserves the original site structure, styling, and content while
providing a modern React + Vite development workflow.

## What's in here

```
site/                   ← THE WEBSITE — deploy this folder
  index.html            Home page
  about.html            About Us / company profile
  quality.html          Quality & Certifications + export process
  contact.html          Contact page with inquiry form
  products/
    index.html           Products overview (all 13 categories)
    coffee.html           \
    tea.html               \
    turmeric.html           \
    pepper.html              — one detail page per product,
    chilies.html             all built from the same template
    cardamom.html           /
    cloves.html            /
    cumin.html            /
    coriander.html       /
    ginger.html         /
    cinnamon.html
    fennel.html
    fenugreek.html
  assets/
    css/style.css        All styling (brand colors, layout, responsive rules)
    js/main.js            Mobile nav toggle (progressive enhancement only)
    fonts/                Self-hosted webfonts (see "About the fonts" below)
    img/                  Logo (color + white versions) and favicon

generator/               ← optional: regenerates everything in /site
  data/products.js        All product content (name, origin, grades, specs...)
  partials.js              Header / footer / <head> templates
  pages.js                 Page-body templates (home, about, product detail...)
  build.js                 Run this to (re)write every file in /site
  package.json
```

## Previewing locally

No install needed — any static file server works:

```
cd site
python3 -m http.server 8000
# open http://localhost:8000
```

or with Node: `npx serve site`.

## Editing content

**To change existing text** (taglines, specs, About copy, etc.): edit the
relevant file directly in `/site`. It's plain HTML — safe to hand-edit.

**To add, remove, or re-order products** (recommended way, avoids editing
13 pages by hand): edit `generator/data/products.js`, then run:

```
cd generator
node build.js
```

This regenerates every page in `/site` (including nav dropdowns, the
products overview grid, and footer links on all 18 pages) from that one
data file. It never touches `/site/assets` — CSS/JS/images are edited
directly.

No dependencies to install — `build.js` is plain Node.js.

## React app location

The new React application lives in the repository root:

- `src/` — React source files
- `public/assets/` — shared static CSS, fonts, and images
- `index.html` — Vite entrypoint
- `package.json` — app dependencies and scripts
- `vite.config.ts` — Vite configuration
- `tsconfig.json` / `tsconfig.node.json` — TypeScript configuration

## Previewing locally

Install dependencies and run the React development server:

```bash
cd /Users/sudhakarkrishnan/Desktop/Workspace/hevinet-website-source_3
npm install
npm run dev
```

Then open the URL shown by Vite.

## Build and typecheck

```bash
npm run build
npm run typecheck
```

## Preview production build

```bash
npm run preview
```

## Still to do before launch

Search each file for `[PLACEHOLDER]` and `placeholder-tag` — these mark
spots that need real information:

- Registered office address, phone/WhatsApp number, and email (`contact.html`
  and the footer on every page).
- APEDA / FSSAI / Spices Board of India registration numbers (`quality.html`).
- Packaging options and minimum order quantities (every product page).
- The contact form's `action` attribute in `contact.html` currently points
  to a placeholder — wire it up to a form handler (e.g. Formspree, Netlify
  Forms, or your own backend endpoint) before launch.
- Real photography: the product "visual" panels and card thumbnails
  currently use emoji as stand-ins — swap in real photos of estates,
  processing, and packed product.

## About the fonts

The logo and headings use a hand-lettered display font. The licensed font
("Hand of Sean") isn't publicly available for web embedding, so this build
self-hosts **Caveat** (a similar handwritten Google Font) as a stand-in —
see `assets/fonts/`. Body text uses **Poppins**. Both are bundled as local
`.woff2` files and referenced via `@font-face` in `style.css`, so the site
has no external font dependency and works offline.

To use the real "Hand of Sean" font once you have a license: drop its
`.woff2` file(s) into `assets/fonts/` and update the `@font-face` rules at
the top of `assets/css/style.css` to point to them instead.

## Brand reference

| Token | Value |
|---|---|
| Primary orange | `#FF6600` |
| Cream | `#FAE6BE` |
| Black / ink | `#000000` |
| Light grey | `#F5F5F5` |
| White | `#FFFFFF` |

All defined as CSS custom properties at the top of `assets/css/style.css`
(`--orange`, `--cream`, etc.) — change them there to re-theme the whole site.
