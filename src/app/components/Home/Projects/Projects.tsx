import React from "react";
import styles from "./projects.module.scss";

function Projects() {
  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.featured}>
          Featured Wo<span>r</span>ks
        </h2>
      </div>
    </section>
  );
}

export default Projects;
