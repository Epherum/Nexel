//src/app/projects/%5Bslug%5D/page.tsx
"use client";
import React from "react";
import styles from "./project.module.scss";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { notFound } from "next/navigation";

// Import data and the SocialMediaPost component
import { socialMediaProjectsData } from "@/data/socialMediaData";
import SocialMediaPost from "@/components/SocialMediaPost/SocialMediaPost";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = socialMediaProjectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const gridItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
      },
    }),
  };

  return (
    <>
      {/* Dynamic Hero Section */}
      <section className={styles.projectHero}>
        <div className={styles.heroBackground}>
          <Image
            src={project.hero.image}
            alt={`${project.slug} hero background`}
            fill
            style={{ objectFit: "cover" }}
            priority
            data-scroll
            data-scroll-speed="-0.1"
          />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroTitle}>
            <p>{project.hero.titleLine1}</p>
            <h1>{project.hero.titleLine2}</h1>
          </div>
          <div className={styles.heroMeta}>
            <div className={styles.heroYear}>{project.hero.year}</div>
            <div className={styles.heroScroll}>Scroll down</div>
          </div>
        </div>
      </section>

      {/* Dynamic Showcases Section */}
      <main>
        {project.showcases.map((showcase, index) => {
          // Use a switch to render the correct component based on type
          switch (showcase.type) {
            case "social_media_grid":
              return (
                <section key={index} className={styles.firstShowcase}>
                  {showcase.posts.map((post, postIndex) => (
                    <motion.div
                      key={postIndex}
                      custom={postIndex}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={gridItemVariants}
                    >
                      <SocialMediaPost {...post} />
                    </motion.div>
                  ))}
                </section>
              );

            case "large_image_pair":
              return (
                <section key={index} className={styles.secondShowcase}>
                  {showcase.images.map((src, imgIndex) => (
                    <div className={styles.imageContainer} key={imgIndex}>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: imgIndex * 0.1 }}
                      >
                        <Image
                          src={src}
                          alt={`${project.slug} showcase image ${imgIndex + 1}`}
                          data-scroll
                          data-scroll-speed="-0.1"
                        />
                      </motion.div>
                    </div>
                  ))}
                </section>
              );

            default:
              return null; // Or a fallback component
          }
        })}
      </main>

      <Footer />
    </>
  );
}
