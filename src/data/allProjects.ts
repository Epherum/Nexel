// src/data/allProjects.ts
import { StaticImageData } from "next/image";

// --- EXISTING IMPORTS ---
import bookAppThumbnail from "/public/static/thumbnails/bookApp-thumbnail.webp";
import evenseThumbnail from "/public/static/thumbnails/evense-thumbnail.webp";
import { socialMediaProjectsData } from "./socialMediaData";

// --- 1. NEW IMPORT for your first branding project's thumbnail ---
// You will need to create and add this thumbnail image
import bilargoThumbnail from "/public/static/thumbnails/bilargo-thumbnail.webp";
import spacefoodThumbnail from "/public/static/thumbnails/spacefood-thumbnail.webp";
import matukyThumbnail from "/public/static/thumbnails/matuky-thumbnail.webp";
import wagThumbnail from "/public/static/thumbnails/wag-thumbnail.webp";
import moondivineThumbnail from "/public/static/thumbnails/moondivine-thumbnail.webp";
import kraiThumbnail from "/public/static/thumbnails/krai-thumbnail.webp";

// =================================================================
// --- 2. NEW: Branding Project Data (The detailed content for the template) ---
// =================================================================

export interface BrandingProject {
  slug: string;
  meta: {
    title: string;
    description: string;
  };
  thumbnail: StaticImageData; // <-- ADDED for the project listing page
  heroHeadline: string;
  heroImage: string;
  introText: string;
  challengeText: string;
  approachText: string;
  fullWidthImage: string;
  services: {
    title: string;
    subtitle: string;
    body: string;
  };
  showcase: {
    images: string[];
    text: string;
  };
}

