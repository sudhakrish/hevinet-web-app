import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { products, siteInfo } from "../data/site";

function HomePage() {
  const heroSlides = useMemo(
    () =>
      products
        .filter((product) => product.heroImage)
        .map((product) => ({ src: product.heroImage as string, alt: product.shortName })),
    []
  );

  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

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
              {siteInfo.hero.ctaPrimary}
            </Link>
            <Link className="btn btn-outline" to="/contact">
              {siteInfo.hero.ctaSecondary}
            </Link>
          </div>
        </div>
        <div className="hero-art">
          <div className="photo-ring">
            {heroSlides.map((slide, index) => (
              <img
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                className={index === heroIndex ? "hero-slide active" : "hero-slide"}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="trust-bar">
          {siteInfo.home.trustBar.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      <section className="about-snippet">
        <div className="about-snippet-inner">
          <div className="col">
            <p className="eyebrow">{siteInfo.about.label}</p>
            <h2 className="section-title">{siteInfo.about.title}</h2>
            <p className="section-intro">{siteInfo.about.intro}</p>
            <Link className="btn btn-outline" to="/about">
              {siteInfo.home.exportPreview.aboutButton}
            </Link>
          </div>
          <div className="col">
            <div className="about-card">
              <h3>{siteInfo.about.featureHeading}</h3>
              <p>{siteInfo.about.featureCopy}</p>
              {/* <div className="badges">
                {siteInfo.about.featureBadges.map((badge) => (
                  <span key={badge} className="badge">
                    {badge}
                  </span>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="export-preview">
        <p className="eyebrow center">{siteInfo.home.exportPreview.eyebrow}</p>
        <h2 className="section-title center">{siteInfo.home.exportPreview.title}</h2>
        {/* <p className="section-intro center">{siteInfo.home.exportPreview.intro}</p> */}
        <div className="product-grid">
          {featuredProducts.map((product) => (
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
        <div className="section-actions">
          <Link className="btn btn-outline" to="/products">
            {siteInfo.home.exportPreview.cta}
          </Link>
        </div>
      </section>

      <section>
        <p className="eyebrow center">{siteInfo.home.whySection.eyebrow}</p>
        <h2 className="section-title center">{siteInfo.home.whySection.title}</h2>
        <div className="why-grid">
          {siteInfo.home.whySection.items.map((item) => (
            <div key={item.heading} className="why-item">
              <div className="icon">{item.icon}</div>
              <div>
                <h4>{item.heading}</h4>
                <p>{item.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="markets">
        <p className="eyebrow center">{siteInfo.home.markets.eyebrow}</p>
        <h2 className="section-title center">{siteInfo.home.markets.title}</h2>
        <div className="market-list">
          {siteInfo.home.markets.items.map((market) => (
            <div key={market.heading} className="m">
              <div className="flag">{market.flag}</div>
              <h5>{market.heading}</h5>
              <p>{market.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <h2>{siteInfo.home.ctaBand.heading}</h2>
        <p>{siteInfo.home.ctaBand.description}</p>
        <Link className="btn btn-outline" to="/contact">
          {siteInfo.home.ctaBand.cta}
        </Link>
      </section>
    </>
  );
}

export default HomePage;
