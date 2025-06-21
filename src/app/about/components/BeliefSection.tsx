import styles from "./BeliefSection.module.scss";

const BeliefSection = () => {
  return (
    <section className={styles.beliefSection}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.headline}>
          We believe design works best when it&apos;s thoughtful, brave, and
          well-rooted
        </h2>
        <p className={styles.description}>
          We stay creative by embracing new challenges. Each project, client,
          and team is one of a kind.
        </p>
      </div>
    </section>
  );
};

export default BeliefSection;
