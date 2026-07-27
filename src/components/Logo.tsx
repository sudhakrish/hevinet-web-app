interface LogoProps {
  scrolled?: boolean;
  viewportWidth?: number;
  isHome?: boolean;
}

export function Logo({ scrolled = false, viewportWidth = 1024, isHome = false }: LogoProps) {
  const isCompact = viewportWidth < 480;
  const isTablet = viewportWidth >= 768 && viewportWidth < 1280;

  // Only animate on home page, otherwise fixed small size
  let logoHeight = 90;

  if (isHome) {
    logoHeight = scrolled ? 90 : 130;

    if (isCompact) {
      logoHeight = scrolled ? 78 : 120;
    } else if (isTablet) {
      logoHeight = scrolled ? 92 : 142;
    }
  }

  return (
    <img
      src="/assets/img/logo-color.png"
      alt="Hevinet logo"
      style={{
        height: `${logoHeight}px`,
        width: "auto",
        objectFit: "contain",
        display: "block",
        marginRight: viewportWidth < 480 ? "0.35rem" : "0.5rem",
        transition: isHome ? "height 220ms cubic-bezier(0.4, 0, 0.2, 1)" : "none",
        willChange: isHome ? "height" : "auto",
      }}
    />
  );
}
