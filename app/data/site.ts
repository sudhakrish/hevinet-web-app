export const siteData = {
  theme: {
    basePath: "/theme",
    imagePath: "/theme/images",
    fontPath: "/theme/fonts",
    colors: {
      primary: "#FF6600",
      accent: "#FF8A3D",
      background: "#F5F5F5",
      text: "#000000",
      muted: "#646464",
    },
  },
  logo: {
    image: "/theme/images/logo1.png",
    text: "Hevinet",
    alt: "Hevinet logo",
  },
  navLinks: [
    { id: "home", label: "Home" },
    { id: "about-us", label: "About us" },
    { id: "products", label: "Products" },
    { id: "licenses", label: "Licenses" },
    { id: "contact-us", label: "Contact us" },
  ],
  hero: {
    heading: "The modern way to present your business online",
    description:
      "Use a clean website layout with strong visual hierarchy, flexible sections, and a simple theme structure for easy replacement.",
    hint: "Scroll down to discover our solutions and product highlights.",
    ctaLabel: "Explore products",
  },
  about: {
    title: "About Us",
    description:
      "We help businesses present their story in a modern, responsive format. Our page sections are easy to replace or extend while maintaining a consistent brand style.",
    cards: [
      {
        title: "Simple structure",
        subtitle:
          "Fast, reusable sections let you update the website without rewriting layout code.",
      },
      {
        title: "Theme-ready",
        subtitle:
          "Assets, fonts, and copy are organized in one central theme folder for easy swapping.",
      },
      {
        title: "Responsive content",
        subtitle:
          "Every section is designed to look great on mobile, tablet, and desktop.",
      },
    ],
  },
  products: {
    title: "Products",
    categories: [
      { title: "Fresh produce", description: "Crisp, seasonal goods with transparent sourcing." },
      { title: "Handcrafted", description: "Quality products made with care and trusted partners." },
      { title: "Agricultural services", description: "Flexible support and consulting for product growth." },
      { title: "Trusted vendors", description: "Verified suppliers for reliable inventory and fulfillment." },
    ],
    highlights: [
      {
        title: "Consumer-focused design",
        content: "Build trust with clean product presentation and clear navigation.",
      },
      {
        title: "Easy replacement",
        content:
          "Swap the theme folder to refresh your brand assets and text in one move.",
      },
      {
        title: "Scale quickly",
        content: "Add new sections, products, or pages without changing the page shell.",
      },
    ],
  },
  licenses: {
    title: "Licenses",
    items: [
      { title: "Quality control", description: "Track certifications and compliance." },
      { title: "Secure sourcing", description: "Maintain data integrity from supplier to customer." },
      { title: "Trusted partners", description: "Work with vendors who meet your standards." },
      { title: "Verified reviews", description: "Showcase customer trust and product value." },
      { title: "Growth-ready", description: "Scale your offerings with clarity and structure." },
    ],
  },
  contact: {
    title: "Contact Us",
    description:
      "Have a question or need a custom solution? Share your details and we’ll connect you with the right team.",
    info: [
      { label: "Email", value: "hello@hevinet.com" },
      { label: "Phone", value: "+1 (555) 123-4567" },
    ],
  },
};
