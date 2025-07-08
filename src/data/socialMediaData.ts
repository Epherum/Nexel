// src/data/projectsData.ts
import { StaticImageData } from "next/image";

// ============================================================================
// DEFINE YOUR TYPES
// ============================================================================

interface SocialMediaHero {
  profileIcon: StaticImageData;
  name: string;
  image: StaticImageData;
  altText: string;
}

type SocialMediaShowcase =
  | {
      type: "social_media_grid";
      posts: SocialMediaHero[];
      skewed?: boolean;
    }
  | {
      type: "large_image_pair";
      images: [StaticImageData, StaticImageData];
    };

export interface SocialMediaProject {
  slug: string;
  thumbnail: StaticImageData;
  hero: {
    image: StaticImageData;
    titleLine1: string;
    titleLine2: string;
    year: string;
  };
  showcases: SocialMediaShowcase[];
}

// ============================================================================
// IMPORT ALL PROJECT ASSETS
// ============================================================================

// --- Project Thumbnails ---
import amazoneThumbnail from "/public/static/thumbnails/amazone-thumbnail.webp";
import digitalThumbnail from "/public/static/thumbnails/digital-thumbnail.webp";
import tresorsThumbnail from "/public/static/thumbnails/tresors-thumbnail.webp";
import mestiriThumbnail from "/public/static/thumbnails/mestiri-thumbnail.webp";
import virginiaThumbnail from "/public/static/thumbnails/virginia-thumbnail.webp";

// ---  Tresors Naturels  Assets ---
import tresorsHero from "/public/static/tresors/hero.webp";
import tresorsImg1 from "/public/static/tresors/1.webp";
import tresorsImg2 from "/public/static/tresors/2.webp";
import tresorsImg3 from "/public/static/tresors/3.webp";
import tresorsImg4 from "/public/static/tresors/4.webp";
import tresorsImg5 from "/public/static/tresors/5.webp";
import tresorsImg6 from "/public/static/tresors/6.webp";
import tresorsImg7 from "/public/static/tresors/7.webp";
import tresorsImg8 from "/public/static/tresors/8.webp";
import tresorsImg9 from "/public/static/tresors/9.webp";
import tresorsImg10 from "/public/static/tresors/10.webp";
import tresorsImg11 from "/public/static/tresors/11.webp";
import tresorsImg12 from "/public/static/tresors/12.webp";
import tresorsImg13 from "/public/static/tresors/13.webp";
import tresorsImg14 from "/public/static/tresors/14.webp";
import tresorsImg15 from "/public/static/tresors/15.webp";
import tresorsImg16 from "/public/static/tresors/16.webp";
import tresorsImg17 from "/public/static/tresors/17.webp";
import tresorsImg18 from "/public/static/tresors/18.webp";
import tresorsImg19 from "/public/static/tresors/19.webp";
import tresorsImg20 from "/public/static/tresors/20.webp";
import tresorsImg21 from "/public/static/tresors/21.webp";
import tresorsImg22 from "/public/static/tresors/22.webp";
import tresorsImg24 from "/public/static/tresors/24.webp";
import tresorsImg25 from "/public/static/tresors/25.webp";
import tresorsImg26 from "/public/static/tresors/26.webp";
import tresorsImg27 from "/public/static/tresors/27.webp";
import tresorsImg28 from "/public/static/tresors/28.webp";

// --- Virginia Project Assets ---
import virginiaHero from "/public/static/virginia/hero.webp";
import virginiaImg1 from "/public/static/virginia/1.webp";
import virginiaImg2 from "/public/static/virginia/2.webp";
import virginiaImg3 from "/public/static/virginia/3.webp";
import virginiaImg4 from "/public/static/virginia/4.webp";
import virginiaImg5 from "/public/static/virginia/5.webp";
import virginiaImg6 from "/public/static/virginia/6.webp";
import virginiaImg7 from "/public/static/virginia/7.webp";
import virginiaImg8 from "/public/static/virginia/8.webp";
import virginiaImg9 from "/public/static/virginia/9.webp";
import virginiaImg10 from "/public/static/virginia/10.webp";
import virginiaImg11 from "/public/static/virginia/11.webp";
import virginiaImg12 from "/public/static/virginia/12.webp";
import virginiaImg13 from "/public/static/virginia/13.webp";
import virginiaImg14 from "/public/static/virginia/14.webp";
import virginiaImg15 from "/public/static/virginia/15.webp";
import virginiaImg16 from "/public/static/virginia/16.webp";
import virginiaImg17 from "/public/static/virginia/17.webp";

