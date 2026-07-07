import { siteData } from "../../data/site";
import { useState, useEffect } from "react";

interface LogoProps {
  scrolled?: boolean;
}

export function Logo({ scrolled = false }: LogoProps) {
  const [screenWidth, setScreenWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate scale factor based on screen size: 1.5x on mobile, 2x on desktop
  const getScaleFactor = () => {
    if (screenWidth < 640) return 1.5; // Mobile
    if (screenWidth < 1024) return 1.75; // Tablet
    return 2; // Desktop
  };

  const scaleFactor = getScaleFactor();
  const baseHeight = 55;
  const baseFontSize = 1.5;

  const logoHeight = scrolled ? `${baseHeight}px` : `${baseHeight * scaleFactor}px`;
  const fontSize = scrolled ? `${baseFontSize}rem` : `${baseFontSize * scaleFactor}rem`;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 0,
        transition: "all 0.3s ease",
      }}
    >
      <img
        src={siteData.logo.image}
        alt={siteData.logo.alt}
        style={{
          height: logoHeight,
          width: "auto",
          objectFit: "contain",
          transition: "height 0.3s ease",
          paddingLeft: "1rem"
        }}
      />
      <span
        style={{
          fontFamily: "Handsen, cursive",
          fontSize: fontSize,
          fontWeight: "bold",
          color: "#000000",
          letterSpacing: "0.05em",
          transition: "font-size 0.3s ease",
        }}
      >
        {siteData.logo.text}
      </span>
    </div>
  );
}
