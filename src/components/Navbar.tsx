import { useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { navLinks, products } from "../data/site";
import { Logo } from "./Logo";

export function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  const [underlineStyle, setUnderlineStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [scrolled, setScrolled] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuClosing, setMobileMenuClosing] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);

  useEffect(() => {
    let frameId: number | undefined;

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
      const activeIndex = navLinks.findIndex((link: any) => {
        if (location.pathname === "/" && link.path === "/") return true;
        if (location.pathname !== "/" && link.path === "/" && location.pathname === "/") return true;
        if (link.path !== "/" && location.pathname.startsWith(link.path)) return true;
        return false;
      });

      const activeButton = buttonRefs.current[activeIndex];

      if (!menu || !activeButton) {
        setUnderlineStyle({ left: 0, width: 0, opacity: 0 });
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
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (viewportWidth >= 1080) {
      setMobileMenuOpen(false);
      setMobileMenuClosing(false);
    }
  }, [viewportWidth]);

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

  const closeMobileMenu = () => {
    setMobileMenuClosing(true);
    window.setTimeout(() => {
      setMobileMenuOpen(false);
      setMobileMenuClosing(false);
    }, 220);
    setProductDropdownOpen(false);
  };

  const useHamburgerLayout = viewportWidth < 1080;
  const isCompactHeader = !isHome || scrolled;
  const isDrawerVisible = mobileMenuOpen || mobileMenuClosing;

  const currentPageLabel =
    navLinks.find((link: any) => {
      if (location.pathname === "/" && link.path === "/") return true;
      if (location.pathname !== "/" && link.path === "/" && location.pathname === "/") return true;
      if (link.path !== "/" && location.pathname.startsWith(link.path)) return true;
      return false;
    })?.label || "Menu";

  return (
    <>
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: isHome && !scrolled ? "transparent" : "rgba(255,255,255,0.9)",
        backdropFilter: isHome && !scrolled ? undefined : "blur(8px)",
        WebkitBackdropFilter: isHome && !scrolled ? undefined : "blur(8px)",
        boxShadow: isHome && !scrolled ? "none" : "0 4px 16px rgba(0, 0, 0, 0.06)",
        borderBottom: "none",
        padding: isCompactHeader ? "0.75rem 1rem" : "1rem",
        zIndex: 110,
        transition: "background-color 0.2s ease, backdrop-filter 0.2s ease, box-shadow 0.2s ease",
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
        <NavLink to="/" style={{ display: "flex", alignItems: "center" }}>
          <Logo scrolled={scrolled} viewportWidth={viewportWidth} isHome={isHome} />
        </NavLink>

        {useHamburgerLayout ? (
          <>
            <div
              style={{
                flex: 1,
                minWidth: 0,
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 0.5rem",
              }}
            >
              <div
                style={{
                  fontSize: viewportWidth < 480 ? "0.85rem" : "0.95rem",
                  fontWeight: 600,
                  color: "#111111",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: "calc(100vw - 10rem)",
                  textAlign: "center",
                }}
              >
                {currentPageLabel}
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <NavLink
                className="btn-quote"
                to="/contact"
                style={{
                  background: "#FF6600",
                  color: "#fff",
                  padding: viewportWidth < 480 ? "8px 12px" : "10px 14px",
                  borderRadius: "30px",
                  fontWeight: "600",
                  fontSize: viewportWidth < 480 ? "11px" : "13px",
                  whiteSpace: "nowrap",
                  textDecoration: "none",
                  transition: "background-color 0.2s ease",
                }}
                onClick={closeMobileMenu}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#c85a00";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#FF6600";
                }}
              >
                Request a Quote
              </NavLink>
              <button
                onClick={toggleMobileMenu}
                aria-label={isDrawerVisible ? "Close navigation menu" : "Toggle navigation menu"}
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
                  width: "34px",
                  height: "34px",
                }}
              >
                {isDrawerVisible ? (
                  <>
                    <span style={{ width: "24px", height: "2px", background: "#111", display: "block", transform: "rotate(45deg) translate(3px, 3px)" }} />
                    <span style={{ width: "24px", height: "2px", background: "#111", display: "block", opacity: 0 }} />
                    <span style={{ width: "24px", height: "2px", background: "#111", display: "block", transform: "rotate(-45deg) translate(3px, -3px)" }} />
                  </>
                ) : (
                  <>
                    <span style={{ width: "24px", height: "2px", background: "#111", display: "block" }} />
                    <span style={{ width: "24px", height: "2px", background: "#111", display: "block" }} />
                    <span style={{ width: "24px", height: "2px", background: "#111", display: "block" }} />
                  </>
                )}
              </button>
            </div>
          </>
        ) : (
          <div
            ref={menuRef}
            style={{
              position: "relative",
              display: "flex",
              gap: viewportWidth < 480 ? "0.55rem" : viewportWidth < 760 ? "0.8rem" : viewportWidth < 1024 ? "1rem" : "1.25rem",
              paddingBottom: "0rem",
              paddingRight: viewportWidth < 480 ? "0.6rem" : viewportWidth < 760 ? "1rem" : viewportWidth < 1024 ? "1.5rem" : "3rem",
              overflow: "visible",
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

            {navLinks.map((link: any, index: number) => {
              const isProducts = link.path === "/products";
              const isActive =
                (location.pathname === "/" && link.path === "/") ||
                (location.pathname !== "/" && link.path !== "/" && location.pathname.startsWith(link.path));

              return (
                <div
                  key={link.path}
                  style={{ position: "relative" }}
                  onMouseEnter={isProducts ? () => setProductDropdownOpen(true) : undefined}
                  onMouseLeave={isProducts ? () => setProductDropdownOpen(false) : undefined}
                >
                  <NavLink
                    ref={(el) => {
                      buttonRefs.current[index] = el;
                    }}
                    to={link.path}
                    style={{
                      position: "relative",
                      display: "inline-block",
                      cursor: "pointer",
                      fontSize: viewportWidth < 480 ? "0.75rem" : viewportWidth < 760 ? "0.85rem" : "0.95rem",
                      color: isActive ? "#FF6600" : "#000000",
                      fontWeight: isActive ? "600" : "400",
                      paddingBottom: "0.75rem",
                      paddingLeft: "0",
                      paddingRight: "0",
                      transition: "color 0.35s ease, font-weight 0.35s ease",
                      willChange: "color, font-weight",
                      textDecoration: "none",
                    }}
                    onClick={closeMobileMenu}
                  >
                    {isProducts ? (
                      <>
                        {link.label} <span aria-hidden="true">▾</span>
                      </>
                    ) : (
                      link.label
                    )}
                  </NavLink>

                  {isProducts && (
                    <div
                      style={{
                        display: productDropdownOpen ? "block" : "none",
                        position: "absolute",
                        top: "32px",
                        left: 0,
                        background: "#fff",
                        border: "1px solid #e8ddc7",
                        boxShadow: "0 8px 24px rgba(0,0,0,.08)",
                        minWidth: "210px",
                        borderRadius: "8px",
                        overflowY: "auto",
                        maxHeight: "70vh",
                        zIndex: 1000,
                        opacity: productDropdownOpen ? 1 : 0,
                        visibility: productDropdownOpen ? "visible" : "hidden",
                        transition: "opacity 0.15s ease, visibility 0.15s ease",
                      }}
                    >
                      {products.map((product: any) => (
                        <Link
                          key={product.slug}
                          to={`/products/${product.slug}`}
                          style={{
                            display: "block",
                            padding: "10px 16px",
                            fontSize: "14px",
                            textDecoration: "none",
                            color: "inherit",
                            borderBottom: "none",
                            transition: "background-color 0.2s ease",
                          }}
                          onClick={closeMobileMenu}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.backgroundColor = "#fffbf7";
                            (e.currentTarget as HTMLElement).style.color = "#c85a00";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                            (e.currentTarget as HTMLElement).style.color = "inherit";
                          }}
                        >
                          {product.shortName}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {!useHamburgerLayout && (
          <NavLink
            className="btn-quote"
            to="/contact"
            style={{
              background: "#FF6600",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "30px",
              fontWeight: "600",
              fontSize: "14px",
              whiteSpace: "nowrap",
              textDecoration: "none",
              transition: "background-color 0.2s ease",
            }}
            onClick={closeMobileMenu}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#c85a00";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#FF6600";
            }}
          >
            Request a Quote
          </NavLink>
        )}
      </div>

      {useHamburgerLayout && (mobileMenuOpen || mobileMenuClosing) && (
        <div
          onClick={closeMobileMenu}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100vw",
            height: "100dvh",
            minHeight: "100dvh",
            background: "rgba(0, 0, 0, 0.42)",
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
            zIndex: 120,
            opacity: mobileMenuClosing ? 0 : 1,
            transition: "opacity 0.24s ease",
            overflow: "hidden",
            overscrollBehavior: "contain",
          }}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              width: "min(84vw, 320px)",
              height: "100dvh",
              maxHeight: "100dvh",
              background: "#fff",
              boxShadow: "-12px 0 28px rgba(0, 0, 0, 0.16)",
              transform: mobileMenuClosing ? "translateX(100%)" : "translateX(0%)",
              transition: "transform 0.24s ease",
              overflowY: "auto",
              overflowX: "hidden",
              padding: "1rem 0 1.5rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 1rem 0.75rem" }}>
              <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#111" }}>Menu</div>
              <button
                onClick={closeMobileMenu}
                aria-label="Close navigation menu"
                style={{
                  background: "#f5f5f5",
                  border: "1px solid #e4e4e4",
                  borderRadius: "999px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  padding: 0,
                  boxSizing: "border-box",
                }}
              >
                <div style={{ position: "relative", width: "20px", height: "20px" }}>
                  <span style={{ position: "absolute", top: "9px", left: 0, width: "20px", height: "2px", background: "#111", display: "block", transform: "rotate(45deg)" }} />
                  <span style={{ position: "absolute", top: "9px", left: 0, width: "20px", height: "2px", background: "#111", display: "block", transform: "rotate(-45deg)" }} />
                </div>
              </button>
            </div>
            <nav style={{ display: "flex", flexDirection: "column", gap: "4px", padding: "0.25rem 0 0.75rem" }}>
              {navLinks.map((link: any) => {
                const isProducts = link.path === "/products";
                const isActive =
                  (location.pathname === "/" && link.path === "/") ||
                  (location.pathname !== "/" && link.path !== "/" && location.pathname.startsWith(link.path));

                return (
                  <div key={link.path}>
                    <NavLink
                      to={link.path}
                      style={{
                        display: "block",
                        padding: "12px 16px",
                        fontSize: "15px",
                        fontWeight: isActive ? "600" : "500",
                        color: isActive ? "#FF6600" : "#000",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                      }}
                      onClick={closeMobileMenu}
                    >
                      {isProducts ? (
                        <>
                          {link.label} <span aria-hidden="true">▾</span>
                        </>
                      ) : (
                        link.label
                      )}
                    </NavLink>

                    {isProducts && (
                      <div style={{ paddingLeft: "16px", paddingRight: "16px" }}>
                        {products.map((product: any) => (
                          <Link
                            key={product.slug}
                            to={`/products/${product.slug}`}
                            style={{
                              display: "block",
                              padding: "8px 0",
                              fontSize: "14px",
                              textDecoration: "none",
                              color: "#000",
                            }}
                            onClick={closeMobileMenu}
                          >
                            {product.shortName}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </nav>
    </>
  );
}
