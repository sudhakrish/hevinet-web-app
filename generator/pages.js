const products = require("./data/products");

function productCard(p, hrefPrefix) {
  return `      <a class="product-card" href="${hrefPrefix}${p.slug}.html">
        <div class="thumb">${p.icon}</div>
        <div class="info"><h4>${p.shortName}</h4><p>${p.tagline}</p><span class="view">View Details →</span></div>
      </a>`;
}

function homeBody() {
  const cards = products.map((p) => productCard(p, "products/")).join("\n");
  return `<section class="hero" style="padding-top:60px;">
  <div class="hero-text">
    <h1>Rooted in India.<br><span>Trusted</span> Worldwide.</h1>
    <p>Hevinet exports premium-grade coffee, tea, and spices from India's finest growing regions to businesses across the globe.</p>
    <div class="hero-btns">
      <a class="btn btn-primary" href="products/index.html">Explore Our Products</a>
      <a class="btn btn-outline" href="contact.html">Request a Quote</a>
    </div>
  </div>
  <div class="hero-art">
    <div class="photo-ring"><img src="assets/img/hero-coffee.jpg" alt="Freshly roasted Hevinet coffee beans" /></div>
  </div>
</section>

<div class="trust-bar">
  <span>APEDA Registered</span><span>•</span><span>FSSAI Licensed</span><span>•</span><span>Spices Board of India Registered</span><span>•</span><span>Serving GCC &amp; European Markets</span>
</div>

<section class="about-snippet">
  <div class="about-snippet-inner">
    <div class="col">
      <p class="eyebrow">Who we are</p>
      <h2 class="section-title">About <span class="accent">Hevinet</span></h2>
      <p class="section-intro">Hevinet is an India-based export house bringing premium coffee, tea, and spices from trusted growing regions to international buyers, backed by rigorous quality control and full export documentation.</p>
      <a class="btn btn-outline" href="about.html">Read More →</a>
    </div>
    <div class="col">
      <div class="about-card">
        <h3>Direct from source</h3>
        <p>We work with growers, curing houses, and processing units across Karnataka, Kerala, Tamil Nadu, Andhra Pradesh, Telangana, Rajasthan, Gujarat, and Assam.</p>
        <div class="badges">
          <span class="badge">APEDA</span>
          <span class="badge">FSSAI</span>
          <span class="badge">Spices Board of India</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section style="background:var(--gray);">
  <p class="eyebrow center">What we export</p>
  <h2 class="section-title center">Our <span class="accent">Products</span></h2>
  <p class="section-intro center">Thirteen core categories of premium Indian agricultural produce.</p>
  <div class="product-grid">
${cards}
  </div>
</section>

<section>
  <p class="eyebrow center">Why hevinet</p>
  <h2 class="section-title center">Why Choose <span class="accent">Us</span></h2>
  <div class="why-grid">
    <div class="why-item"><div class="icon">🌾</div><div><h4>Direct Sourcing</h4><p>Long-standing grower and estate relationships across India's key growing states.</p></div></div>
    <div class="why-item"><div class="icon">🔬</div><div><h4>Rigorous Quality Control</h4><p>Every lot inspected and lab-tested before it ships.</p></div></div>
    <div class="why-item"><div class="icon">📦</div><div><h4>Custom Packaging</h4><p>Bulk and private-label options tailored to your market.</p></div></div>
    <div class="why-item"><div class="icon">📋</div><div><h4>Full Compliance</h4><p>APEDA, FSSAI, and Spices Board registration on every shipment.</p></div></div>
    <div class="why-item"><div class="icon">🚢</div><div><h4>Dependable Logistics</h4><p>FCL and LCL shipments handled with reliable port coordination.</p></div></div>
    <div class="why-item"><div class="icon">🤝</div><div><h4>Responsive Support</h4><p>One point of contact from quote to delivery.</p></div></div>
  </div>
</section>

<section class="markets">
  <p class="eyebrow center">Where we ship</p>
  <h2 class="section-title center">Markets We <span class="accent">Serve</span></h2>
  <div class="market-list">
    <div class="m"><div class="flag">🇦🇪</div><h5>Middle East / GCC</h5><p>UAE, Saudi Arabia, Oman, Qatar, Kuwait</p></div>
    <div class="m"><div class="flag">🇪🇺</div><h5>Europe</h5><p>UK, Germany, Netherlands &amp; neighbouring markets</p></div>
    <div class="m"><div class="flag">🌍</div><h5>And beyond</h5><p>Expanding to new markets on request</p></div>
  </div>
</section>

<section class="cta-band">
  <h2>Looking for a reliable export partner?</h2>
  <p style="margin-bottom:26px;">Get in touch for samples, specifications, and pricing.</p>
  <a class="btn btn-outline" href="contact.html">Contact Us</a>
</section>`;
}

