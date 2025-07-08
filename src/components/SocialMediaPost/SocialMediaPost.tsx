// src/components/SocialMediaPost/SocialMediaPost.tsx

import React from "react";
import { StaticImageData } from "next/image";
import Image from "@/components/animation/ParallaxImage"; // This is your existing custom Image component
import styles from "./SocialMediaPost.module.css";

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
      <div className={styles.postHeader}>
        <div className={styles.profileInfo}>
          {/* Unchanged */}
          <Image
            src={profileIcon}
            alt={`${name} profile icon`}
            className={styles.profileIcon}
            width={30}
            height={30}
          />
          <span className={styles.profileName}>{name}</span>
        </div>
        {/* --- CHANGED: More options SVG replaced with Image --- */}
        <Image
          src="/static/icons/options.svg"
          alt="More options"
          width={20}
          height={20}
          className={styles.actionIcon}
        />
      </div>

      {/* Main Image (Unchanged) */}
      <div className={styles.imageWrapper}>
        <Image src={image} alt={altText} layout="responsive" />
      </div>

      {/* Post Footer */}
      <div className={styles.postFooter}>
        <div className={styles.actionsLeft}>
          {/* --- CHANGED: Like SVG replaced with Image --- */}
          <Image
            src="/static/icons/like.svg"
            alt="Like"
            width={24}
            height={24}
            className={styles.actionIcon}
          />
          {/* --- CHANGED: Comment SVG replaced with Image --- */}
          <Image
            src="/static/icons/comment.svg"
            alt="Comment"
            width={24}
            height={24}
            className={styles.actionIcon}
          />
          {/* --- CHANGED: Share Post SVG replaced with Image --- */}
          <Image
            src="/static/icons/share.svg"
            alt="Share post"
            width={24}
            height={24}
            className={styles.actionIcon}
          />
        </div>
        <div className={styles.actionsRight}>
          {/* --- CHANGED: Save SVG replaced with Image --- */}
          <Image
            src="/static/icons/save.svg"
            alt="Save post"
            width={24}
            height={24}
            className={styles.actionIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default SocialMediaPost;
