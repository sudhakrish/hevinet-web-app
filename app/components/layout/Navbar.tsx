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
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuClosing, setMobileMenuClosing] = useState(false);

  const activeLabel = siteData.navLinks.find((section: any) => section.id === activeSection)?.label || "Home";

  useEffect(() => {
    let frameId: number | undefined;

    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    const handleResize = () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }

      frameId = window.requestAnimationFrame(() => {
        setViewportWidth(window.innerWidth);
        updateUnderline();
      });
    };

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

    handleScroll();
    updateUnderline();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  useEffect(() => {
    if (viewportWidth >= 760) {
      setMobileMenuOpen(false);
      setMobileMenuClosing(false);
    }
  }, [viewportWidth]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileMenuClosing(false);
  }, [activeSection]);

  const toggleMobileMenu = () => {
    if (mobileMenuOpen) {
      setMobileMenuClosing(true);
      window.setTimeout(() => {
        setMobileMenuOpen(false);
        setMobileMenuClosing(false);
      }, 220);
      return;
    }

    setMobileMenuClosing(false);
    setMobileMenuOpen(true);
  };

  const handleMenuItemClick = (sectionId: string) => {
    setMobileMenuClosing(true);
    window.setTimeout(() => {
      setMobileMenuOpen(false);
      setMobileMenuClosing(false);
    }, 220);
    onNavigate(sectionId);
  };

  const isMobile = viewportWidth < 760;

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
        transition: "padding 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: viewportWidth < 760 ? "0.75rem" : "1rem",
        }}
      >
        <Logo scrolled={scrolled} viewportWidth={viewportWidth} />

        {isMobile ? (
          <>
            <div
              style={{
                flex: 1,
                minWidth: 0,
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="mobile-nav-title"
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "#111111",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: "calc(100vw - 7rem)",
                  textAlign: "center",
                }}
              >
                {activeLabel}
              </div>
            </div>
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
              className={`mobile-nav-toggle ${mobileMenuOpen ? "open" : ""}`}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
                padding: "0.25rem",
              }}
            >
              <span />
              <span />
              <span />
            </button>
          </>
        ) : (
          <div
            ref={menuRef}
            style={{
              position: "relative",
              display: "flex",
              gap: viewportWidth < 480 ? "0.55rem" : viewportWidth < 760 ? "0.8rem" : viewportWidth < 1024 ? "1rem" : "1.25rem",
              paddingBottom: "0.00rem",
              paddingRight: viewportWidth < 480 ? "0.6rem" : viewportWidth < 760 ? "1rem" : viewportWidth < 1024 ? "1.5rem" : "3rem",
              overflowX: "auto",
              WebkitOverflowScrolling: "touch",
              whiteSpace: "nowrap",
              flex: "0 0 auto",
              maxWidth: "100%",
              minWidth: 0,
              marginLeft: 0,
              transform: "translateZ(0)",
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
                    fontSize: viewportWidth < 480 ? "0.75rem" : viewportWidth < 760 ? "0.85rem" : "0.95rem",
                    color: isActive ? "#FF6600" : "#000000",
                    fontWeight: isActive ? "600" : "400",
                    paddingBottom: "0.75rem",
                    paddingLeft: viewportWidth < 480 ? "0.05rem" : viewportWidth < 760 ? "0.1rem" : "0",
                    paddingRight: viewportWidth < 480 ? "0.05rem" : viewportWidth < 760 ? "0.1rem" : "0",
                    transition: "color 0.35s ease, font-weight 0.35s ease",
                    willChange: "color, font-weight",
                    flexShrink: 0,
                  }}
                >
                  {section.label}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {isMobile && (mobileMenuOpen || mobileMenuClosing) && (
        <div
          className={`mobile-nav-menu ${mobileMenuOpen ? "open" : mobileMenuClosing ? "closing" : ""}`}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.35rem",
            borderRadius: "16px",
            background: "rgba(255,255,255,0.95)",
            boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
          }}
        >
          {siteData.navLinks.map((section: any, index: number) => {
            const isActive = activeSection === section.id;

            return (
              <button
                key={section.id}
                onClick={() => handleMenuItemClick(section.id)}
                className="mobile-nav-item"
                style={{
                  animationDelay: `${index * 45}ms`,
                  background: "none",
                  border: "none",
                  textAlign: "left",
                  cursor: "pointer",
                  padding: "0.65rem 0.75rem",
                  borderRadius: "10px",
                  fontSize: "0.95rem",
                  color: isActive ? "#FF6600" : "#111111",
                  fontWeight: isActive ? 600 : 400,
                  backgroundColor: isActive ? "rgba(255, 102, 0, 0.08)" : "transparent",
                }}
              >
                {section.label}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}
