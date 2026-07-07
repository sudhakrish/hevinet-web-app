# hevinet-web

This project is a scalable, theme-driven React website built with React Router and TypeScript.

## Project structure

- `app/components/layout/` — shared layout components like `Navbar` and `Logo`.
- `app/components/sections/` — individual page sections for the homepage.
- `app/components/ui/` — reusable UI primitives such as `Section` wrappers.
- `app/data/site.ts` — centralized content, navigation, and theme settings.
- `public/theme/` — all replaceable theme assets for the project.
  - `images/` — brand and UI imagery.
  - `fonts/` — custom font files.
  - `data/` — place for any theme-specific static JSON or text files.

## How to replace the theme

To swap the website theme, replace the contents of `public/theme/` with a new folder containing:

- `images/` — new logo and image files.
- `fonts/` — custom fonts used by the brand.
- `data/` — optional static text or JSON data files.

Update `app/data/site.ts` only if the section titles or copy need to change with the new theme.

## Key files

- `app/data/site.ts` — the main theme config and content source.
- `app/components/layout/Navbar.tsx` — navigation with active underline animation.
- `app/components/layout/Logo.tsx` — brand logo and text.
- `app/components/sections/` — homepage sections for hero, about, products, licenses, and contact.
- `app/components/ui/Section.tsx` — reusable section wrapper.

## Run locally

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Notes

- Assets referenced in the app now use the `public/theme/` path.
- The logo text uses the custom `Handsen` font supplied under `public/theme/fonts/`.
- This structure is designed so a designer or developer can replace the entire `public/theme` folder and keep the page implementation intact.
