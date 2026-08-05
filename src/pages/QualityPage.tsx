import { siteInfo } from "../data/site";

function QualityPage() {
  return (
    <>
      <section style={{ background: "var(--gray)" }}>
        <p className="eyebrow">{siteInfo.quality.eyebrow}</p>
        <h2 className="section-title">{siteInfo.quality.title}</h2>
        <p className="section-intro">{siteInfo.quality.intro}</p>
        <div className="cert-grid">
          {siteInfo.quality.certifications.map((cert) => (
            <div key={cert.title} className="cert-card">
              <h4>{cert.title}</h4>
              <p>{cert.description}</p>
            </div>
          ))}
        </div>
        {/* <p className="note-pill">Add registration/license numbers here once available — buyers often ask for these directly.</p> */}
      </section>
      <section>
        <p className="eyebrow">{siteInfo.quality.sectionHeading}</p>
        <h2 className="section-title">{siteInfo.quality.processHeading}</h2>
        <div className="process-steps">
          {siteInfo.quality.process.map((step) => (
            <div key={step.step} className="step">
              <div className="num">{step.step}</div>
              <h4>{step.heading}</h4>
              <p>{step.copy}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default QualityPage;