export const brandingProjectsData: BrandingProject[] = [
  {
    slug: "bilargo",
    meta: {
      title: "Bilargo Branding | Nexel",
      description:
        "Crafting a sophisticated and serene brand identity for Bilargo, a luxury fashion brand that blends timeless elegance with modern comfort.",
    },
    thumbnail: bilargoThumbnail,
    heroHeadline: "Where Quality Meets Creativity.",
    heroImage: "/static/bilargo/hero.webp", // Assuming the billboard image is the hero
    introText:
      "Bilargo is a fashion and design house that embodies quiet luxury and coastal sophistication. Our task was to create a brand identity that felt both timeless and contemporary, reflecting the brand's commitment to quality materials, thoughtful design, and a serene aesthetic.",
    challengeText:
      "The primary challenge was to launch Bilargo into the competitive luxury fashion market. We needed to develop a brand identity that could communicate premium quality and a unique point of view without feeling ostentatious. The brand had to appeal to a discerning audience that values craftsmanship, comfort, and a connection to natural beauty.",
    approachText:
      "Our approach centered on the concept of 'serene heritage.' We designed a distinctive logo featuring two stylized elephants, symbolizing wisdom, strength, and a touch of the exotic. The color palette combines deep blues, earthy neutrals, and sun-bleached whites, inspired by Mediterranean landscapes. The art direction for photography emphasizes natural light and relaxed elegance, creating a visual narrative that is both aspirational and approachable.",
    fullWidthImage: "/static/bilargo/full-width.webp", // Assuming the embroidered logo is the full-width image
    services: {
      title: "Brand Strategy & Visual Identity",
      subtitle: "From Concept to Cohesion",
      body: "We provided end-to-end branding services, including market research, logo design, color palette development, typography selection, and creation of brand guidelines. We also directed the initial campaign photography to establish a consistent and powerful visual tone for all marketing materials.",
    },
    showcase: {
      images: [
        "/static/bilargo/1.webp",
        "/static/bilargo/2.webp",
        "/static/bilargo/3.webp",
        "/static/bilargo/4.webp",
      ],
      text: "The final brand identity extends seamlessly across all touchpoints, from digital storefronts and social media to physical tags and packaging. Each element is designed to reinforce Bilargo's core message: luxury is not just what you wear, but how it makes you feel.",
    },
  },
  {
    slug: "spacefood",
    meta: {
      title: "SpaceFood Branding | Nexel",
      description:
        "Developing a bold, futuristic brand identity for SpaceFood, a London-based fast food restaurant aiming to disrupt the market.",
    },
    thumbnail: spacefoodThumbnail,
    heroHeadline: "A Taste of the Cosmos.",
    heroImage: "/static/spacefood/hero.webp",
    introText:
      "SPACE FOOD is a London-based fast food concept that delivers cosmic-level flavor with a playful, futuristic identity. We were tasked with creating a brand from the ground up that would feel like an adventure in every bite, capturing the imagination of a young, urban audience.",
    challengeText:
      "Create a bold, futuristic brand for a fast food restaurant in London that wants to break away from traditional fast food aesthetics. The concept needed to attract younger audiences, stand out in urban settings, and feel like an adventure in every bite.",
    approachText:
      "We designed a striking astronaut mascot as the face of the brand, symbolizing exploration and fun. The logotype features strong, geometric lettering with contrast in weight and color, especially emphasizing 'FOOD' with a clever 'O' as a planet or burger. The red and black palette creates energy and urgency, fitting for a fast-paced eatery, while also adding a sci-fi edge.",
    fullWidthImage: "/static/spacefood/full-width.webp",
    services: {
      title: "Packaging & Environmental Design",
      subtitle: "Bringing the Cosmos to the Counter",
      body: "Our work extended beyond the logo to include a full suite of branded materials. We designed dynamic packaging, menu boards, in-store graphics, and employee uniforms that all contribute to an immersive, otherworldly experience. The goal was to make every touchpoint Instagrammable and memorable.",
    },
    showcase: {
      images: [
        "/static/spacefood/1.webp",
        "/static/spacefood/2.webp",
        "/static/spacefood/3.webp",
        "/static/spacefood/4.webp",
      ],
      text: "From the food wrappers to the storefront, the SpaceFood brand is designed to transport customers. The consistent use of the mascot, bold typography, and energetic color scheme creates a cohesive and exciting world that makes fast food fun again.",
    },
  },
  {
    slug: "matuky", // ✨ Corrected
    meta: {
      // ✨ Corrected
      title: "Matuky Branding | Nexel",
      description:
        "Designing a warm, playful, and modern brand identity for Matuky, a Japanese-inspired matcha café.",
    },
    thumbnail: matukyThumbnail,
    heroHeadline: "Your Daily Moment of Matcha.",
    heroImage: "/static/matuky/hero.webp",
    introText:
      // ✨ Corrected
      "Matuky is a modern matcha café concept that brings the traditional taste of Japanese matcha to a trendy, design-conscious audience. Our goal was to build a brand that blends tradition and fun, appealing to both matcha connoisseurs and newcomers alike.",
    challengeText:
      "Creating a unique and playful identity for a new matcha café that stands out in a saturated market of coffee and tea shops. The goal was to build a visual brand that reflects the Japanese heritage of matcha while feeling modern, warm, and fun, especially for a young audience.",
    approachText:
      // ✨ Corrected name and mascot explanation
      "We developed the name “MATUKY” by merging “matcha” and “tanuki” (the Japanese raccoon dog), giving it a friendly and memorable ring. The logo combines soft, bubbly typography with a tanuki mascot holding a traditional matcha whisk,evoking authenticity and cuteness. A mix of Japanese and English typography was used to give an international flair. Earthy green tones paired with creamy whites convey freshness, nature, and relaxation. ideal for a cozy café vibe.",
    fullWidthImage: "/static/matuky/full-width.webp",
    services: {
      title: "Identity & Brand Application",
      subtitle: "Crafting a Cohesive Café Experience",
      body: "We developed the complete visual identity, including the logo, color system, and typography guidelines. We then applied this system across key touchpoints such as custom cup designs, menu layouts, café signage, and social media templates to ensure a consistent and delightful customer experience.",
    },
    showcase: {
      images: [
        "/static/matuky/1.webp",
        "/static/matuky/2.webp",
        "/static/matuky/3.webp",
        "/static/matuky/4.webp",
      ],
      // ✨ Corrected name and mascot
      text: "The Matuky brand is built on a foundation of charm and authenticity. The friendly tanuki mascot and soft, natural color palette create an inviting atmosphere that encourages customers to relax, enjoy their matcha, and share their experience.",
    },
  },
  {
    slug: "wag",
    meta: {
      title: "WAG Branding | Nexel",
      description:
        "Crafting a joyful, trustworthy, and personality-driven brand for WAG, a modern pet shop in the USA.",
    },
    thumbnail: wagThumbnail,
    heroHeadline: "For the Love of a Wagging Tail.",
    heroImage: "/static/wag/hero.webp",
    introText:
      "WAG is a U.S.-based pet shop that offers quality pet food, accessories, and grooming services. It positions itself as more than just a store, it's a community for pet lovers. We set out to create an energetic, lovable, and approachable identity that captures the pure joy pets bring to our lives.",
    challengeText:
      "WAG needed a brand identity that speaks to modern pet owners. fun, trustworthy, and full of personality. The challenge was to create a visual identity that reflects love and care for pets, while being eye-catching and flexible across packaging, signage, and digital platforms.",
    approachText:
      "We crafted a logo where the word “WAG” itself becomes a character, integrating a happy dog face within the wordmark. The rounded, chunky typography combined with the warm yellow/orange palette radiates joy and friendliness. We also gave the brand a slight retro twist with playful shapes and soft curves to appeal emotionally to pet lovers.",
    fullWidthImage: "/static/wag/full-width.webp",
    services: {
      title: "Brand Identity & Packaging Design",
      subtitle: "Making Pet Products Pop",
      body: "Our services included logo creation, brand guideline development, and a complete packaging design system for WAG's line of products. We created a flexible system of colors and patterns that could be adapted for different product categories (food, toys, treats) while maintaining a strong, unified brand presence on the shelf.",
    },
    showcase: {
      images: [
        "/static/wag/1.webp",
        "/static/wag/2.webp",
        "/static/wag/3.webp",
        "/static/wag/4.webp",
      ],
      text: "The entire brand system is designed to feel as happy and dependable as a loyal companion. The clever logo, warm colors, and friendly typography work together to build trust and create an emotional connection with pet owners from the moment they see the brand.",
    },
  },
  {
    slug: "krai",
    meta: {
      title: "Krai Vodka Branding | Nexel",
      description:
        "Crafting a premium, evocative brand identity for Krai, an arctic vodka inspired by the silent, majestic beauty of the polar wilderness.",
    },
    thumbnail: kraiThumbnail, // Assuming you have a thumbnail variable
    heroHeadline: "The Spirit of the Silent North.",
    heroImage: "/static/krai/hero.webp", // Placeholder image path
    introText:
      "Krai is a premium arctic vodka that captures the essence of the planet’s most remote and untouched landscapes. We were tasked with creating a brand identity that tells a story of solitude, purity, and adventure, appealing to discerning drinkers who appreciate craftsmanship and a powerful narrative.",
    challengeText:
      "The premium vodka market is saturated with brands focused on nightlife and luxury. Krai needed an identity that would carve its own niche by communicating a sense of rugged elegance and profound purity. The challenge was to visually translate the concepts of 'distilled in the cold,' 'glacial water,' and 'crafted in silence' into a compelling and memorable brand.",
    approachText:
      "Our approach centered on the lone explorer, a symbol of resilience and discovery. The central illustration, framed like a classic portrait, evokes a sense of quiet majesty. We chose a deep blue and teal color palette to mirror the arctic twilight and glacial ice, while intricate, frost-like patterns add a layer of refined detail. The strong, elegant typography grounds the design, ensuring it feels both premium and timeless.",
    fullWidthImage: "/static/krai/full-width.webp", // Placeholder image path
    services: {
      title: "Brand Identity & Packaging Design",
      subtitle: "Bottling the Arctic Essence",
      body: "We developed the complete brand identity from the ground up, including the logotype, custom illustration, and the ornate pattern system. Our work focused on the packaging design, creating a distinctive label that tells the Krai story through its layers of text and imagery. Every element, from the cork stopper to the tax seal, was considered to create a cohesive and premium experience.",
    },
    showcase: {
      images: [
        "/static/krai/1.webp",
        "/static/krai/2.webp",
        "/static/krai/3.webp",
        "/static/krai/4.webp",
      ], // Placeholder image paths
      text: "The Krai brand is a journey in a bottle. The combination of the stoic explorer, the cool, layered color palette, and the elegant details creates a sense of premium craftsmanship rooted in a powerful natural story. The final design invites consumers to experience the pure, crisp, and silent spirit of the arctic.",
    },
  },
];