// --- Digital Project Assets ---
import digitalHero from "/public/static/digital/hero.webp";
import digitalImg1 from "/public/static/digital/1.webp";
import digitalImg2 from "/public/static/digital/2.webp";
import digitalImg3 from "/public/static/digital/3.webp";
import digitalImg4 from "/public/static/digital/4.webp";
import digitalImg5 from "/public/static/digital/5.webp";
import digitalImg6 from "/public/static/digital/6.webp";
import digitalImg7 from "/public/static/digital/7.webp";
import digitalImg8 from "/public/static/digital/8.webp";
import digitalImg9 from "/public/static/digital/9.webp";
import digitalImg10 from "/public/static/digital/10.webp";
import digitalImg11 from "/public/static/digital/11.webp";
import digitalImg12 from "/public/static/digital/12.webp";
import digitalImg13 from "/public/static/digital/13.webp";
import digitalImg14 from "/public/static/digital/14.webp";
import digitalImg15 from "/public/static/digital/15.webp";
import digitalImg16 from "/public/static/digital/16.webp";
import digitalImg17 from "/public/static/digital/17.webp";

// --- Mestiri Project Assets ---
import mestiriHero from "/public/static/mestiri/hero.webp";
import mestiriImg1 from "/public/static/mestiri/1.webp";
import mestiriImg2 from "/public/static/mestiri/2.webp";
import mestiriImg3 from "/public/static/mestiri/3.webp";
import mestiriImg4 from "/public/static/mestiri/4.webp";
import mestiriImg5 from "/public/static/mestiri/5.webp";
import mestiriImg6 from "/public/static/mestiri/6.webp";
import mestiriImg7 from "/public/static/mestiri/7.webp";
import mestiriImg8 from "/public/static/mestiri/8.webp";
import mestiriImg9 from "/public/static/mestiri/9.webp";
import mestiriImg10 from "/public/static/mestiri/10.webp";
import mestiriImg11 from "/public/static/mestiri/11.webp";
import mestiriImg12 from "/public/static/mestiri/12.webp";
import mestiriImg13 from "/public/static/mestiri/13.webp";
import mestiriImg14 from "/public/static/mestiri/14.webp";
import mestiriImg15 from "/public/static/mestiri/15.webp";
import mestiriImg16 from "/public/static/mestiri/16.webp";
import mestiriImg17 from "/public/static/mestiri/17.webp";

// --- Amazone Project Assets ---
import amazoneHero from "/public/static/amazone/hero.webp";
import amazoneImg1 from "/public/static/amazone/1.webp";
import amazoneImg2 from "/public/static/amazone/2.webp";
import amazoneImg3 from "/public/static/amazone/3.webp";
import amazoneImg4 from "/public/static/amazone/4.webp";
import amazoneImg5 from "/public/static/amazone/5.webp";
import amazoneImg6 from "/public/static/amazone/6.webp";
import amazoneImg7 from "/public/static/amazone/7.webp";
import amazoneImg8 from "/public/static/amazone/8.webp";
import amazoneImg9 from "/public/static/amazone/9.webp";
import amazoneImg10 from "/public/static/amazone/10.webp";
import amazoneImg11 from "/public/static/amazone/11.webp";
import amazoneImg12 from "/public/static/amazone/12.webp";
import amazoneImg13 from "/public/static/amazone/13.webp";
import amazoneImg14 from "/public/static/amazone/14.webp";
import amazoneImg15 from "/public/static/amazone/15.webp";
import amazoneImg17 from "/public/static/amazone/17.webp";
import amazoneImg18 from "/public/static/amazone/18.webp";
import amazoneImg19 from "/public/static/amazone/19.webp";

// ============================================================================
// PROJECTS DATABASE
// ============================================================================

