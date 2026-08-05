export type Product = {
  slug: string;
  icon: string;
  name: string;
  shortName: string;
  tagline: string;
  overview: string;
  specs: [string, string][];
  why: string;
  heroImage?: string;
  thumbImage?: string;
  detailImage?: string;
  image?: string;
};

export const products: Product[] = [
  {
    slug: "coffee",
    icon: "☕",
    name: "Coffee — Arabica & Robusta",
    shortName: "Coffee",
    tagline: "From India's cloud forest estates straight to your roastery.",
    overview:
      "Hevinet brings India's finest Arabica and Robusta — available as green beans or roasted — straight from Chikmagalur, Coorg, and Wayanad. Smooth sweetness or bold strength, one trusted source delivers consistent quality every shipment.",
    specs: [
      ["Origin regions", "Chikmagalur, Coorg (Kodagu), Wayanad — Karnataka & Kerala"],
      ["Varieties", "Arabica (washed) and Robusta (natural / cherry)"],
      ["Grades", "Plantation A/B, PB (Peaberry), and screen grades AAA / AA / A"],
      ["Form supplied", "Green (raw) beans; custom roast profiles available on request"],
      ["Typical applications", "Espresso blends, filter and commercial roasting, instant coffee manufacturing"],
      ["Packaging", "Flexible — Jute bags with GrainPro liners, vacuum packs, or custom formats per buyer request"],
      ["Minimum order quantity", "1 x 20ft container (trial lots available for new buyers)"],
    ],
    why: "Consistent quality, reliable supply, and direct partnerships with India's most storied coffee regions.",
    heroImage: "/assets/img/product-images/greencoffee_hero_340x340.jpg",
    thumbImage: "/assets/img/product-images/greencoffee_thumb_640x360.jpg",
    detailImage: "/assets/img/product-images/greencoffee_detail_800x600.jpg",
  },
  {
    slug: "tea",
    icon: "🍵",
    name: "Tea",
    shortName: "Tea",
    tagline: "From India's misted tea gardens straight to your blending room.",
    overview:
      "Hevinet brings India's finest black teas — Assam malt, Darjeeling muscatel, Nilgiri brightness — available as orthodox or CTC leaf. Bold or delicate, one trusted source delivers consistent quality every shipment.",
    specs: [
      ["Origin regions", "Assam, Darjeeling (West Bengal), and the Nilgiris (Tamil Nadu)"],
      ["Processing styles", "CTC (Crush-Tear-Curl) and Orthodox"],
      ["Common grades", "FTGFOP, OP, BOP, Dust, and Fannings, graded to buyer specification"],
      ["Form supplied", "Loose leaf, bulk, or retail-ready pouches on request"],
      ["Typical applications", "Retail tea brands, HORECA, private-label blending"],
      ["Packaging", "Multi-wall paper sacks with food-grade poly liner, plywood tea chests for premium orthodox lots, or custom formats per buyer request"],
      ["Minimum order quantity", "1 x 20ft container (trial lots available for new buyers)"],
    ],
    why: "Consistent quality, reliable supply, and direct partnerships with India's three most celebrated tea-growing regions.",
    heroImage: "/assets/img/product-images/tea_hero_340x340.jpg",
    thumbImage: "/assets/img/product-images/tea_thumb_640x360.jpg",
    detailImage: "/assets/img/product-images/tea_detail_800x600.jpg",
  },
  {
    slug: "turmeric",
    icon: "🟡",
    name: "Turmeric",
    shortName: "Turmeric",
    tagline: "From India's turmeric belt straight to your processing line.",
    overview:
      "Hevinet supplies India's finest turmeric — high-curcumin Alleppey finger and bright Erode/Salem grades — as whole fingers, bulbs, or custom-ground powder. Vivid color or peak potency, one trusted source delivers consistent quality every shipment.",
    specs: [
      ["Origin regions", "Erode & Salem (Tamil Nadu), Nizamabad (Telangana), Alleppey-type finger turmeric"],
      ["Quality metrics", "Curcumin content, moisture percentage, and foreign matter, tested per lot"],
      ["Form supplied", "Whole finger/bulb (polished or unpolished) and powder (custom mesh size)"],
      ["Typical applications", "Food processing and spice blending, nutraceuticals, and cosmetic/curcumin extraction"],
      ["Packaging", "PP / HDPE woven bags with food-grade liner (25/50kg), or custom formats per buyer request"],
      ["Minimum order quantity", "1 x 20ft container (trial lots available for new buyers)"],
    ],
    why: "Consistent quality, reliable supply, and direct partnerships with India's leading turmeric-growing belts.",
    heroImage: "/assets/img/product-images/turmeric_hero_340x340.jpg",
    thumbImage: "/assets/img/product-images/turmeric_thumb_640x360.jpg",
    detailImage: "/assets/img/product-images/turmeric_detail_800x600.jpg",
  },
  {
    slug: "pepper",
    icon: "⚫",
    name: "Pepper (Black Pepper)",
    shortName: "Pepper",
    tagline: "From the Malabar Coast straight to your spice line.",
    overview:
      "Hevinet supplies India's finest black pepper — dense, full-flavored Malabar Garbled MG1 — sourced from Wayanad, Idukki, and Coorg. Bold heat and rich aroma, one trusted source delivers consistent quality every shipment.",
    specs: [
      ["Origin regions", "Malabar Coast — Wayanad and Idukki, Kerala & Karnataka"],
      ["Grades", "Malabar Garbled (MG1) and Tellicherry Garbled Special Extra Bold (TGSEB); ungarbled available"],
      ["Quality metrics", "Piperine content, bulk density (g/l), and moisture, tested per lot"],
      ["Form supplied", "Whole black peppercorns; white pepper and pepper powder on request"],
      ["Typical applications", "Spice blends, food manufacturing, pharmaceutical use"],
      ["Packaging", "PP woven bags with food-grade liner; vacuum packs for premium lots"],
      ["Minimum order quantity", "1 x 20ft container (trial lots available for new buyers)"],
    ],
    why: "Consistent quality, reliable supply, and direct partnerships with growers across the historic Malabar pepper belt.",
    heroImage: "/assets/img/product-images/Pepper_hero_340x340.jpg",
    thumbImage: "/assets/img/product-images/Pepper_thumb_640x360.jpg",
    detailImage: "/assets/img/product-images/Pepper_detail_800x600.jpg",
  },
  {
    slug: "chilies",
    icon: "🌶️",
    name: "Dry Red Chilies",
    shortName: "Dry Red Chilies",
    tagline: "From Andhra's chilli belt straight to your spice line.",
    overview:
      "Hevinet supplies India's finest red chillies — fiery Guntur Teja and vivid Byadagi — sourced direct from Andhra Pradesh and Karnataka's growing belts. Heat or color, one trusted source delivers consistent quality every shipment.",
    specs: [
      ["Origin regions", "Guntur (Andhra Pradesh), Byadgi (Karnataka), and other recognized chili-growing belts"],
      ["Varieties", "Sannam (S4), Teja (S17), Byadgi, 334 Wonder Hot, and Kashmiri"],
      ["Quality metrics", "ASTA colour value and Scoville Heat Units (SHU), moisture, stem-on or stemless"],
      ["Form supplied", "Whole dried chilies, chili powder, or crushed/flakes"],
      ["Typical applications", "Food processing, oleoresin and colour extraction, retail spice packing"],
      ["Packaging", "PP woven bags with food-grade liner, or custom formats per buyer request"],
      ["Minimum order quantity", "1 x 20ft container (trial lots available for new buyers)"],
    ],
    why: "Consistent quality, reliable supply, and direct partnerships with growers across India's leading chilli-growing belts.",
    heroImage: "/assets/img/product-images/redchilli_hero_340x340.jpg",
    thumbImage: "/assets/img/product-images/redchilli_thumb_640x360.jpg",
    detailImage: "/assets/img/product-images/chillipowder_detail_800x600.jpg",
  },
  {
    slug: "cardamom",
    icon: "🌱",
    name: "Cardamom (Green Cardamom)",
    shortName: "Cardamom",
    tagline: "From the Cardamom Hills straight to your spice cabinet.",
    overview:
      "Hevinet supplies India's finest green cardamom — bold, aromatic AGEB and AGB grades — sourced from the Cardamom Hills of Idukki. Rich oil content and vivid aroma, one trusted source delivers consistent quality every shipment.",
    specs: [
      ["Origin regions", "Cardamom Hills, Idukki (Kerala), and adjoining Karnataka/Tamil Nadu tracts"],
      ["Grades", "Alleppey Green Extra Bold (AGEB) and Bold, sized 8mm and above"],
      ["Quality metrics", "Essential oil content, seed-to-husk ratio, and colour, assessed per lot"],
      ["Form supplied", "Whole pods (green or bleached) and cardamom seeds; powder on request"],
      ["Typical applications", "Culinary use, tea and coffee flavouring, confectionery, traditional medicine"],
      ["Packaging", "Poly-lined cartons or vacuum packs to preserve volatile oils"],
      ["Minimum order quantity", "500kg trial lots available; 1 x 20ft container standard, given high per-kg value"],
    ],
    why: "Consistent quality, reliable supply, and direct partnerships with growers in India's premier cardamom-growing reserve.",
    heroImage: "/assets/img/product-images/cardamom_hero_340x340.jpg",
    thumbImage: "/assets/img/product-images/cardamom_thumb_640x360.jpg",
    detailImage: "/assets/img/product-images/cardamom_detail_800x600.jpg",
  },
];

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Quality & Certifications", path: "/quality" },
  { label: "Contact", path: "/contact" },
];

