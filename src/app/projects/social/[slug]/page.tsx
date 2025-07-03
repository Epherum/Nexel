// src/app/projects/social/[slug]/page.tsx
// This file is now a Server Component (no "use client")

import { notFound } from "next/navigation";
import { Metadata } from "next";

// Import data and the new client component
import { socialMediaProjectsData } from "@/data/socialMediaData";
import SocialProjectClient from "./SocialTemplateClient";

// Define a clear, reusable type for the component's props

// Generates static pages for each project at build time for better performance
export async function generateStaticParams() {
  return socialMediaProjectsData.map((project) => ({
    slug: project.slug,
  }));
}

// Generates dynamic metadata for each page for better SEO
// Use the new Props type here
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const project = socialMediaProjectsData.find((p) => p.slug === params.slug);
  if (!project) {
    return { title: "Project Not Found" };
  }
  return {
    title: `${project.hero.titleLine2} | Social Media Campaign`,
    description: `A showcase of the social media project for ${project.hero.titleLine2}.`,
  };
}

// The page component now only fetches data and passes it to the client component
// Use the new Props type here as well
export default function ProjectPage({ params }: any) {
  // 1. Fetch data on the server
  const project = socialMediaProjectsData.find((p) => p.slug === params.slug);

  // Handle case where project is not found
  if (!project) {
    notFound();
  }

  // 2. Render the client component, passing the fetched data as a prop
  return <SocialProjectClient project={project} />;
}
