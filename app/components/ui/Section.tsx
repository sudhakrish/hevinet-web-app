interface SectionProps {
  id: string;
  title: string;
  children?: React.ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      style={{
        minHeight: "auto",
        backgroundColor: "#F5F5F5",
        padding: "4.5rem 2rem 4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        scrollMarginTop: "6rem",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            marginTop: 0,
            marginBottom: "2rem",
            textAlign: "center",
            color: "#FF6600",
            textTransform: "capitalize",
            fontWeight: "600",
          }}
        >
          {title}
        </h1>
        {children && (
          <div
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.8,
              color: "#000000",
              textAlign: "center",
            }}
          >
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
