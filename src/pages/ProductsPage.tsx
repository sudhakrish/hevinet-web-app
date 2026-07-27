import { Link } from "react-router-dom";
import { products } from "../data/site";

function ProductsPage() {
  return (
    <section style={{ background: "var(--gray)" }}>
      <p className="eyebrow">Full range</p>
      <h2 className="section-title">Our <span className="accent">Products</span></h2>
      <p className="section-intro">
        From highland coffee to hand-picked spices, Hevinet exports thirteen core categories of premium Indian
        agricultural produce. Select a product to view detailed specifications, grades, and packaging options.
      </p>
      <div className="product-grid">
        {products.map((product) => (
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
    </section>
  );
}

export default ProductsPage;
