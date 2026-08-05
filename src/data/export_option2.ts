export type Product = {
  slug: string;
  icon: string;
  name: string;
  shortName: string;
  tagline: string;
  overview: string;
  specs: [string, string][];
  why: string;
};

export const products: Product[] = [
  {
    slug: "coffee",
    icon: "☕",
    name: "Coffee — Arabica & Robusta",
    shortName: "Coffee",
    tagline: "From India's cloud forest estates straight to your roastery.",
    overview:
      "We partner directly with growers in Chikmagalur, Coorg (Kodagu), and Wayanad — three of India's most storied coffee regions, where shade cultivation and monsoon rains shape beans that are low in acid, full in body, and unmistakably distinct. Hevinet supplies both green beans and roasted beans: washed Arabica for buyers seeking smooth sweetness and bright acidity, and natural/cherry processed Robusta for those who value strength, crema, and blend economics. One trusted relationship, two unique profiles, consistent quality shipment after shipment.",
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
  },
  {
    slug: "tea",
    icon: "🍵",
    name: "Tea",
    shortName: "Tea",
    tagline: "From India's misted tea gardens straight to your blending room.",
    overview:
      "We source directly from gardens across Assam's Brahmaputra Valley, the Himalayan slopes of Darjeeling, and the Nilgiri Blue Mountains — three regions that define what the world recognizes as Indian tea. Hevinet supplies both orthodox and CTC leaf: full-bodied, malty Assam prized for strength and color; Darjeeling orthodox celebrated for its delicate muscatel character; and bright, brisk Nilgiri valued for its versatility in blends. One trusted relationship, three distinct origins, consistent quality shipment after shipment.",
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
  },
  {
    slug: "turmeric",
    icon: "🟡",
    name: "Turmeric",
    shortName: "Turmeric",
    tagline: "From India's turmeric belt straight to your processing line.",
    overview:
      "We source directly from the turmeric belts of Erode and Salem (Tamil Nadu), Sangli (Maharashtra), and Nizamabad (Telangana) — regions that supply the bulk of India's export-grade turmeric. Hevinet offers Alleppey finger turmeric, prized for its deep color and curcumin content upward of 5%, alongside Erode and Nizamabad grades suited to everyday culinary and bulk applications, available whole or ground to your specification. One trusted relationship, multiple grades, consistent quality shipment after shipment.",
    specs: [
      ["Origin regions", "Erode & Salem (Tamil Nadu), Nizamabad (Telangana), Alleppey-type finger turmeric"],
      ["Quality metrics", "Curcumin content, moisture percentage, and foreign matter, tested per lot"],
      ["Form supplied", "Whole finger/bulb (polished or unpolished) and powder (custom mesh size)"],
      ["Typical applications", "Food processing and spice blending, nutraceuticals, and cosmetic/curcumin extraction"],
      ["Packaging", "PP / HDPE woven bags with food-grade liner (25/50kg), or custom formats per buyer request"],
      ["Minimum order quantity", "1 x 20ft container (trial lots available for new buyers)"],
    ],
    why: "Consistent quality, reliable supply, and direct partnerships with India's leading turmeric-growing belts.",
  },
  {
    slug: "pepper",
    icon: "⚫",
    name: "Pepper (Black Pepper)",
    shortName: "Pepper",
    tagline: "From the Malabar Coast straight to your spice line.",
    overview:
      "We partner directly with growers along the Malabar Coast — Wayanad, Idukki, and Kannur in Kerala, and Coorg (Kodagu) in Karnataka — the belt that has defined premium pepper for centuries. Hevinet supplies Malabar Garbled MG1, meeting the 550 g/l minimum density and large-grain standard international buyers demand, alongside white pepper on request. One trusted relationship, export-grade consistency, shipment after shipment.",
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
  },
  {
    slug: "chilies",
    icon: "🌶️",
    name: "Dry Red Chilies",
    shortName: "Dry Red Chilies",
    tagline: "From Andhra's chilli belt straight to your spice line.",
    overview:
      "We source directly from Guntur, Andhra Pradesh — India's largest chilli trading hub — and Byadagi, Karnataka, two regions that define the country's export chilli trade. Hevinet supplies Guntur Teja/S17, valued for intense pungency exceeding 30,000 SHU and popular in hot sauces and masalas, alongside Byadagi, prized for its deep ASTA 160–200 red color and mild heat used in natural color extraction. One trusted relationship, two distinct profiles, consistent quality shipment after shipment.",
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
  },
  {
    slug: "cardamom",
    icon: "🌱",
    name: "Cardamom (Green Cardamom)",
    shortName: "Cardamom",
    tagline: "From the Cardamom Hills straight to your spice cabinet.",
    overview:
      "We source directly from the Cardamom Hill Reserve in Idukki, Kerala — high-elevation terrain and dual monsoon rainfall that make this district the source of over 80% of India's cardamom. Hevinet supplies Alleppey Green Extra Bold (AGEB) and Alleppey Green Bold (AGB) grades, prized for their large pod size and essential oil content, delivering the sweet, floral aroma international buyers specify by name. One trusted relationship, premium grading, consistent quality shipment after shipment.",
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
  },
  {
    slug: "cloves",
    icon: "🌸",
    name: "Cloves",
    shortName: "Cloves",
    tagline: "Rich, aromatic cloves with high eugenol content.",
    overview:
      "Cloves are sourced through Hevinet's trusted regional supply partners and quality-graded, sorted, and processed in India to deliver the deep, warm aromatic profile prized in cuisines and pharmaceutical use worldwide. Every lot is checked for eugenol oil content and hand-sorted to remove broken or headless buds.",
    specs: [
      ["Sourcing", "Trusted regional supply partners; graded, sorted, and processed in India"],
      ["Quality metrics", "Eugenol oil content, and percentage of broken/headless buds"],
      ["Form supplied", "Whole dried clove buds and ground cloves"],
      ["Typical applications", "Culinary use, oleoresin/oil extraction, pharmaceutical and confectionery use"],
      ["Packaging", "[PLACEHOLDER]"],
      ["Minimum order quantity", "[PLACEHOLDER]"],
    ],
    why: "Hand-sorting and oil-content testing ensure buyers receive whole, high-oil-content buds rather than broken or exhausted stock.",
  },
  {
    slug: "cumin",
    icon: "🟤",
    name: "Cumin Seeds",
    shortName: "Cumin Seeds",
    tagline: "High-purity cumin from India's spice trading heartland.",
    overview:
      "Grown and traded through Gujarat and Rajasthan — home to Unjha, one of the world's largest spice markets — Indian cumin is prized for its strong, pungent aroma and consistently high purity. Hevinet supplies machine-clean and full-sortex grades to meet both bulk and premium export specifications.",
    specs: [
      ["Origin regions", "Gujarat and Rajasthan (traded through Unjha)"],
      ["Grades", "Machine Clean (98% purity), Sortex Cleaned (99%+), export-standard “Singapore grade” (99% purity)"],
      ["Quality metrics", "Moisture (below 10%), extraneous matter (under 1%), and volatile oil content (0.5–2.5%)"],
      ["Form supplied", "Whole seed and powder; organic and steam/ETO-sterilized options on request"],
      ["Typical applications", "Spice blends and seasoning, pickling, essential oil extraction"],
      ["Packaging", "[PLACEHOLDER]"],
      ["Minimum order quantity", "[PLACEHOLDER]"],
    ],
    why: "Every lot is tested for moisture and purity before dispatch, with sterilization available for buyers with strict import microbiological requirements.",
  },
  {
    slug: "coriander",
    icon: "🟠",
    name: "Coriander Seeds",
    shortName: "Coriander Seeds",
    tagline: "Aromatic whole and split coriander, graded to export standard.",
    overview:
      "Sourced from Gujarat's major spice belts — including Rajkot, Jamnagar, and Unjha — Indian coriander seed is traded globally in a range of recognized grades, from whole “Eagle” quality to split and premium XO grades, suiting both bulk food processing and retail spice packing.",
    specs: [
      ["Origin regions", "Gujarat (Rajkot, Jamnagar, Unjha), with additional sourcing from Rajasthan and Madhya Pradesh"],
      ["Grades", "Eagle (whole & split), Scooter, Single/Double Parrot, and XO quality"],
      ["Quality metrics", "Moisture (8% max), split-seed content (4% max), machine-cleaned or sortex-cleaned"],
      ["Form supplied", "Whole and split seeds, and powder"],
      ["Typical applications", "Spice blends and seasoning, essential oil and essential oil extraction"],
      ["Packaging", "[PLACEHOLDER]"],
      ["Minimum order quantity", "[PLACEHOLDER]"],
    ],
    why: "We supply to the exact grade name and cleaning standard buyers already order by, so specifications translate directly into your purchase order.",
  },
  {
    slug: "ginger",
    icon: "🫚",
    name: "Dried Ginger",
    shortName: "Dried Ginger",
    tagline: "Naturally dried ginger from Kerala's renowned growing tracts.",
    overview:
      "Dried ginger from Kerala's Wayanad and Idukki tracts has been traded internationally for generations under the name “Cochin Ginger,” valued for its strong aroma and pungency. Hevinet supplies both unbleached (natural) and bleached (lime-washed) forms as whole fingers/splits or ground powder.",
    specs: [
      ["Origin regions", "Kerala (Wayanad, Idukki), with additional sourcing from Karnataka and Northeast India"],
      ["Grades", "Unbleached (natural) and bleached (lime-washed for lighter appearance)"],
      ["Form supplied", "Whole dried fingers/splits and ground powder"],
      ["Typical applications", "Food processing and beverages, oleoresin extraction, traditional/ayurvedic use"],
      ["Packaging", "[PLACEHOLDER]"],
      ["Minimum order quantity", "[PLACEHOLDER]"],
    ],
    why: "Sourced from tracts with a long export track record, with unbleached options available for buyers who prefer minimally processed spice.",
  },
  {
    slug: "cinnamon",
    icon: "🟫",
    name: "Cinnamon Sticks",
    shortName: "Cinnamon Sticks",
    tagline: "True cinnamon (Cinnamomum verum) from Kerala's Western Ghats.",
    overview:
      "Unlike the cassia (Cinnamomum cassia) commonly sold as “cinnamon” in many markets, Hevinet's cinnamon is true cinnamon — Cinnamomum verum — grown in the Western Ghats of Kerala, milder and more delicately layered than cassia. Supplied as graded quills/sticks or ground powder.",
    specs: [
      ["Origin regions", "Western Ghats, Kerala"],
      ["Species", "Cinnamomum verum (true cinnamon), distinct from Cinnamomum cassia"],
      ["Grades", "Graded by quill diameter and thickness (e.g. C5, C4 grades)"],
      ["Form supplied", "Whole quills/sticks and ground powder"],
      ["Typical applications", "Culinary use, baking, beverage flavouring, essential oil extraction"],
      ["Packaging", "[PLACEHOLDER]"],
      ["Minimum order quantity", "[PLACEHOLDER]"],
    ],
    why: "We supply verified true cinnamon rather than cassia, which matters to buyers marketing on the Ceylon/true-cinnamon distinction.",
  },
  {
    slug: "fennel",
    icon: "🌾",
    name: "Fennel Seeds",
    shortName: "Fennel Seeds",
    tagline: "Sweet, aromatic fennel from Gujarat's Unjha spice belt.",
    overview:
      "Fennel is grown and traded extensively through Gujarat's Unjha market, alongside larger sweet varieties from northern India. Hevinet supplies export-standard, high-purity fennel suited to spice blending, herbal beverages, and mouth-freshener applications.",
    specs: [
      ["Origin regions", "Gujarat (Unjha) and northern India"],
      ["Grades", "Machine Clean and Sortex Cleaned; export-standard “Singapore grade” (99% purity)"],
      ["Form supplied", "Whole seed and powder"],
      ["Typical applications", "Spice blends and seasoning, herbal/health beverages, mouth-freshener use"],
      ["Packaging", "[PLACEHOLDER]"],
      ["Minimum order quantity", "[PLACEHOLDER]"],
    ],
    why: "Purity-graded to the same export standards as our cumin, so buyers combining both in a single order get consistent documentation.",
  },
  {
    slug: "fenugreek",
    icon: "🍃",
    name: "Fenugreek Seeds",
    shortName: "Fenugreek Seeds",
    tagline: "Sortex-cleaned fenugreek from Rajasthan, India's largest producer.",
    overview:
      "Rajasthan grows the majority of India's fenugreek, and Hevinet sources sortex-cleaned seed suited to culinary, sprouting, and nutraceutical uses. Available as whole seed or ground powder.",
    specs: [
      ["Origin regions", "Rajasthan"],
      ["Grades", "Machine Clean and Sortex Cleaned"],
      ["Form supplied", "Whole seed and powder"],
      ["Typical applications", "Spice blends and culinary use, sprouting, nutraceutical and cosmetic use"],
      ["Packaging", "[PLACEHOLDER]"],
      ["Minimum order quantity", "[PLACEHOLDER]"],
    ],
    why: "Sourced directly from India's principal fenugreek-growing state, with sortex cleaning as standard rather than an upcharge.",
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
  },
  about: {
    label: "Who we are",
    title: "About Hevinet",
    intro:
      "Hevinet is an India-based export house bringing premium coffee, tea, and spices from trusted growing regions to international buyers, backed by rigorous quality control and full export documentation.",
    featureHeading: "Direct from source",
    featureCopy:
      "We work with growers, curing houses, and processing units across Karnataka, Kerala, Tamil Nadu, Andhra Pradesh, Telangana, Rajasthan, Gujarat, and Assam.",
    featureBadges: ["APEDA", "FSSAI", "Spices Board of India"],
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
    fields: [
      { id: "name", label: "Full Name", placeholder: "Your name", type: "text" },
      { id: "company", label: "Company Name", placeholder: "Your company", type: "text" },
      { id: "email", label: "Email", placeholder: "Your email", type: "email" },
      { id: "country", label: "Country", placeholder: "Your country", type: "text" },
      { id: "product", label: "Product of Interest", placeholder: "Select a product", type: "select" },
      { id: "message", label: "Message", placeholder: "Tell us about your requirement", type: "textarea" },
    ],
  },
  quality: {
    intro: "Hevinet operates under the registrations and licenses that matter to international buyers of Indian agricultural exports.",
    certifications: [
      { title: "APEDA Registered", description: "Registered with the Agricultural & Processed Food Products Export Development Authority." },
      { title: "FSSAI Licensed", description: "Licensed under India's Food Safety and Standards Authority." },
      { title: "Spices Board of India Registered", description: "Covers our pepper, turmeric, cardamom, chili, and clove exports." },
    ],
    process: [
      { step: "1", heading: "Inquiry & Sample", copy: "Share product, grade, quantity, and target market." },
      { step: "2", heading: "Quotation", copy: "Detailed quote: grade, packaging, Incoterms, lead time." },
      { step: "3", heading: "Testing & Docs", copy: "Lots tested for moisture, purity, and grade." },
      { step: "4", heading: "Sourcing & Packing", copy: "Goods sourced and packed to specification." },
      { step: "5", heading: "Pre-Shipment Check", copy: "Final verification before it leaves the warehouse." },
      { step: "6", heading: "Shipping", copy: "Container booking and port handling managed end-to-end." },
      { step: "7", heading: "After-Sales", copy: "We follow up to confirm satisfaction and support repeat orders." },
    ],
  },
};
