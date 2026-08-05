import { Link } from "react-router-dom";
import { products, siteInfo } from "../data/site";

function ProductsPage() {
  return (
    <section style={{ background: "var(--gray)" }}>
      <p className="eyebrow">{siteInfo.productsPage.eyebrow}</p>
      <h2 className="section-title">{siteInfo.productsPage.title}</h2>
      <p className="section-intro">{siteInfo.productsPage.intro}</p>
      <div className="product-grid">
        {products.map((product) => (
          <Link key={product.slug} className="product-card" to={`/products/${product.slug}`}>
            <div className="thumb">
              {product.thumbImage ? <img src={product.thumbImage} alt={product.name} /> : product.icon}
            </div>
            <div className="info">
              <h4>{product.shortName}</h4>
              <p>{product.tagline}</p>
              <span className="view">{siteInfo.productsPage.viewDetails}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ProductsPage;
