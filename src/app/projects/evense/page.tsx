"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import styles from "./evense.module.css";
import Footer from "@/components/layout/Footer";
import Image from "@/components/animation/ParallaxImage";
import evense1 from "/public/static/evense/evense-1.webp";
import evensePhone from "/public/static/evense/evense-phone.webp";
import evenseFlow from "/public/static/evense/evense-flow.webp";
import { easings } from "@/utils/easings";

// A self-contained component to handle the word animation
const AnimatedWord = ({
  children,
  variants,
}: {
  children: React.ReactNode;
  variants: Variants;
}) => (
  <span style={{ display: "inline-block", overflow: "hidden" }}>
    <motion.span variants={variants} style={{ display: "inline-block" }}>
      {children}
    </motion.span>
  </span>
);

// Animation variants for the headline words
const wordRevealContainer: Variants = {
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
};
const wordVariants: Variants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 0.8, ease: easings.easeOut } },
};

// Headline text constants
const heroHeadlineLine1 = "Not just an organizer";
const heroHeadlineLine2Start = "a creator of";
const heroHeadlineHighlight = "lasting experiences.";

// --- START: Added data for the new sections ---
// This object provides the content for the sections imported from the branding project.
const projectData = {
  services: {
    title: "Services Page",
    subtitle:
      "Careful attention was paid to font sizes and spacing to ensure optimal readability and usability, adhering to established web design principles and preferences. ",
    body: "We delivered a comprehensive branding package that included logo design, color palette definition, and typography guidelines. This was complemented by a full UI/UX design for their new platform and the subsequent web development to bring the vision to life, ensuring a cohesive and impactful digital presence.",
  },
  showcase: {
    images: [
      "/static/evense/1.png",
      "/static/evense/2.png",
      "/static/evense/3.png",
      "/static/evense/4.png",
    ], // Using existing image paths as placeholders
    text: "Our design approach extended to practical applications, including merchandise and stationery, to ensure the brand's versatility and consistency across all mediums.",
  },
  fullWidthImage: "/static/evense/full-width.png", // Using an existing image path as a placeholder
};
// --- END: Added data for the new sections ---

