const products = require("./data/products");

// depth: 0 for pages at the site root (index.html, about.html, ...),
//        1 for pages inside /products/ (products/coffee.html, ...)
function root(depth) {
  return depth === 0 ? "" : "../";
}
function productsRoot(depth) {
  return depth === 0 ? "products/" : "";
}

function head(title, description, depth) {
  const r = root(depth);
  return `<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${title}</title>
<meta name="description" content="${description}" />
<link rel="icon" type="image/png" href="${r}assets/img/favicon.png" />
<link rel="stylesheet" href="${r}assets/css/style.css" />
</head>`;
}

function header(depth, activePage) {
  const r = root(depth);
  const pr = productsRoot(depth);
  const isActive = (key) => (activePage === key ? " active" : "");
  const isProductsActive = activePage === "products" || products.some((p) => p.slug === activePage);

  const dropdownLinks = products
    .map((p) => {
      // From within /products/, link to the sibling file directly.
      // From the root, link into the products/ folder.
      const href = depth === 0 ? `${pr}${p.slug}.html` : `${p.slug}.html`;
      return `          <a href="${href}">${p.shortName}</a>`;
    })
    .join("\n");

  return `<header class="site">
  <div class="logo-wrap">
    <a href="${r}index.html"><img src="${r}assets/img/logo-color.png" alt="Hevinet logo" /></a>
  </div>
  <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
  <nav class="main-nav">
    <ul>
      <li><a href="${r}index.html" class="${isActive("home").trim()}">Home</a></li>
      <li><a href="${r}about.html" class="${isActive("about").trim()}">About Us</a></li>
      <li class="nav-products">
        <a href="${depth === 0 ? pr + "index.html" : "index.html"}" class="${isProductsActive ? "active" : ""}">Products ▾</a>
        <div class="dropdown">
${dropdownLinks}
        </div>
      </li>
      <li><a href="${r}quality.html" class="${isActive("quality").trim()}">Quality &amp; Certifications</a></li>
      <li><a href="${r}contact.html" class="${isActive("contact").trim()}">Contact</a></li>
    </ul>
  </nav>
  <a class="btn-quote" href="${r}contact.html">Request a Quote</a>
</header>`;
}

function footer(depth) {
  const r = root(depth);
  const pr = productsRoot(depth);
  const firstSeven = products.slice(0, 7);
  const restSix = products.slice(7);
  const productLink = (p) => `      <a href="${depth === 0 ? pr + p.slug : p.slug}.html">${p.shortName}</a>`;

  return `<footer class="site">
  <div class="footer-grid">
    <div>
      <div class="footer-logo">
        <img src="${r}assets/img/logo-white.png" alt="Hevinet logo" />
      </div>
      <p style="max-width:260px;color:#9a927b;font-size:13px;">Premium Indian coffee, tea, and spice exports — rooted in India, trusted worldwide.</p>
    </div>
    <div>
      <h5>Quick Links</h5>
      <a href="${r}index.html">Home</a>
      <a href="${r}about.html">About Us</a>
      <a href="${r}quality.html">Quality &amp; Certifications</a>
      <a href="${r}contact.html">Contact</a>
    </div>
    <div>
      <h5>Products</h5>
${firstSeven.map(productLink).join("\n")}
    </div>
    <div>
      <h5>More Products</h5>
${restSix.map(productLink).join("\n")}
    </div>
    <div>
      <h5>Contact</h5>
      <p style="color:#9a927b;font-size:13px;">[Address placeholder]<br>[Phone placeholder]<br>[Email placeholder]</p>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2026 Hevinet. All Rights Reserved.</span>
    <span>APEDA Registered · FSSAI Licensed · Spices Board of India Registered</span>
  </div>
</footer>
<script src="${r}assets/js/main.js"></script>`;
}

function layout({ title, description, depth, activePage, body }) {
  return `<!DOCTYPE html>
<html lang="en">
${head(title, description, depth)}
<body>
${header(depth, activePage)}
${body}
${footer(depth)}
</body>
</html>
`;
}

module.exports = { layout, root, productsRoot };
