import { useEffect, useRef, useState } from "react";
import { siteData } from "../../data/site";
import { Logo } from "./Logo";

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [underlineStyle, setUnderlineStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    const updateUnderline = () => {
      const menu = menuRef.current;
      const activeIndex = siteData.navLinks.findIndex(
        (section: any) => section.id === activeSection,
      );
      const activeButton = buttonRefs.current[activeIndex];

      if (!menu || !activeButton) {
        return;
      }

      const menuRect = menu.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();

      requestAnimationFrame(() => {
        setUnderlineStyle({
          left: buttonRect.left - menuRect.left,
          width: buttonRect.width,
          opacity: 1,
        });
      });
    };

    updateUnderline();
    window.addEventListener("resize", updateUnderline, { passive: true });

    return () => {
      window.removeEventListener("resize", updateUnderline);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : undefined,
        WebkitBackdropFilter: scrolled ? "blur(8px)" : undefined,
        boxShadow: scrolled ? "0 12px 30px rgba(0,0,0,0.12)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.04)" : "none",
        padding: scrolled ? "0.75rem 1rem" : "1rem",
        zIndex: 100,
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <Logo scrolled={scrolled} />

        <div
          ref={menuRef}
          style={{
            position: "relative",
            display: "flex",
            gap: "1.25rem",
            paddingBottom: "0.00rem",
            paddingRight: "3rem",
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            whiteSpace: "nowrap",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: 0,
              left: underlineStyle.left,
              width: underlineStyle.width,
              height: "2px",
              borderRadius: "999px",
              background: "linear-gradient(90deg, #FF6600 0%, #FF8A3D 100%)",
              boxShadow: "0 0 12px rgba(255, 102, 0, 0.2)",
              transition: "left 0.45s cubic-bezier(0.22, 1, 0.36, 1), width 0.45s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s ease",
              opacity: underlineStyle.opacity,
              willChange: "left, width, opacity",
            }}
          />

          {siteData.navLinks.map((section: any, index: number) => {
            const isActive = activeSection === section.id;

            return (
              <button
                key={section.id}
                ref={(element) => {
                  buttonRefs.current[index] = element;
                }}
                onClick={() => onNavigate(section.id)}
                style={{
                  position: "relative",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.95rem",
                  color: isActive ? "#FF6600" : "#000000",
                  fontWeight: isActive ? "600" : "400",
                  paddingBottom: "0.75rem",
                  transition: "color 0.35s ease, font-weight 0.35s ease",
                  willChange: "color, font-weight",
                }}
              >
                {section.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
