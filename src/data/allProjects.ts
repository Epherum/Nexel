// src/data/allProjects.ts
import { StaticImageData } from "next/image";

// --- EXISTING IMPORTS ---
import bookAppThumbnail from "/public/static/thumbnails/bookApp-thumbnail.png";
import evenseThumbnail from "/public/static/thumbnails/evense-thumbnail.png";
import { socialMediaProjectsData } from "./socialMediaData";

// --- 1. NEW IMPORT for your first branding project's thumbnail ---
// You will need to create and add this thumbnail image
import bilargoThumbnail from "/public/static/thumbnails/bilargo-thumbnail.png";
import spacefoodThumbnail from "/public/static/thumbnails/spacefood-thumbnail.png";
import matukyThumbnail from "/public/static/thumbnails/matuky-thumbnail.png";
import wagThumbnail from "/public/static/thumbnails/wag-thumbnail.png";
import moondivineThumbnail from "/public/static/thumbnails/moondivine-thumbnail.png";

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
        "A case study on crafting a timeless and adaptable brand identity for Bilargo.",
    },
    thumbnail: bilargoThumbnail, // <-- ADDED
    heroHeadline: "More than a bookshelf a home for every story.",
    heroImage: "/static/bilargo/hero.png",
    introText:
      "This deliberate choice not only enhances the visual appeal of the project but also contributes to a seamless user experience, reinforcing the brand's identity across various digital platforms.",
    challengeText:
      "This deliberate choice not only enhances the visual appeal of the project but also contributes to a seamless user experience, reinforcing the brand's identity across various digital platforms. the project but also contributes to a seamless user experience, reinforcing the brand's identity across various digital platforms",
    approachText:
      "Our approach was rooted in collaboration and strategic thinking. We started with an immersive workshop to define the brand's essence, followed by iterative design sprints. This allowed us to explore a range of concepts, ensuring the final identity was not only beautiful but also strategically sound.",
    fullWidthImage: "/static/bilargo/full-width.png",
    services: {
      title: "Services Pages",
      subtitle:
        "Careful attention was paid to font sizes and spacing to ensure optimal readability and usability, adhering to established web design principles and preferences.",
      body: "This deliberate choice not only enhances the visual appeal of the project but also contributes to a seamless user experience, reinforcing the brand's identity across various digital platforms. the project but also contributes to a seamless user experience, reinforcing the brand's identity across various digital platforms",
    },
    showcase: {
      images: [
        "/static/bilargo/1.png",
        "/static/bilargo/2.png",
        "/static/bilargo/3.png",
        "/static/bilargo/4.png",
      ],
      text: "We designed the app to be more than just a tool. It's a quiet companion for readers, a thoughtfully crafted space where stories are stored, remembered, and revisited with ease.",
    },
  },
  {
    slug: "spacefood",
    meta: {
      title: "SpaceFood Branding | Nexel",
      description:
        "A case study on crafting a timeless and adaptable brand identity for SpaceFood.",
    },
    thumbnail: spacefoodThumbnail, // <-- ADDED
    heroHeadline: "More than a bookshelf a home for every story.",
    heroImage: "/static/spacefood/hero.png",
    introText:
      "This deliberate choice not only enhances the visual appeal of the project but also contributes to a seamless user experience, reinforcing the brand's identity across various digital platforms.",
    challengeText:
      "This deliberate choice not only enhances the visual appeal of the project but also contributes to a seamless user experience, reinforcing the brand's identity across various digital platforms. the project but also contributes to a seamless user experience, reinforcing the brand's identity across various digital platforms",
    approachText:
      "Our approach was rooted in collaboration and strategic thinking. We started with an immersive workshop to define the brand's essence, followed by iterative design sprints. This allowed us to explore a range of concepts, ensuring the final identity was not only beautiful but also strategically sound.",
    fullWidthImage: "/static/spacefood/full-width.png",
    services: {
      title: "Services Pages",
      subtitle:
        "Careful attention was paid to font sizes and spacing to ensure optimal readability and usability, adhering to established web design principles and preferences.",
      body: "This deliberate choice not only enhances the visual appeal of the project but also contributes to a seamless user experience, reinforcing the brand's identity across various digital platforms. the project but also contributes to a seamless user experience, reinforcing the brand's identity across various digital platforms",
    },
    showcase: {
      images: [
        "/static/spacefood/1.png",
        "/static/spacefood/2.png",
        "/static/spacefood/3.png",
        "/static/spacefood/4.png",
      ],
      text: "We designed the app to be more than just a tool. It's a quiet companion for readers, a thoughtfully crafted space where stories are stored, remembered, and revisited with ease.",
    },
  },
  {
    slug: "matuky",
    meta: {
      title: "matuky Branding | Nexel",
      description:
        "A case study on crafting a timeless and adaptable brand identity for matuky.",
    },
    thumbnail: matukyThumbnail, // <-- ADDED
    heroHeadline: "More than a bookshelf a home for every story.",
    heroImage: "/static/matuky/hero.png",
    introText:
      "This deliberate choice not only enhances the visual appeal of the project but also contributes to a seamless user experience, reinforcing the brand's identity across various digital platforms.",
    challengeText:
      "This deliberate choice not only enhances the visual appeal of the project but also contributes to a seamless user experience, reinforcing the brand's identity across various digital platforms. the project but also contributes to a seamless user experience, reinforcing the brand's identity across various digital platforms",
    approachText:
      "Our approach was rooted in collaboration and strategic thinking. We started with an immersive workshop to define the brand's essence, followed by iterative design sprints. This allowed us to explore a range of concepts, ensuring the final identity was not only beautiful but also strategically sound.",
    fullWidthImage: "/static/matuky/full-width.png",
    services: {
      title: "Services Pages",
      subtitle:
        "Careful attention was paid to font sizes and spacing to ensure optimal readability and usability, adhering to established web design principles and preferences.",
      body: "This deliberate choice not only enhances the visual appeal of the project but also contributes to a seamless user experience, reinforcing the brand's identity across various digital platforms. the project but also contributes to a seamless user experience, reinforcing the brand's identity across various digital platforms",
    },
    showcase: {
      images: [
        "/static/matuky/1.png",
        "/static/matuky/2.png",
        "/static/matuky/3.png",
        "/static/matuky/4.png",
      ],
      text: "We designed the app to be more than just a tool. It's a quiet companion for readers, a thoughtfully crafted space where stories are stored, remembered, and revisited with ease.",
    },
  },
  {
    slug: "wag",
    meta: {
      title: "wag Branding | Nexel",
      description:
        "A case study on crafting a timeless and adaptable brand identity for wag.",
    },
    thumbnail: wagThumbnail, // <-- ADDED
    heroHeadline: "Not just an organizer a creator of lasting experiences.",
    heroImage: "/static/wag/hero.png",
    introText:
      "This deliberate choice not only enhances the visual appeal of the project but also contributes to a seamless user experience, reinforcing the brand's identity across various digital platforms.",
    challengeText:
      "This deliberate choice not only enhances the visual appeal of the project but also contributes to a seamless user experience, reinforcing the brand's identity across various digital platforms. the project but also contributes to a seamless user experience, reinforcing the brand's identity across various digital platforms",
    approachText:
      "Our approach was rooted in collaboration and strategic thinking. We started with an immersive workshop to define the brand's essence, followed by iterative design sprints. This allowed us to explore a range of concepts, ensuring the final identity was not only beautiful but also strategically sound.",
    fullWidthImage: "/static/wag/full-width.png",
    services: {
      title: "Services Pages",
      subtitle:
        "Careful attention was paid to font sizes and spacing to ensure optimal readability and usability, adhering to established web design principles and preferences.",
      body: "This deliberate choice not only enhances the visual appeal of the project but also contributes to a seamless user experience, reinforcing the brand's identity across various digital platforms. the project but also contributes to a seamless user experience, reinforcing the brand's identity across various digital platforms",
    },
    showcase: {
      images: [
        "/static/wag/1.png",
        "/static/wag/2.png",
        "/static/wag/3.png",
        "/static/wag/4.png",
      ],
      text: "We designed the app to be more than just a tool. It's a quiet companion for readers, a thoughtfully crafted space where stories are stored, remembered, and revisited with ease.",
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
  type: "dynamic" | "hardcoded" | "branding"; // <-- Added 'branding' for clarity
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

// --- 5. UPDATED: Combine and export the single master list ---
export const allProjects: ProjectListing[] = [
  ...hardcodedProjects,
  ...dynamicSocialProjects,
  ...dynamicBrandingProjects, // <-- Added our new list here
];
