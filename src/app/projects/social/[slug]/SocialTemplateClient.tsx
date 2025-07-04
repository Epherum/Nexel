// src/app/projects/social/[slug]/SocialTemplateClient.tsx
"use client"; // This is now a Client Component

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import styles from "./project.module.css"; // UPDATED
import Footer from "@/components/layout/Footer";
import SocialMediaPost from "@/components/SocialMediaPost/SocialMediaPost";
import { SocialMediaProject } from "@/data/socialMediaData";

export default function SocialProjectClient({
  project,
}: {
  project: SocialMediaProject;
}) {
  // Animation variants can live here, as they are used by client components
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
              return null;
          }
        })}
      </main>
      <Footer />
    </>
  );
}
