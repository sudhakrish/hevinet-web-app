# Hevinet Website — React + Vite

This repository contains the React/Vite version of the Hevinet website.
It is built as a modern SPA with React 19, TypeScript, React Router, and Vite.

## Project structure

- `src/` — React source files and routes
- `public/` — static assets served by Vite
- `package.json` — scripts and dependencies
- `vite.config.ts` — Vite configuration
- `tsconfig.json` / `tsconfig.node.json` — TypeScript settings
- `server.js` — optional backend contact API endpoint

## Local development

Install dependencies once:

```bash
cd /Users/sudhakarkrishnan/Desktop/Workspace/hevinet-web-app
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown by Vite (default `http://localhost:4173`).

### Optional API server

The frontend proxies `/api` requests to `http://localhost:4174` when running
in development. To run the contact API backend in parallel, start it in a
separate terminal:

```bash
npm run serve:api
```

## Scripts

- `npm run dev` — start Vite development server
- `npm run build` — compile and bundle for production
- `npm run preview` — preview the production build locally
- `npm run typecheck` — run TypeScript type checking
- `npm run serve:api` — run the backend contact API server

## Recommended workflow

- Use `npm run dev` while developing UI and routes.
- Open `http://localhost:4173` in your browser.
- If you need to test the contact form, run `npm run serve:api` too.

## Building for production

```bash
npm run build
npm run preview
```

## Editing content

- Site data and navigation are stored in `src/data/site.ts`.
- Page components live under `src/pages/`.
- Shared UI pieces are in `src/components/`.
- Global styles are in `src/styles.css`.

## Notes

- The home page product section now shows four random featured products and
  includes a "Show more products" button linking to the full products page.
- Contact details are centralized in `src/data/site.ts` and rendered by both
  the contact page and the footer.
- The Vite config is set to proxy `/api` traffic to the backend server.

## License

This repository is private.