// =================================================================
// --- 3. UPDATED: Your existing logic to build the master project list ---
// =================================================================

export interface ProjectListing {
  slug: string;
  title: string;
  category: string;
  thumbnail: StaticImageData;
  type: "dynamic" | "hardcoded" | "branding";
}

// Hardcoded projects (unchanged)
const hardcodedProjects: ProjectListing[] = [
  {
    slug: "book-app",
    title: "Book App",
    category: "UI/UX Design",
    thumbnail: bookAppThumbnail,
    type: "hardcoded",
  },
  {
    slug: "evense",
    title: "Evense",
    category: "Branding & Web",
    thumbnail: evenseThumbnail,
    type: "hardcoded",
  },
  {
    slug: "moondivine",
    title: "Moondivine",
    category: "Branding & Web",
    thumbnail: moondivineThumbnail,
    type: "hardcoded",
  },
];

// Dynamic social media projects (unchanged)
const dynamicSocialProjects: ProjectListing[] = socialMediaProjectsData.map(
  (project) => ({
    slug: `social/${project.slug}`, // <-- IMPORTANT: Add prefix to slug for correct URL
    title: project.hero.titleLine2,
    category: "Social Media",
    thumbnail: project.thumbnail,
    type: "dynamic",
  })
);

// --- 4. NEW: Map the new branding projects to the common interface ---
const dynamicBrandingProjects: ProjectListing[] = brandingProjectsData.map(
  (project) => ({
    slug: `branding/${project.slug}`, // <-- IMPORTANT: Add prefix to slug for correct URL
    title: project.meta.title.split(" | ")[0], // Extracts "Bilargo Branding" from the full meta title
    category: "Branding",
    thumbnail: project.thumbnail,
    type: "branding",
  })
);

// --- 5. MODIFIED: Combine and export the single master list, with Krai as the 3rd project ---

// First, create a combined list of all projects EXCEPT for the one we want to move.
const kraiProject = dynamicBrandingProjects.find(
  (p) => p.slug === "branding/krai"
);
const otherBrandingProjects = dynamicBrandingProjects.filter(
  (p) => p.slug !== "branding/krai"
);

// Combine all other projects in their default order.
const allOtherProjects = [
  ...hardcodedProjects,
  ...dynamicSocialProjects,
  ...otherBrandingProjects,
];

// Now, construct the final master list by inserting the Krai project at the 3rd position (index 2).
// We add a check to ensure the krai project was actually found to prevent errors.
export const allProjects: ProjectListing[] = kraiProject
  ? [
      ...allOtherProjects.slice(0, 2), // The first two projects from the list
      kraiProject, // Insert Krai as the third project
      ...allOtherProjects.slice(2), // The rest of the projects
    ]
  : allOtherProjects; // Fallback to the original list if krai isn't found for some reason
