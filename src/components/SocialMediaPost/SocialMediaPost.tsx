//src/components/SocialMediaPost/SocialMediaPost.tsx
import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./SocialMediaPost.module.css"; // UPDATED

// Define the props the component will accept
interface SocialMediaPostProps {
  profileIcon: StaticImageData;
  name: string;
  image: StaticImageData;
  altText: string;
}

const SocialMediaPost: React.FC<SocialMediaPostProps> = ({
  profileIcon,
  name,
  image,
  altText,
}) => {
  return (
    <div className={styles.postContainer}>
      {/* Post Header */}
      {/* <div className={styles.postHeader}>
        <div className={styles.profileInfo}>
          <Image
            src={profileIcon}
            alt={`${name} profile icon`}
            className={styles.profileIcon}
            width={20}
            height={20}
          />
          <span className={styles.profileName}>{name}</span>
        </div>
        <svg
          aria-label="More options"
          className={styles.moreOptions}
          fill="currentColor"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <circle cx="12" cy="12" r="1.5"></circle>
          <circle cx="6" cy="12" r="1.5"></circle>
          <circle cx="18" cy="12" r="1.5"></circle>
        </svg>
      </div> */}

      {/* Main Image */}
      <div className={styles.imageWrapper}>
        <Image src={image} alt={altText} layout="responsive" />
      </div>

      {/* Post Footer */}
      {/* <div className={styles.postFooter}>
        <div className={styles.actionsLeft}>
          <svg
            aria-label="Like"
            fill="#ff0000"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-6.03 8.318-3.378 3.359-4.584 4.28-5.968 4.28a2.35 2.35 0 0 1-1.888-.883l-.003-.004a3.349 3.349 0 0 1-.582-2.339.95.95 0 0 1 .199-.504 6.272 6.272 0 0 0 .957-2.928A5.539 5.539 0 0 0 3.12 6.122a4.989 4.989 0 0 1 4.7-5.214A4.989 4.989 0 0 1 12 3.904a4.989 4.989 0 0 1 4.792 0z"></path>
          </svg>
          <svg
            aria-label="Comment"
            fill="currentColor"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </svg>
          <svg
            aria-label="Share Post"
            fill="currentColor"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <line
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="22"
              x2="9.218"
              y1="3"
              y2="10.083"
            ></line>
            <polygon
              fill="none"
              points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="2"
            ></polygon>
          </svg>
        </div>
        <div className={styles.actionsRight}>
          <svg
            aria-label="Save"
            fill="currentColor"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <polygon
              fill="none"
              points="20 21 12 13.44 4 21 4 3 20 3 20 21"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></polygon>
          </svg>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default SocialMediaPost;