function aboutBody() {
  return `<section>
  <p class="eyebrow">Company profile</p>
  <h2 class="section-title">About <span class="accent">Hevinet</span></h2>
  <div class="profile-grid">
    <div class="col">
      <p>Hevinet is an India-based export house dedicated to bringing the finest agricultural products — coffee, tea, turmeric, pepper, dry red chilies, cardamom, cloves, and a full range of Indian spices — from India's most celebrated growing regions to businesses around the world.</p>
      <p>We work directly with growers, curing houses, and processing units across Karnataka, Kerala, Tamil Nadu, Andhra Pradesh, Telangana, Rajasthan, Gujarat, and Assam to source produce that meets the quality, consistency, and documentation standards international buyers expect.</p>
      <p>Registered with APEDA, licensed under FSSAI, and registered with the Spices Board of India, Hevinet is built to serve as a compliant, dependable, long-term sourcing partner — not just a one-time supplier. <span class="placeholder-tag">founding story to add</span></p>
    </div>
    <div class="col">
      <div class="about-card">
        <h3>Mission</h3>
        <p>To make India's finest agricultural exports accessible to global buyers through consistent quality, transparent sourcing, and dependable service.</p>
      </div>
    </div>
  </div>
  <h3 style="margin-top:50px;font-family:'Caveat',cursive;font-size:30px;color:var(--orange-dark);">Our Values</h3>
  <div class="values-grid">
    <div class="value-card"><div class="icon">💯</div><h4>Quality</h4><p>Never compromise on grade, purity, or documentation.</p></div>
    <div class="value-card"><div class="icon">🤲</div><h4>Integrity</h4><p>What we quote and certify is exactly what we ship.</p></div>
    <div class="value-card"><div class="icon">⏱️</div><h4>Reliability</h4><p>Clear communication and on-time delivery, every order.</p></div>
    <div class="value-card"><div class="icon">🌱</div><h4>Partnership</h4><p>Fair dealings with growers, built for the long term.</p></div>
  </div>
</section>`;
}

function productsOverviewBody() {
  const cards = products.map((p) => productCard(p, "")).join("\n");
  return `<section style="background:var(--gray);">
  <p class="eyebrow">Full range</p>
  <h2 class="section-title">Our <span class="accent">Products</span></h2>
  <p class="section-intro">From highland coffee to hand-picked spices, Hevinet exports thirteen core categories of premium Indian agricultural produce. Select a product to view detailed specifications, grades, and packaging options.</p>
  <div class="product-grid">
${cards}
  </div>
</section>`;
}

function specRow([label, value]) {
  return `          <tr><td>${label}</td><td>${value}</td></tr>`;
}

function productDetailBody(product) {
  const others = products.filter((p) => p.slug !== product.slug);
  const chips = others
    .map((p) => `        <a class="chip" href="${p.slug}.html">${p.shortName}</a>`)
    .join("\n");

  return `<section>
  <div class="product-detail">
    <div class="pd-visual">${product.icon}</div>
    <div class="pd-info">
      <p class="eyebrow">Product</p>
      <h2 class="section-title" style="font-size:38px;">${product.name}</h2>
      <p class="tag">${product.tagline}</p>
      <p>${product.overview}</p>
      <table class="spec-table">
${product.specs.map(specRow).join("\n")}
      </table>
      <div class="pd-why"><strong>Why buy from Hevinet:</strong> ${product.why}</div>
      <div class="pd-actions">
        <a class="btn btn-primary" href="../contact.html">Request a Sample</a>
        <a class="btn btn-outline" href="../contact.html">Download Spec Sheet</a>
        <a class="btn btn-outline" href="../contact.html">Request Today's Price</a>
      </div>
    </div>
  </div>
  <div class="other-products">
    <p class="eyebrow">Explore more</p>
    <div class="chip-row">
${chips}
    </div>
  </div>
</section>`;
}