export default function Page() {
  return (
    <main className={styles.contentWrapper}>
      <header className={styles.hero}>
        <motion.h1
          className={styles.heroHeadline}
          variants={wordRevealContainer}
          initial="hidden"
          animate="visible"
        >
          {heroHeadlineLine1.split(" ").map((word, index) => (
            <AnimatedWord key={`line1-${index}`} variants={wordVariants}>
              {word}
              {"\u00A0"}
            </AnimatedWord>
          ))}
          <br />
          {heroHeadlineLine2Start.split(" ").map((word, index) => (
            <AnimatedWord key={`line2-${index}`} variants={wordVariants}>
              {word}
              {"\u00A0"}
            </AnimatedWord>
          ))}
          <span className={styles.highlight}>
            <AnimatedWord variants={wordVariants}>
              {heroHeadlineHighlight}
            </AnimatedWord>
          </span>
        </motion.h1>
      </header>

      <main>
        <section className={styles.first}>
          <div>
            <div className={styles.image}>
              <Image src={evense1} alt="Evense platform screenshot" priority />
              <div className={styles.logo}>
                <Image
                  src="/static/evense/evense-logo.svg"
                  alt="Evense Logo"
                  width={120}
                  height={35}
                />
              </div>
            </div>
          </div>
          <div className={styles.firstColor} />
        </section>
        <section className={styles.introduction}>
          <div className={styles.container}>
            <div className={styles.imageLeft}>
              <Image
                src="/static/evense/evense-logoBlack.svg"
                alt="Evense Logo Black"
                width={400}
                height={100}
              />
            </div>
            <p className={styles.textRight}>
              The logo design was crafted with a deliberate focus on achieving a
              balance between minimalism and professionalism, while infusing a
              modern sensibility. Emphasizing simplicity and sophistication,
              each element was carefully selected and refined to convey the
              brand's identity succinctly.
            </p>
            <div className={styles.videoLeft}>
              <video
                src="/static/evense/evense-introVid.mp4"
                autoPlay
                loop
                muted
              />
            </div>
            <div className={styles.contentRight}>
              <p>
                The logo design was crafted with a deliberate focus on achieving
                a balance between minimalism and professionalism, while infusing
                a modern sensibility. Emphasizing simplicity and sophistication,
                each element was carefully selected and refined to convey the
                brand's identity succinctly.
              </p>
              <div className={styles.image}>
                <Image src={evensePhone} alt="Evense app on a phone" />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.designProcess}>
          <div className={styles.container}>
            <div className={styles.textLeft}>
              <h2>Design Process</h2>
              <p>
                This section outlines the practical steps taken to create online
                game
              </p>
            </div>
            <div className={styles.textRight}>
              <div className={styles.row}>
                <p className={styles.number}>1</p>
                <div className={styles.content}>
                  <p className={styles.title}>
                    Research and Infomation Gathering
                  </p>
                  <p className={styles.text}>
                    Comprehensive research and data collection, providing a
                    solid informational foundation for the project.
                  </p>
                </div>
              </div>
              <div className={styles.row}>
                <p className={styles.number}>2</p>
                <div className={styles.content}>
                  <p className={styles.title}>Brainstorming an Ideation </p>
                  <p className={styles.text}>
                    Producing a diverse array of ideas through brainstorming,
                    sketching, and conceptualizing.
                  </p>
                </div>
              </div>
              <div className={styles.row}>
                <p className={styles.number}>3</p>
                <div className={styles.content}>
                  <p className={styles.title}>
                    Prototyping and Concept Development
                  </p>
                  <p className={styles.text}>
                    Creation and refinement of prototypes and concepts,
                    solidifying the project's design foundation.
                  </p>
                </div>
              </div>
              <div className={styles.row}>
                <p className={styles.number}>4</p>
                <div className={styles.content}>
                  <p className={styles.title}>Testing and Feedback </p>
                  <p className={styles.text}>
                    Testing of the design and collection of valuable feedback
                    for future enhancements.
                  </p>
                </div>
              </div>
              <div className={`${styles.row} ${styles.rowLast}`}>
                <p className={styles.number}>5</p>
                <div className={styles.content}>
                  <p className={styles.title}>Refinement and Production </p>
                  <p className={styles.text}>
                    Our design was finalized and refined, successfully
                    transitioning into the production stage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.typography}>
          <div className={styles.topText}>
            <h2>Logo colour palette and typography</h2>
            <p>
              Our color palette for this project was carefully curated, blending
              the client's preferences with my design expertise to ensure a
              vibrant and cohesive aesthetic. Each color was selected
              thoughtfully, aiming to resonate with the target audience while
              maintaining the brand's identity.
            </p>
          </div>
          <div className={styles.colors}>
            <div className={styles.color}>
              <div />
              <p>#101010</p>
            </div>
            <div className={styles.color}>
              <div />
              <p>#171717</p>
            </div>
            <div className={styles.color}>
              <div />
              <p>#656565</p>
            </div>
            <div className={styles.color}>
              <div />
              <p>#FFFFFF</p>
            </div>
            <div className={styles.color}>
              <div />
              <p>#50E8BE</p>
            </div>
            <div className={styles.color}>
              <div />
              <p>#00ADF6</p>
            </div>
          </div>
          <div className={styles.fontSection}>
            <div className={styles.leftSection}>
              <div className={styles.font}>
                <p className={styles.headline}>Font</p>
                <h2 className={styles.title}>QuickSand</h2>
                <p className={styles.text}>
                  This font was chosen to complement the overall design
                  aesthetic. Its clean lines and modern appearance align
                  perfectly with the minimalistic yet vibrant approach of the
                  project.
                </p>
              </div>
              <div className={styles.weights}>
                <div className={styles.semibold}>
                  <p>Headlines</p>
                  <h3>Semibold</h3>
                </div>
                <div className={styles.regular}>
                  <p>Paragraphs</p>
                  <h3>Regular</h3>
                </div>
              </div>
            </div>

            <p className={styles.rightText}>
              Careful attention was paid to font sizes and spacing to ensure
              optimal readability and usability, adhering to established web
              design principles and preferences. This deliberate choice not only
              enhances the visual appeal of the project but also contributes to
              a seamless user experience, reinforcing the brand's identity
              across various digital platforms.
            </p>
          </div>
          <Image
            className={styles.pink}
            src="/static/evense/evense-pink.svg"
            alt="Decorative pink shape"
            width={150}
            height={150}
          />
          <Image
            className={styles.yellow}
            src="/static/evense/evense-yellow.svg"
            alt="Decorative yellow shape"
            width={150}
            height={150}
          />
          <Image
            className={styles.blue}
            src="/static/evense/evense-blue.svg"
            alt="Decorative blue shape"
            width={150}
            height={150}
          />
        </section>
        <section className={styles.userFlow}>
          <div className={styles.container}>
            <h2 className={styles.text}>User Flow</h2>
            <div className={styles.flow}>
              <Image src={evenseFlow} alt="User flow diagram for Evense" />
            </div>
          </div>
        </section>

        {/* --- START: Added sections from Branding project --- */}
        <div className={styles.newSectionsWrapper}>
          <section className={styles.underImageTextGridSection}>
            <div>
              <h3 className={styles.gridTitle}>{projectData.services.title}</h3>
              <p className={styles.gridSubtitle}>
                {projectData.services.subtitle}
              </p>
            </div>
            <p className={styles.gridBody}>{projectData.services.body}</p>
          </section>

          <section className={styles.imageShowcaseGrid}>
            {projectData.showcase.images.map((imageSrc, index) => (
              <div key={index} className={styles.gridItem}>
                <div className={styles.showcaseImageContainer}>
                  <Image
                    src={imageSrc}
                    alt={`Showcase image ${index + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                {index === 2 && (
                  <p className={styles.showcaseText}>
                    {projectData.showcase.text}
                  </p>
                )}
              </div>
            ))}
          </section>
        </div>

        <section className={styles.fullWidthImageSection}>
          <Image
            src={projectData.fullWidthImage}
            alt="Outdoor billboard showcase of the branding"
            fill
            style={{ objectFit: "cover" }}
          />
        </section>
        {/* --- END: Added sections from Branding project --- */}
      </main>

      <Footer />
    </main>
  );
}
