import { siteInfo } from "../data/site";

function AboutPage() {
  return (
    <section>
      <p className="eyebrow">Company profile</p>
      <h2 className="section-title">About <span className="accent">Hevinet</span></h2>
      <div className="profile-grid">
        <div className="col">
          <p>{siteInfo.about.intro}</p>
          <p>
            We work directly with growers, curing houses, and processing units across Karnataka, Kerala,
            Tamil Nadu, Andhra Pradesh, Telangana, Rajasthan, Gujarat, and Assam to source produce that meets
            the quality, consistency, and documentation standards international buyers expect.
          </p>
          <p>
            Registered with APEDA, licensed under FSSAI, and registered with the Spices Board of India,
            Hevinet is built to serve as a compliant, dependable, long-term sourcing partner — not just a
            one-time supplier.
          </p>
        </div>
        <div className="col">
          <div className="about-card">
            <h3>Mission</h3>
            <p>
              To make India's finest agricultural exports accessible to global buyers through consistent
              quality, transparent sourcing, and dependable service.
            </p>
          </div>
        </div>
      </div>
      <h3 style={{ marginTop: 50, fontFamily: "'Caveat', cursive", fontSize: 30, color: "var(--orange-dark)" }}>
        Our Values
      </h3>
      <div className="values-grid">
        <div className="value-card">
          <div className="icon">💯</div>
          <h4>Quality</h4>
          <p>Never compromise on grade, purity, or documentation.</p>
        </div>
        <div className="value-card">
          <div className="icon">🤲</div>
          <h4>Integrity</h4>
          <p>What we quote and certify is exactly what we ship.</p>
        </div>
        <div className="value-card">
          <div className="icon">⏱️</div>
          <h4>Reliability</h4>
          <p>Clear communication and on-time delivery, every order.</p>
        </div>
        <div className="value-card">
          <div className="icon">🌱</div>
          <h4>Partnership</h4>
          <p>Fair dealings with growers, built for the long term.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
