import { Link } from "react-router-dom";
import { useMemo } from "react";
import { products, siteInfo } from "../data/site";

function HomePage() {
  const featuredProducts = useMemo(() => {
    const shuffled = [...products].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 4);
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>{siteInfo.hero.heading}</h1>
          <p>{siteInfo.hero.description}</p>
          <div className="hero-btns">
            <Link className="btn btn-primary" to="/products">
              Explore Our Products
            </Link>
            <Link className="btn btn-outline" to="/contact">
              Request a Quote
            </Link>
          </div>
        </div>
        <div className="hero-art">
          <div className="photo-ring">
            <img src="/assets/img/hero-coffee.jpg" alt="Freshly roasted Hevinet coffee beans" />
          </div>
        </div>
      </section>

      <div className="trust-bar">
        <span>APEDA Registered</span>
        <span>•</span>
        <span>FSSAI Licensed</span>
        <span>•</span>
        <span>Spices Board of India Registered</span>
        <span>•</span>
        <span>Serving GCC &amp; European Markets</span>
      </div>

      <section className="about-snippet">
        <div className="about-snippet-inner">
          <div className="col">
            <p className="eyebrow">{siteInfo.about.label}</p>
            <h2 className="section-title">About <span className="accent">Hevinet</span></h2>
            <p className="section-intro">{siteInfo.about.intro}</p>
            <Link className="btn btn-outline" to="/about">
              Read More →
            </Link>
          </div>
          <div className="col">
            <div className="about-card">
              <h3>{siteInfo.about.featureHeading}</h3>
              <p>{siteInfo.about.featureCopy}</p>
              <div className="badges">
                {siteInfo.about.featureBadges.map((badge) => (
                  <span key={badge} className="badge">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--gray)" }}>
        <p className="eyebrow center">What we export</p>
        <h2 className="section-title center">Our <span className="accent">Products</span></h2>
        <p className="section-intro center">Thirteen core categories of premium Indian agricultural produce.</p>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <Link key={product.slug} className="product-card" to={`/products/${product.slug}`}>
              <div className="thumb">{product.icon}</div>
              <div className="info">
                <h4>{product.shortName}</h4>
                <p>{product.tagline}</p>
                <span className="view">View Details →</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="section-actions" style={{ textAlign: "center", marginTop: 32 }}>
          <Link className="btn btn-outline" to="/products">
            Show more products
          </Link>
        </div>
      </section>

      <section>
        <p className="eyebrow center">Why hevinet</p>
        <h2 className="section-title center">Why Choose <span className="accent">Us</span></h2>
        <div className="why-grid">
          <div className="why-item">
            <div className="icon">🌾</div>
            <div>
              <h4>Direct Sourcing</h4>
              <p>Long-standing grower and estate relationships across India's key growing states.</p>
            </div>
          </div>
          <div className="why-item">
            <div className="icon">🔬</div>
            <div>
              <h4>Rigorous Quality Control</h4>
              <p>Every lot inspected and lab-tested before it ships.</p>
            </div>
          </div>
          <div className="why-item">
            <div className="icon">📦</div>
            <div>
              <h4>Custom Packaging</h4>
              <p>Bulk and private-label options tailored to your market.</p>
            </div>
          </div>
          <div className="why-item">
            <div className="icon">📋</div>
            <div>
              <h4>Full Compliance</h4>
              <p>APEDA, FSSAI, and Spices Board registration on every shipment.</p>
            </div>
          </div>
          <div className="why-item">
            <div className="icon">🚢</div>
            <div>
              <h4>Dependable Logistics</h4>
              <p>FCL and LCL shipments handled with reliable port coordination.</p>
            </div>
          </div>
          <div className="why-item">
            <div className="icon">🤝</div>
            <div>
              <h4>Responsive Support</h4>
              <p>One point of contact from quote to delivery.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="markets">
        <p className="eyebrow center">Where we ship</p>
        <h2 className="section-title center">Markets We <span className="accent">Serve</span></h2>
        <div className="market-list">
          <div className="m">
            <div className="flag">🇦🇪</div>
            <h5>Middle East / GCC</h5>
            <p>UAE, Saudi Arabia, Oman, Qatar, Kuwait</p>
          </div>
          <div className="m">
            <div className="flag">🇪🇺</div>
            <h5>Europe</h5>
            <p>UK, Germany, Netherlands &amp; neighbouring markets</p>
          </div>
          <div className="m">
            <div className="flag">🌍</div>
            <h5>And beyond</h5>
            <p>Expanding to new markets on request</p>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <h2>Looking for a reliable export partner?</h2>
        <p>Get in touch for samples, specifications, and pricing.</p>
        <Link className="btn btn-outline" to="/contact">
          Contact Us
        </Link>
      </section>
    </>
  );
}

export default HomePage;
