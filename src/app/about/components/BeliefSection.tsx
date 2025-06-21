// BeliefSection.jsx
import styles from "./BeliefSection.module.scss";

const BeliefSection = () => {
  return (
    <section className={styles.beliefSection}>
      {/* 1. The element to be floated comes FIRST in the source code. */}
      <p className={styles.description}>
        We stay creative by embracing new challenges. Each project, client, and
        team is one of a kind.
      </p>

      {/* 2. This headline will now wrap around the floated description. */}
      <h2 className={styles.headline}>
        We believe design works best when it's thoughtful, brave, and
        well-rooted
      </h2>
    </section>
  );
};

export default BeliefSection;