export const socialMediaProjectsData: SocialMediaProject[] = [
  // --- TRESORS NATURELS (CORRECTED) ---
  {
    slug: "tresors-naturels",
    thumbnail: tresorsThumbnail, // <-- ADDED

    hero: {
      image: tresorsHero,
      titleLine1: "Social Media For:",
      titleLine2: "Tresors naturels",
      year: "2021",
    },
    showcases: [
      {
        type: "social_media_grid",
        posts: [
          {
            profileIcon: tresorsImg1,
            name: "Tresors_naturels_officiel",
            image: tresorsImg1,
            altText: "Social media post 1",
          },
          {
            profileIcon: tresorsImg1,
            name: "Tresors_naturels_officiel",
            image: tresorsImg2,
            altText: "Social media post 2",
          },
          {
            profileIcon: tresorsImg1,
            name: "Tresors_naturels_officiel",
            image: tresorsImg3,
            altText: "Social media post 3",
          },
          {
            profileIcon: tresorsImg1,
            name: "Tresors_naturels_officiel",
            image: tresorsImg4,
            altText: "Social media post 4",
          },
          {
            profileIcon: tresorsImg1,
            name: "Tresors_naturels_officiel",
            image: tresorsImg5,
            altText: "Social media post 5",
          },
          {
            profileIcon: tresorsImg1,
            name: "Tresors_naturels_officiel",
            image: tresorsImg6,
            altText: "Social media post 6",
          },
        ],
      },
      { type: "large_image_pair", images: [tresorsImg7, tresorsImg8] },
      {
        type: "social_media_grid",
        posts: [
          {
            profileIcon: tresorsImg1,
            name: "Tresors_naturels_officiel",
            image: tresorsImg9,
            altText: "Social media post 9",
          },
          {
            profileIcon: tresorsImg1,
            name: "Tresors_naturels_officiel",
            image: tresorsImg10,
            altText: "Social media post 10",
          },
          {
            profileIcon: tresorsImg1,
            name: "Tresors_naturels_officiel",
            image: tresorsImg11,
            altText: "Social media post 11",
          },
          {
            profileIcon: tresorsImg1,
            name: "Tresors_naturels_officiel",
            image: tresorsImg12,
            altText: "Social media post 12",
          },
          {
            profileIcon: tresorsImg1,
            name: "Tresors_naturels_officiel",
            image: tresorsImg13,
            altText: "Social media post 13",
          },
          {
            profileIcon: tresorsImg1,
            name: "Tresors_naturels_officiel",
            image: tresorsImg14,
            altText: "Social media post 14",
          },
          {
            profileIcon: tresorsImg1,
            name: "Tresors_naturels_officiel",
            image: tresorsImg15,
            altText: "Social media post 15",
          },
          {
            profileIcon: tresorsImg1,
            name: "Tresors_naturels_officiel",
            image: tresorsImg16,
            altText: "Social media post 16",
          },
          {
            profileIcon: tresorsImg1,
            name: "Tresors_naturels_officiel",
            image: tresorsImg17,
            altText: "Social media post 17",
          },
        ],
      },
      { type: "large_image_pair", images: [tresorsImg18, tresorsImg19] },
      {
        type: "social_media_grid",
        posts: [
          {
            profileIcon: tresorsImg1,
            name: "Tresors_naturels_officiel",
            image: tresorsImg20,
            altText: "Social media post 20",
          },
          {
            profileIcon: tresorsImg1,
            name: "Tresors_naturels_officiel",
            image: tresorsImg21,
            altText: "Social media post 21",
          },
          {
            profileIcon: tresorsImg1,
            name: "Tresors_naturels_officiel",
            image: tresorsImg22,
            altText: "Social media post 22",
          },
          {
            profileIcon: tresorsImg1,
            name: "Tresors_naturels_officiel",
            image: tresorsImg24,
            altText: "Social media post 24",
          },
          {
            profileIcon: tresorsImg1,
            name: "Tresors_naturels_officiel",
            image: tresorsImg25,
            altText: "Social media post 25",
          },
          {
            profileIcon: tresorsImg1,
            name: "Tresors_naturels_officiel",
            image: tresorsImg26,
            altText: "Social media post 26",
          },
          {
            profileIcon: tresorsImg1,
            name: "Tresors_naturels_officiel",
            image: tresorsImg27,
            altText: "Social media post 27",
          },
          {
            profileIcon: tresorsImg1,
            name: "Tresors_naturels_officiel",
            image: tresorsImg28,
            altText: "Social media post 28",
          },
        ],
        skewed: true,
      },
    ],
  },
  // --- MESTIRI PROJECT ---
  {
    slug: "mestiri",
    thumbnail: mestiriThumbnail, // <-- ADDED

    hero: {
      image: mestiriHero,
      titleLine1: "Social Media For:",
      titleLine2: "Mestiri Home",
      year: "2022",
    },
    showcases: [
      {
        type: "social_media_grid",
        posts: [
          {
            profileIcon: mestiriImg1,
            name: "Mestiri_officiel",
            image: mestiriImg1,
            altText: "Mestiri social media post 1",
          },
          {
            profileIcon: mestiriImg1,
            name: "Mestiri_officiel",
            image: mestiriImg2,
            altText: "Mestiri social media post 2",
          },
          {
            profileIcon: mestiriImg1,
            name: "Mestiri_officiel",
            image: mestiriImg3,
            altText: "Mestiri social media post 3",
          },
          {
            profileIcon: mestiriImg1,
            name: "Mestiri_officiel",
            image: mestiriImg4,
            altText: "Mestiri social media post 4",
          },
          {
            profileIcon: mestiriImg1,
            name: "Mestiri_officiel",
            image: mestiriImg5,
            altText: "Mestiri social media post 5",
          },
          {
            profileIcon: mestiriImg1,
            name: "Mestiri_officiel",
            image: mestiriImg6,
            altText: "Mestiri social media post 6",
          },
        ],
      },
      { type: "large_image_pair", images: [mestiriImg7, mestiriImg8] },
      {
        type: "social_media_grid",
        posts: [
          {
            profileIcon: mestiriImg1,
            name: "Mestiri_officiel",
            image: mestiriImg9,
            altText: "Mestiri social media post 9",
          },
          {
            profileIcon: mestiriImg1,
            name: "Mestiri_officiel",
            image: mestiriImg10,
            altText: "Mestiri social media post 10",
          },
          {
            profileIcon: mestiriImg1,
            name: "Mestiri_officiel",
            image: mestiriImg11,
            altText: "Mestiri social media post 11",
          },
          {
            profileIcon: mestiriImg1,
            name: "Mestiri_officiel",
            image: mestiriImg12,
            altText: "Mestiri social media post 12",
          },
          {
            profileIcon: mestiriImg1,
            name: "Mestiri_officiel",
            image: mestiriImg13,
            altText: "Mestiri social media post 13",
          },
          {
            profileIcon: mestiriImg1,
            name: "Mestiri_officiel",
            image: mestiriImg14,
            altText: "Mestiri social media post 14",
          },
          {
            profileIcon: mestiriImg1,
            name: "Mestiri_officiel",
            image: mestiriImg15,
            altText: "Mestiri social media post 15",
          },
          {
            profileIcon: mestiriImg1,
            name: "Mestiri_officiel",
            image: mestiriImg16,
            altText: "Mestiri social media post 16",
          },
          {
            profileIcon: mestiriImg1,
            name: "Mestiri_officiel",
            image: mestiriImg17,
            altText: "Mestiri social media post 17",
          },
        ],
        skewed: true,
      },
    ],
  },
  // --- VIRGINIA PROJECT ---
  {
    slug: "virginia",
    thumbnail: virginiaThumbnail, // <-- ADDED

    hero: {
      image: virginiaHero,
      titleLine1: "Social Media For:",
      titleLine2: "Virginia",
      year: "2023",
    },
    showcases: [
      {
        type: "social_media_grid",
        posts: [
          {
            profileIcon: virginiaImg1,
            name: "Virginia_officiel",
            image: virginiaImg1,
            altText: "Virginia social media post 1",
          },
          {
            profileIcon: virginiaImg1,
            name: "Virginia_officiel",
            image: virginiaImg2,
            altText: "Virginia social media post 2",
          },
          {
            profileIcon: virginiaImg1,
            name: "Virginia_officiel",
            image: virginiaImg3,
            altText: "Virginia social media post 3",
          },
          {
            profileIcon: virginiaImg1,
            name: "Virginia_officiel",
            image: virginiaImg4,
            altText: "Virginia social media post 4",
          },
          {
            profileIcon: virginiaImg1,
            name: "Virginia_officiel",
            image: virginiaImg5,
            altText: "Virginia social media post 5",
          },
          {
            profileIcon: virginiaImg1,
            name: "Virginia_officiel",
            image: virginiaImg6,
            altText: "Virginia social media post 6",
          },
        ],
      },
      { type: "large_image_pair", images: [virginiaImg7, virginiaImg8] },
      {
        type: "social_media_grid",
        posts: [
          {
            profileIcon: virginiaImg1,
            name: "Virginia_officiel",
            image: virginiaImg9,
            altText: "Virginia social media post 9",
          },
          {
            profileIcon: virginiaImg1,
            name: "Virginia_officiel",
            image: virginiaImg10,
            altText: "Virginia social media post 10",
          },
          {
            profileIcon: virginiaImg1,
            name: "Virginia_officiel",
            image: virginiaImg11,
            altText: "Virginia social media post 11",
          },
          {
            profileIcon: virginiaImg1,
            name: "Virginia_officiel",
            image: virginiaImg12,
            altText: "Virginia social media post 12",
          },
          {
            profileIcon: virginiaImg1,
            name: "Virginia_officiel",
            image: virginiaImg13,
            altText: "Virginia social media post 13",
          },
          {
            profileIcon: virginiaImg1,
            name: "Virginia_officiel",
            image: virginiaImg14,
            altText: "Virginia social media post 14",
          },
          {
            profileIcon: virginiaImg1,
            name: "Virginia_officiel",
            image: virginiaImg15,
            altText: "Virginia social media post 15",
          },
          {
            profileIcon: virginiaImg1,
            name: "Virginia_officiel",
            image: virginiaImg16,
            altText: "Virginia social media post 16",
          },
          {
            profileIcon: virginiaImg1,
            name: "Virginia_officiel",
            image: virginiaImg17,
            altText: "Virginia social media post 17",
          },
        ],
        skewed: true,
      },
    ],
  },
  // --- DIGITAL PROJECT ---
  {
    slug: "digital",
    thumbnail: digitalThumbnail, // <-- ADDED

    hero: {
      image: digitalHero,
      titleLine1: "Social Media For:",
      titleLine2: "Digital Lifestyle",
      year: "2023",
    },
    showcases: [
      {
        type: "social_media_grid",
        posts: [
          {
            profileIcon: digitalImg1,
            name: "Digital_officiel",
            image: digitalImg1,
            altText: "Digital social media post 1",
          },
          {
            profileIcon: digitalImg1,
            name: "Digital_officiel",
            image: digitalImg2,
            altText: "Digital social media post 2",
          },
          {
            profileIcon: digitalImg1,
            name: "Digital_officiel",
            image: digitalImg3,
            altText: "Digital social media post 3",
          },
          {
            profileIcon: digitalImg1,
            name: "Digital_officiel",
            image: digitalImg4,
            altText: "Digital social media post 4",
          },
          {
            profileIcon: digitalImg1,
            name: "Digital_officiel",
            image: digitalImg5,
            altText: "Digital social media post 5",
          },
          {
            profileIcon: digitalImg1,
            name: "Digital_officiel",
            image: digitalImg6,
            altText: "Digital social media post 6",
          },
        ],
      },
      { type: "large_image_pair", images: [digitalImg7, digitalImg8] },
      {
        type: "social_media_grid",
        posts: [
          {
            profileIcon: digitalImg1,
            name: "Digital_officiel",
            image: digitalImg9,
            altText: "Digital social media post 9",
          },
          {
            profileIcon: digitalImg1,
            name: "Digital_officiel",
            image: digitalImg10,
            altText: "Digital social media post 10",
          },
          {
            profileIcon: digitalImg1,
            name: "Digital_officiel",
            image: digitalImg11,
            altText: "Digital social media post 11",
          },
          {
            profileIcon: digitalImg1,
            name: "Digital_officiel",
            image: digitalImg12,
            altText: "Digital social media post 12",
          },
          {
            profileIcon: digitalImg1,
            name: "Digital_officiel",
            image: digitalImg13,
            altText: "Digital social media post 13",
          },
          {
            profileIcon: digitalImg1,
            name: "Digital_officiel",
            image: digitalImg14,
            altText: "Digital social media post 14",
          },
          {
            profileIcon: digitalImg1,
            name: "Digital_officiel",
            image: digitalImg15,
            altText: "Digital social media post 15",
          },
          {
            profileIcon: digitalImg1,
            name: "Digital_officiel",
            image: digitalImg16,
            altText: "Digital social media post 16",
          },
          {
            profileIcon: digitalImg1,
            name: "Digital_officiel",
            image: digitalImg17,
            altText: "Digital social media post 17",
          },
        ],
        skewed: true,
      },
    ],
  },
  // --- AMAZONE PROJECT ---
  {
    slug: "amazone",
    thumbnail: amazoneThumbnail, // <-- ADDED

    hero: {
      image: amazoneHero,
      titleLine1: "Social Media For:",
      titleLine2: "Amazone Colours",
      year: "2022",
    },
    showcases: [
      {
        type: "social_media_grid",
        posts: [
          {
            profileIcon: amazoneImg1,
            name: "Amazone_officiel",
            image: amazoneImg1,
            altText: "Amazone social media post 1",
          },
          {
            profileIcon: amazoneImg1,
            name: "Amazone_officiel",
            image: amazoneImg2,
            altText: "Amazone social media post 2",
          },
          {
            profileIcon: amazoneImg1,
            name: "Amazone_officiel",
            image: amazoneImg3,
            altText: "Amazone social media post 3",
          },
          {
            profileIcon: amazoneImg1,
            name: "Amazone_officiel",
            image: amazoneImg4,
            altText: "Amazone social media post 4",
          },
          {
            profileIcon: amazoneImg1,
            name: "Amazone_officiel",
            image: amazoneImg5,
            altText: "Amazone social media post 5",
          },
          {
            profileIcon: amazoneImg1,
            name: "Amazone_officiel",
            image: amazoneImg6,
            altText: "Amazone social media post 6",
          },
        ],
      },
      { type: "large_image_pair", images: [amazoneImg7, amazoneImg8] },
      {
        type: "social_media_grid",
        posts: [
          {
            profileIcon: amazoneImg1,
            name: "Amazone_officiel",
            image: amazoneImg9,
            altText: "Amazone social media post 9",
          },
          {
            profileIcon: amazoneImg1,
            name: "Amazone_officiel",
            image: amazoneImg10,
            altText: "Amazone social media post 10",
          },
          {
            profileIcon: amazoneImg1,
            name: "Amazone_officiel",
            image: amazoneImg11,
            altText: "Amazone social media post 11",
          },
          {
            profileIcon: amazoneImg1,
            name: "Amazone_officiel",
            image: amazoneImg12,
            altText: "Amazone social media post 12",
          },
          {
            profileIcon: amazoneImg1,
            name: "Amazone_officiel",
            image: amazoneImg13,
            altText: "Amazone social media post 13",
          },
          {
            profileIcon: amazoneImg1,
            name: "Amazone_officiel",
            image: amazoneImg14,
            altText: "Amazone social media post 14",
          },
          {
            profileIcon: amazoneImg1,
            name: "Amazone_officiel",
            image: amazoneImg15,
            altText: "Amazone social media post 15",
          },
          {
            profileIcon: amazoneImg1,
            name: "Amazone_officiel",
            image: amazoneImg17,
            altText: "Amazone social media post 17",
          },
          {
            profileIcon: amazoneImg1,
            name: "Amazone_officiel",
            image: amazoneImg18,
            altText: "Amazone social media post 18",
          },
          {
            profileIcon: amazoneImg1,
            name: "Amazone_officiel",
            image: amazoneImg19,
            altText: "Amazone social media post 19",
          },
        ],
        skewed: true,
      },
    ],
  },
];
