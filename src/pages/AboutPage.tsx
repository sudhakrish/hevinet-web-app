import { siteInfo } from "../data/site";

function AboutPage() {
  return (
    <section>
      <p className="eyebrow">{siteInfo.about.sectionHeading}</p>
      <h2 className="section-title">{siteInfo.about.title}</h2>
      <div className="profile-grid">
        <div className="col">
          {siteInfo.about.profileParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="col">
          <div className="about-card">
            <h3>{siteInfo.about.missionHeading}</h3>
            <p>{siteInfo.about.missionCopy}</p>
          </div>
        </div>
      </div>
      <h3 style={{ marginTop: 50, fontFamily: "'Caveat', cursive", fontSize: 30, color: "var(--orange-dark)" }}>
        {siteInfo.about.valuesTitle}
      </h3>
      <div className="values-grid">
        {siteInfo.about.values.map((value) => (
          <div key={value.heading} className="value-card">
            <div className="icon">{value.icon}</div>
            <h4>{value.heading}</h4>
            <p>{value.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutPage;
