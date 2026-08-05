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
            {siteInfo.footer.brandCopy}
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
          <h5>{siteInfo.footer.contactTitle}</h5>
          <p style={{ color: "#cfc7b3", fontSize: 13, margin: 0 }}>
            {siteInfo.contact.address}
            <br />
            <a href={`tel:${siteInfo.contact.phone.replace(/\s+/g, "")}`} style={{ color: "#cfc7b3", display: "inline-block", marginTop: 4 }}>
              {siteInfo.contact.phone}
            </a>
            <br />
            <a href={`mailto:${siteInfo.contact.email}`} style={{ color: "#cfc7b3", display: "inline-block" }}>
              {siteInfo.contact.email}
            </a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>{siteInfo.footer.copyright}</span>
        <span>{siteInfo.footer.complianceText}</span>
      </div>
    </footer>
  );
}

export default Footer;
