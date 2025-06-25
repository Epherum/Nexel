// components/FullscreenImageSection.jsx

import Image from "next/image";
import styles from "./AboutImage.module.scss";

// The component now uses the next/image component for optimal performance.
const AboutImage = ({ imageSrc, altText }: any) => {
  return (
    <section className={styles.fullscreenSection}>
      <Image
        src={imageSrc}
        alt={altText}
        className={styles.fullscreenImage}
        // The `fill` prop makes the image fill its parent container.
        // This requires the parent container to have `position: relative`.
        fill
        // `sizes="100vw"` tells Next.js that the image will be 100% of the viewport width.
        // This helps it choose the right image size to serve.
        sizes="100vw"
        // If this image is "above the fold" (visible on initial page load),
        // the `priority` prop tells Next.js to load it immediately for better LCP.
        priority
        data-scroll
        data-scroll-speed="-0.1"
      />
    </section>
  );
};

export default AboutImage;
