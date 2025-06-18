import Image from "next/image";
import styles from "./ProjectsPage.module.scss";

// Sample data for the projects grid. Replace with your actual data.
const projects = [
  {
    id: 1,
    imageUrl: "/static/nexel/test.jpg",
    alt: "E-commerce website on a laptop",
  },
  {
    id: 2,
    imageUrl: "/static/nexel/test.jpg",
    alt: "Matcha drink with custom branding",
  },
  {
    id: 3,
    imageUrl: "/static/nexel/test.jpg",
    alt: "Minimalist mobile app interface",
  },
  {
    id: 4,
    imageUrl: "/static/nexel/test.jpg",
    alt: "Corporate branding materials",
  },
  {
    id: 5,
    imageUrl: "/static/nexel/test.jpg",
    alt: "Educational platform for children",
  },
  {
    id: 6,
    imageUrl: "/static/nexel/test.jpg",
    alt: "Modern restaurant menu design",
  },
  {
    id: 7,
    imageUrl: "/static/nexel/test.jpg",
    alt: "Modern restaurant menu design",
  },
  {
    id: 8,
    imageUrl: "/static/nexel/test.jpg",
    alt: "Modern restaurant menu design",
  },
  {
    id: 9,
    imageUrl: "/static/nexel/test.jpg",
    alt: "Modern restaurant menu design",
  },
  {
    id: 10,
    imageUrl: "/static/nexel/test.jpg",
    alt: "Modern restaurant menu design",
  },
  {
    id: 11,
    imageUrl: "/static/nexel/test.jpg",
    alt: "Modern restaurant menu design",
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <main className={styles.projectsPage}>
      <header className={styles.header}>
        <h1 className={styles.headline}>
          Explore the work that defines our standards and drives{" "}
          <span className={styles.highlight}>real impact.</span>
        </h1>
      </header>

      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <Image
              src={project.imageUrl}
              alt={project.alt}
              fill // Use fill to make the image cover the card
              className={styles.projectImage}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProjectsPage;
