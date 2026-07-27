// Static site generator for the Hevinet website.
// Run with: node build.js   (from inside /generator)
// Regenerates every HTML file in ../site/ from the templates + data
// in this folder. Does NOT touch ../site/assets — edit CSS/JS there directly.

const fs = require("fs");
const path = require("path");
const { layout } = require("./partials");
const pages = require("./pages");
const products = require("./data/products");

const SITE_DIR = path.join(__dirname, "..", "site");
const PRODUCTS_DIR = path.join(SITE_DIR, "products");

function write(filePath, html) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, html, "utf8");
  console.log("wrote", path.relative(path.join(__dirname, ".."), filePath));
}

// ---- root-level pages (depth 0) ----
write(
  path.join(SITE_DIR, "index.html"),
  layout({
    title: "Hevinet — Premium Indian Coffee, Tea & Spice Exports",
    description:
      "Hevinet exports premium-grade coffee, tea, turmeric, pepper, dry red chilies, cardamom, cloves, and Indian spices to businesses worldwide.",
    depth: 0,
    activePage: "home",
    body: pages.homeBody(),
  })
);

write(
  path.join(SITE_DIR, "about.html"),
  layout({
    title: "About Us — Hevinet",
    description: "Hevinet is an India-based export house bringing premium coffee, tea, and spices to international buyers.",
    depth: 0,
    activePage: "about",
    body: pages.aboutBody(),
  })
);

write(
  path.join(SITE_DIR, "quality.html"),
  layout({
    title: "Quality & Certifications — Hevinet",
    description: "APEDA registered, FSSAI licensed, and Spices Board of India registered — Hevinet's quality control and export process.",
    depth: 0,
    activePage: "quality",
    body: pages.qualityBody(),
  })
);

write(
  path.join(SITE_DIR, "contact.html"),
  layout({
    title: "Contact Us — Hevinet",
    description: "Get in touch with Hevinet for samples, pricing, and export inquiries.",
    depth: 0,
    activePage: "contact",
    body: pages.contactBody(),
  })
);

// ---- products overview (physically inside /products/, so depth 1 for asset paths) ----
write(
  path.join(PRODUCTS_DIR, "index.html"),
  layout({
    title: "Our Products — Hevinet",
    description: "Thirteen categories of premium Indian agricultural exports: coffee, tea, turmeric, pepper, chilies, cardamom, cloves, and more.",
    depth: 1,
    activePage: "products",
    body: pages.productsOverviewBody(),
  })
);

// ---- individual product pages (depth 1) ----
products.forEach((product) => {
  write(
    path.join(PRODUCTS_DIR, `${product.slug}.html`),
    layout({
      title: `${product.name} — Hevinet`,
      description: product.tagline,
      depth: 1,
      activePage: product.slug,
      body: pages.productDetailBody(product),
    })
  );
});

console.log(`\nDone. Generated ${4 + 1 + products.length} pages into /site.`);