function qualityBody() {
  return `<section style="background:var(--gray);">
  <p class="eyebrow">Trust &amp; compliance</p>
  <h2 class="section-title">Quality &amp; <span class="accent">Certifications</span></h2>
  <p class="section-intro">Hevinet operates under the registrations and licenses that matter to international buyers of Indian agricultural exports.</p>
  <div class="cert-grid">
    <div class="cert-card"><h4>APEDA Registered</h4><p>Registered with the Agricultural &amp; Processed Food Products Export Development Authority.</p></div>
    <div class="cert-card"><h4>FSSAI Licensed</h4><p>Licensed under India's Food Safety and Standards Authority.</p></div>
    <div class="cert-card"><h4>Spices Board of India Registered</h4><p>Covers our pepper, turmeric, cardamom, chili, and clove exports.</p></div>
  </div>
  <p class="note-pill">Add registration/license numbers here once available — buyers often ask for these directly.</p>
</section>
<section>
  <p class="eyebrow">How we work</p>
  <h2 class="section-title">Our Export <span class="accent">Process</span></h2>
  <div class="process-steps">
    <div class="step"><div class="num">1</div><h4>Inquiry &amp; Sample</h4><p>Share product, grade, quantity, and target market.</p></div>
    <div class="step"><div class="num">2</div><h4>Quotation</h4><p>Detailed quote: grade, packaging, Incoterms, lead time.</p></div>
    <div class="step"><div class="num">3</div><h4>Testing &amp; Docs</h4><p>Lots tested for moisture, purity, and grade.</p></div>
    <div class="step"><div class="num">4</div><h4>Sourcing &amp; Packing</h4><p>Goods sourced and packed to specification.</p></div>
    <div class="step"><div class="num">5</div><h4>Pre-Shipment Check</h4><p>Final verification before it leaves the warehouse.</p></div>
    <div class="step"><div class="num">6</div><h4>Shipping</h4><p>Container booking and port handling managed end-to-end.</p></div>
    <div class="step"><div class="num">7</div><h4>After-Sales</h4><p>We follow up to confirm satisfaction and support repeat orders.</p></div>
  </div>
</section>`;
}

function contactBody() {
  return `<section>
  <p class="eyebrow">Get in touch</p>
  <h2 class="section-title">Contact <span class="accent">Us</span></h2>
  <p class="section-intro">Ready to source premium Indian coffee, tea, or spices? Reach out for samples, pricing, or to discuss your requirements.</p>
  <div class="contact-wrap">
    <form class="contact-form" action="[PLACEHOLDER: form handler endpoint]" method="POST">
      <label for="name">Full Name</label><input id="name" name="name" type="text" placeholder="Your name" required />
      <label for="company">Company Name</label><input id="company" name="company" type="text" placeholder="Your company" />
      <label for="country">Country</label><input id="country" name="country" type="text" placeholder="Your country" />
      <label for="product">Product of Interest</label>
      <select id="product" name="product">
        <option>Coffee</option><option>Tea</option><option>Turmeric</option><option>Pepper</option>
        <option>Dry Red Chilies</option><option>Cardamom</option><option>Cloves</option>
        <option>Cumin Seeds</option><option>Coriander Seeds</option><option>Dried Ginger</option>
        <option>Cinnamon Sticks</option><option>Fennel Seeds</option><option>Fenugreek Seeds</option>
        <option>Other</option>
      </select>
      <label for="qty">Quantity Required</label><input id="qty" name="qty" type="text" placeholder="e.g. 1 container / month" />
      <label for="message">Message</label><textarea id="message" name="message" rows="4" placeholder="Tell us about your requirement"></textarea>
      <button class="btn btn-primary" type="submit" style="margin-top:20px;">Send Inquiry</button>
    </form>
    <div class="contact-details">
      <div class="item"><h4>Registered Office</h4><p>[Address]<span class="placeholder-tag">placeholder</span></p></div>
      <div class="item"><h4>Phone / WhatsApp</h4><p>[Phone number]<span class="placeholder-tag">placeholder</span></p></div>
      <div class="item"><h4>Email</h4><p>[email@hevinet.com]<span class="placeholder-tag">placeholder</span></p></div>
      <div class="item"><h4>Business Hours</h4><p>[Hours]<span class="placeholder-tag">placeholder</span></p></div>
    </div>
  </div>
</section>`;
}

module.exports = {
  homeBody,
  aboutBody,
  productsOverviewBody,
  productDetailBody,
  qualityBody,
  contactBody,
};
