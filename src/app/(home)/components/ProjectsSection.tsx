// src/components/ProjectsSection.tsx

import React from "react";
import Image from "next/image";
import styles from "./ProjectsSection.module.scss";
import Link from "next/link";

// Define our project data
const projects = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
];

const ProjectsSection = () => {
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.mainTitle}>Projects Built to Last</h2>

      <div className={styles.contentWrapper}>
        {/* Left Column (Sticky) */}
        <div className={styles.leftColumn}>
          <div
            className={styles.stickyContent}
            data-scroll
            data-scroll-sticky
            data-scroll-target="#projects-grid"
          >
            <p className={styles.subHeader}>SUCCESS STORIES</p>
            <h3 className={styles.headline}>
              <span className={styles.highlight}>Built</span> to Inspire
            </h3>
            <p className={styles.description}>
              Every case study represents a challenge met, a standard raised,
              and a client empowered. See how we turn vision into results that
              speak for themselves.
            </p>
          </div>
          <Link href={"/projects"} className={styles.viewAllButton}>
            View all projects
          </Link>
        </div>

        {/* Right Column (Scrollable Grid) */}
        <div
          className={styles.rightColumn}
          id="projects-grid" // The target ID for the sticky element
        >
          {projects.map((project, index) => (
            <div key={project.id} className={styles.projectCard}>
              {/* Using the test.jpg from the public folder */}
              <Image
                src="/static/nexel/test.jpg"
                alt={`Project ${index + 1}`}
                width={500} // Base width for aspect ratio
                height={600} // Base height
                className={styles.projectImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
