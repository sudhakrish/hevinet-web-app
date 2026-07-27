import { Link } from "react-router-dom";
import { navLinks, products, siteInfo } from "../data/site";

function Footer() {
  return (
    <footer className="site">
      <div className="footer-grid">
        <div>
          <div className="footer-logo">
            <img src="/assets/img/logo-white.png" alt="Hevinet logo" />
          </div>
          <p style={{ maxWidth: 260, color: "#cfc7b3", fontSize: 13 }}>
            Premium Indian coffee, tea, and spice exports — rooted in India, trusted worldwide.
          </p>
        </div>
        <div>
          <h5>Quick Links</h5>
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path}>
              {link.label}
            </Link>
          ))}
        </div>
        <div>
          <h5>Products</h5>
          {products.slice(0, 6).map((product) => (
            <Link key={product.slug} to={`/products/${product.slug}`}>
              {product.shortName}
            </Link>
          ))}
        </div>
        <div>
          <h5>More Products</h5>
          {products.slice(6).map((product) => (
            <Link key={product.slug} to={`/products/${product.slug}`}>
              {product.shortName}
            </Link>
          ))}
        </div>
        <div>
          <h5>Contact</h5>
          <p style={{ color: "#cfc7b3", fontSize: 13 }}>
            Chennai, Tamil Nadu, India
            <br />
            <a href="tel:+919789851808" style={{ color: "#cfc7b3", display: "inline-block", marginTop: 4 }}>
              +91 97898 51808
            </a>
            <br />
            <a href={`mailto:${siteInfo.contact.email}`} style={{ color: "#cfc7b3", display: "inline-block" }}>
              {siteInfo.contact.email}
            </a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Hevinet. All Rights Reserved.</span>
        <span>APEDA Registered · FSSAI Licensed · Spices Board of India Registered</span>
      </div>
    </footer>
  );
}

export default Footer;
