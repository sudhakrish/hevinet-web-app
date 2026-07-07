"use client";

import { useEffect, useRef, useState } from "react";
import type { Route } from "./+types/home";
import { Navbar } from "../components/layout/Navbar";
import { HeroSection } from "../components/sections/HeroSection";
import { AboutSection } from "../components/sections/AboutSection";
import { ProductsSection } from "../components/sections/ProductsSection";
import { LicensesSection } from "../components/sections/LicensesSection";
import { ContactSection } from "../components/sections/ContactSection";
import { siteData } from "../data/site";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" },
    {
      name: "description",
      content: "Welcome to our website",
    },
  ];
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const navigationLockRef = useRef(false);
  const navigationTimerRef = useRef<number | null>(null);
  const updateActiveSectionRef = useRef<() => void>(() => {});

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    navigationLockRef.current = true;

    if (navigationTimerRef.current) {
      window.clearTimeout(navigationTimerRef.current);
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      const navHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--nav-height")) || 6;
      const offset = navHeight * rootFontSize;
      const topPosition = element.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: Math.max(0, topPosition),
        behavior: "smooth",
      });
    }

    navigationTimerRef.current = window.setTimeout(() => {
      navigationLockRef.current = false;
      updateActiveSectionRef.current();
    }, 900);
  };

  const handleScrollIndicator = () => {
    const productsSectionId = siteData.navLinks.find((link: any) => link.id === "products")?.id || "products";
    handleNavigate(productsSectionId);
  };

  useEffect(() => {
    const updateActiveSection = () => {
      if (navigationLockRef.current) {
        return;
      }

      let currentSection = "home";
      for (const item of siteData.navLinks) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            currentSection = item.id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    updateActiveSectionRef.current = updateActiveSection;
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      if (navigationTimerRef.current) {
        window.clearTimeout(navigationTimerRef.current);
      }
    };
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      <main style={{ backgroundColor: siteData.theme.colors.background, paddingTop: "6rem" }}>
        <HeroSection onScrollIndicatorClick={handleScrollIndicator} />
        <AboutSection />
        <ProductsSection />
        <LicensesSection />
        <ContactSection />
      </main>
    </>
  );
}
