import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/site";

function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <section>
        <h2>Product not found</h2>
        <p>The requested product does not exist.</p>
        <Link className="btn btn-outline" to="/products">
          Back to products
        </Link>
      </section>
    );
  }

  return (
    <>
      <section className="product-detail">
        <div className="pd-visual">{product.icon}</div>
        <div className="pd-info">
          <p className="eyebrow">Product</p>
          <h2 className="section-title">{product.name}</h2>
          <p className="tag">{product.tagline}</p>
          <p>{product.overview}</p>
          <table className="spec-table">
            <tbody>
              {product.specs.map(([key, value]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pd-why">
            <strong>Why buy from Hevinet:</strong>
            <p>{product.why}</p>
          </div>
          <div className="pd-actions">
            <Link className="btn btn-primary" to="/contact">
              Request a Sample
            </Link>
            <Link className="btn btn-outline" to="/contact">
              Download Spec Sheet
            </Link>
            <Link className="btn btn-outline" to="/contact">
              Request Today's Price
            </Link>
          </div>
        </div>
      </section>

      <section className="other-products">
        <p className="eyebrow">Explore more products</p>
        <div className="chip-row">
          {products
            .filter((item) => item.slug !== product.slug)
            .slice(0, 6)
            .map((item) => (
              <Link key={item.slug} className="chip" to={`/products/${item.slug}`}>
                {item.shortName}
              </Link>
            ))}
        </div>
      </section>
    </>
  );
}

export default ProductDetailPage;