export const siteInfo = {
  hero: {
    heading: "Rooted in India. Trusted Worldwide.",
    description: "Hevinet exports premium-grade coffee, tea, and spices from India's finest growing regions to businesses across the globe.",
    image: "/assets/img/product-images/greencoffee_hero_340x340.jpg",
    ctaPrimary: "Explore Our Products",
    ctaSecondary: "Request a Quote",
  },
  home: {
    trustBar: [
      "APEDA Registered",
      "FSSAI Licensed",
      "Tea Board Registered",
      "Coffee Board Registered",
      "Spices Board Registered",
    ],
    exportPreview: {
      eyebrow: "What we export",
      title: "Our Products",
      intro:
        "Thirteen core categories of premium Indian agricultural produce.",
      cta: "Show more products",
      aboutButton: "Read More →",
    },
    whySection: {
      eyebrow: "Why hevinet",
      title: "Why Choose Us",
      items: [
        {
          icon: "🌾",
          heading: "Direct Sourcing",
          copy: "Long-standing grower and estate relationships across India's key growing states.",
        },
        {
          icon: "🔬",
          heading: "Rigorous Quality Control",
          copy: "Every lot inspected and lab-tested before it ships.",
        },
        {
          icon: "📦",
          heading: "Custom Packaging",
          copy: "Bulk and private-label options tailored to your market.",
        },
        {
          icon: "📋",
          heading: "Full Compliance",
          copy: "APEDA, FSSAI, and Spices Board registration on every shipment.",
        },
        {
          icon: "🚢",
          heading: "Dependable Logistics",
          copy: "FCL and LCL shipments handled with reliable port coordination.",
        },
        {
          icon: "🤝",
          heading: "Responsive Support",
          copy: "One point of contact from quote to delivery.",
        },
      ],
    },
    markets: {
      eyebrow: "Where we ship",
      title: "Markets We Serve",
      items: [
        {
          flag: "🌍",
          heading: "Asia-Pacific & south Asia",
          copy: "Singapore, Malaysia, Bangladesh & regional markets",
        },
        {
          flag: "🇦🇪",
          heading: "Middle East / GCC",
          copy: "UAE, Saudi Arabia, Oman, Qatar, Kuwait",
        },
        {
          flag: "🇪🇺",
          heading: "Europe",
          copy: "UK, Germany, Netherlands & neighbouring markets",
        },
        {
          flag: "🌍",
          heading: "And beyond",
          copy: "Expanding to new markets on request",
        },
      ],
    },
    ctaBand: {
      heading: "Looking for a reliable export partner?",
      description: "Get in touch for samples, specifications, and pricing.",
      cta: "Contact Us",
    },
  },
  about: {
    sectionHeading: "Company profile",
    label: "Who we are",
    title: "About Hevinet",
    intro:
      "Hevinet is an India-based export house bringing premium coffee, tea, and spices from trusted growing regions to international buyers, backed by rigorous quality control and full export documentation.",
    profileParagraphs: [
      "We work directly with growers, curing houses, and processing units across Tamil Nadu, Karnataka, Kerala, Andhra Pradesh, Telangana, and Assam to source produce that meets the quality, consistency, and documentation standards international buyers expect.",
      "Registered with APEDA, licensed under FSSAI, and holding additional registrations with the Coffee Board, Tea Board, and Spices Board of India, Hevinet is built to serve as a compliant, dependable, long-term sourcing partner — not just a one-time supplier.",
    ],
    missionHeading: "Mission",
    missionCopy:
      "To bring India's finest spices, tea, and coffee to the world — with consistent quality, transparent sourcing, and dependable service.",
    valuesTitle: "Our Values",
    values: [
      {
        icon: "💯",
        heading: "Quality",
        copy: "Never compromise on grade, purity, or documentation.",
      },
      {
        icon: "🤲",
        heading: "Integrity",
        copy: "What we quote and certify is exactly what we ship.",
      },
      {
        icon: "⏱️",
        heading: "Reliability",
        copy: "Clear communication and on-time delivery, every order.",
      },
      {
        icon: "🌱",
        heading: "Partnership",
        copy: "Fair dealings with growers, built for the long term.",
      },
    ],
    featureHeading: "Direct from source",
    featureCopy:
      "We work directly with growers, curing houses, and processing units across Tamil Nadu, Karnataka, Kerala, Andhra Pradesh, Telangana, and Assam.",
    featureBadges: ["APEDA", "FSSAI", "Tea Board", "Coffee Board", "Spices Board of India"],
  },
  productsPage: {
    eyebrow: "Full range",
    title: "Our Products",
    intro:
      "From highland coffee to hand-picked spices, Hevinet exports thirteen core categories of premium Indian agricultural produce. Select a product to view detailed specifications, grades, and packaging options.",
    viewDetails: "View Details →",
  },
  productDetail: {
    eyebrow: "Product",
    whyTitle: "Why buy from Hevinet:",
    requestSample: "Request a Sample",
    requestPrice: "Request Today's Price",
    otherProducts: "Explore more products",
    notFoundTitle: "Product not found",
    notFoundCopy: "The requested product does not exist.",
    backToProducts: "Back to products",
  },
  quality: {
    sectionHeading: "How we work",
    eyebrow: "Trust & compliance",
    title: "Quality & Certifications",
    processHeading: "Our Export Process",
    intro: "Hevinet operates under the registrations and licenses that matter to international buyers of Indian agricultural exports.",
    certifications: [
      { title: "IEC Registered", description: "Importer-Exporter Code issued by India's DGFT - the baseline registration required to legally export from India." },
      { title: "APEDA Registered", description: "Registered with the Agricultural & Processed Food Products Export Development Authority." },
      { title: "FSSAI Licensed", description: "Licensed under India's Food Safety and Standards Authority." },
      { title: "Spices Board of India Registered", description: "Covers our pepper, turmeric, cardamom, chili, and clove exports." },
      { title: "Coffee Board Registered", description: "Registered exporter with the Coffee Board of India, covering our green and roasted coffee shipments." },
      { title: "Tea Board Registered", description: "Registered exporter with the Tea Board of India, covering our tea exports." },
    ],
    process: [
      { step: "1", heading: "Inquiry & Sample", copy: "Share product, grade, quantity, and target market." },
      { step: "2", heading: "Quotation", copy: "Detailed quote: grade, packaging, Incoterms, lead time." },
      { step: "3", heading: "Order Confirmation & Payment", copy: "Proforma invoice issued; advance payment or LC terms agreed." },
      { step: "4", heading: "Sourcing & Testing", copy: "Lots source and tested for moisture, purity, and grade." },
      { step: "5", heading: "Packing & Documentation", copy: "Goods packed to specification; export docs prepared." },
      { step: "6", heading: "Pre-Shipment Check", copy: "Final verification before it leaves the warehouse." },
      { step: "7", heading: "Shipping & Customs", copy: "Container booking, port handling, and customs clearance managed end-to-end." },
      { step: "8", heading: "After-Sales", copy: "We follow up to confirm satisfaction and support repeat orders." },
    ],
  },
  contact: {
    label: "Get in touch",
    title: "Contact Us",
    intro:
      "Ready to source premium Indian coffee, tea, or spices? Reach out for samples, pricing, or to discuss your requirements.",
    address: "Chennai, Tamil Nadu, India",
    phone: "+91 97898 51808",
    email: "hevinet.official@gmail.com",
    hours:
      "24/7 operational support with continuous service availability and rapid inquiry response.",
    submitButton: "Send Inquiry",
    validationMessage: "Please complete all fields before submitting your inquiry.",
    successMessage: "Thank you! Your inquiry has been sent successfully.",
    errorMessage: "Unable to send inquiry. Please try again later.",
    previewLabel: "Preview email:",
    previewLinkText: "Open in Ethereal",
    detailsHeadings: {
      office: "Registered Office",
      phone: "Phone / WhatsApp",
      email: "Email",
      hours: "Business Hours",
    },
    fields: [
      { id: "name", label: "Full Name", placeholder: "Your name", type: "text", required: true },
      { id: "company", label: "Company Name", placeholder: "Your company", type: "text", required: true },
      { id: "email", label: "Email", placeholder: "Your email", type: "email", required: true },
      { id: "mobile", label: "Mobile Number", placeholder: "Your mobile number", type: "tel", required: false },
      { id: "country", label: "Country", placeholder: "Your country", type: "text", required: true },
      { id: "product", label: "Product of Interest", placeholder: "Select a product", type: "select", required: true },
      { id: "message", label: "Message", placeholder: "Tell us about your requirement", type: "textarea", required: true },
    ],
  },
  nav: {
    requestQuote: "Request a Quote",
    mobileMenuLabel: "Menu",
    menuTitle: "Menu",
    closeMenuAria: "Close navigation menu",
    openMenuAria: "Toggle navigation menu",
  },
  footer: {
    logoAlt: "Hevinet logo",
    brandCopy: "Premium Indian coffee, tea, and spice exports — rooted in India, trusted worldwide.",
    quickLinksTitle: "Quick Links",
    productsTitle: "Products",
    contactTitle: "Contact",
    copyright: "© 2026 Hevinet. All Rights Reserved.",
    complianceText: "APEDA Registered · FSSAI Licensed · Spices Board of India Registered",
  },
};
