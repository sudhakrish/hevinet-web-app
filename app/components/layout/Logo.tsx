import { siteData } from "../../data/site";

interface LogoProps {
  scrolled?: boolean;
  viewportWidth?: number;
}

export function Logo({ scrolled = false, viewportWidth = 1024 }: LogoProps) {
  const isCompact = viewportWidth < 480;
  const isTablet = viewportWidth >= 768 && viewportWidth < 1280;

  let logoHeight = scrolled ? 102 : 168;

  if (isCompact) {
    logoHeight = scrolled ? 78 : 120;
  } else if (isTablet) {
    logoHeight = scrolled ? 96 : 144;
  }

  return (
    <img
      src={siteData.logo.image}
      alt={siteData.logo.alt}
      style={{
        height: `${logoHeight}px`,
        width: "auto",
        objectFit: "contain",
        display: "block",
        marginRight: viewportWidth < 480 ? "0.35rem" : "0.5rem",
        transition: "height 220ms ease-out",
        willChange: "height",
      }}
    />
  );
}
