// src/data/allProjects.ts
import { StaticImageData } from "next/image";

// 1. Import all thumbnails
import bookAppThumbnail from "/public/static/thumbnails/bookApp-thumbnail.png";
import evenseThumbnail from "/public/static/thumbnails/evense-thumbnail.png";

// 2. Import the data from our dynamic projects file
import { socialMediaProjectsData } from "./socialMediaData";

// 3. Define a simple, common interface for any project listing
export interface ProjectListing {
  slug: string; // e.g., 'book-app' or 'virginia'
  title: string;
  category: string;
  thumbnail: StaticImageData;
  type: "dynamic" | "hardcoded"; // <-- ADD THIS PROPERTY
}

// 4. Manually define the hardcoded projects
const hardcodedProjects: ProjectListing[] = [
  {
    slug: "book-app",
    title: "Book App",
    category: "UI/UX Design",
    thumbnail: bookAppThumbnail,
    type: "hardcoded", // <-- ADDED
  },
  {
    slug: "evense",
    title: "Evense",
    category: "Branding & Web",
    thumbnail: evenseThumbnail,
    type: "hardcoded", // <-- ADDED
  },
];

// 5. Map the dynamic social media projects to the common interface
const dynamicProjects: ProjectListing[] = socialMediaProjectsData.map(
  (project) => ({
    slug: project.slug,
    title: project.hero.titleLine2,
    category: "Social Media",
    thumbnail: project.thumbnail,
    type: "dynamic", // <-- ADDED
  })
);

// 6. Combine and export a single master list
export const allProjects: ProjectListing[] = [
  ...hardcodedProjects,
  ...dynamicProjects,
];
