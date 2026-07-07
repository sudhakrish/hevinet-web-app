import { siteData } from "../../data/site";

interface HeroSectionProps {
  onScrollIndicatorClick: () => void;
}

export function HeroSection({ onScrollIndicatorClick }: HeroSectionProps) {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        backgroundColor: "#F5F5F5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        paddingTop: "8rem",
        position: "relative",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "900px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            color: "#000000",
            margin: 0,
            lineHeight: 1.1,
            fontWeight: 700,
          }}
        >
          {siteData.hero.heading}
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            color: "#000000",
            margin: 0,
            lineHeight: 1.8,
          }}
        >
          {siteData.hero.description}
        </p>
        <p
          style={{
            fontSize: "1rem",
            color: "var(--muted-color)",
            margin: 0,
          }}
        >
          {siteData.hero.hint}
        </p>
        <button
          onClick={onScrollIndicatorClick}
          style={{
            marginTop: "1.5rem",
            border: "none",
            borderRadius: "999px",
            backgroundColor: "var(--primary-color)",
            color: "white",
            padding: "1rem 1.75rem",
            cursor: "pointer",
            fontWeight: 700,
          }}
        >
          {siteData.hero.ctaLabel}
        </button>
      </div>
      {/* <button
        onClick={onScrollIndicatorClick}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "2rem",
          marginBottom: "2rem",
        }}
        title="Scroll to next section"
      >
        <div
          style={{
            fontSize: "2rem",
            color: "var(--primary-color)",
            animation: "bounce 2s infinite",
          }}
        >
          ⋮
        </div>
      </button> */}

      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }
      `}</style>
    </section>
  );
}
