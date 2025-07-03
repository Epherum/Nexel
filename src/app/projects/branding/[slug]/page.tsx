// src/app/projects/branding/[slug]/page.tsx
// This is now a clean Server Component for data fetching

import { notFound } from "next/navigation";
import { Metadata } from "next";

import { brandingProjectsData } from "@/data/allProjects";
import BrandingTemplateClient from "./BrandingTemplateClient"; // Import the new client component

// This function can stay here, it runs on the server
export async function generateStaticParams() {
  return brandingProjectsData.map((project) => ({
    slug: project.slug,
  }));
}

// This function can stay here, it runs on the server
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const project = brandingProjectsData.find((p) => p.slug === params.slug);
  if (!project) {
    return { title: "Project Not Found" };
  }
  return {
    title: project.meta.title,
    description: project.meta.description,
  };
}

// The page component is now much simpler
export default function BrandingProjectPage({ params }: any) {
  // 1. Fetch data on the server
  const project = brandingProjectsData.find((p) => p.slug === params.slug);

  // If no project is found, show the 404 page
  if (!project) {
    notFound();
  }

  // 2. Pass the data to the Client Component for rendering
  return <BrandingTemplateClient project={project} />;
}
