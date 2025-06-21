"use client"; // Swiper is a client-side library

import Image from "next/image";
import styles from "./TeamSection.module.scss";

// 1. Import Swiper components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const teamMembers = [
  {
    name: "Mira Tlili",
    role: "Lead UX/UI Designer",
    image: "/static/nexel/test.jpg",
  },
  {
    name: "Haroun Dardour",
    role: "Art Director",
    image: "/static/nexel/test.jpg",
  },
  {
    name: "Wassim Fekih",
    role: "Full-Stack Developer",
    image: "/static/nexel/test.jpg",
  },
  {
    name: "John Doe",
    role: "Project Manager",
    image: "/static/nexel/test.jpg",
  },
  {
    name: "Jane Smith",
    role: "Marketing Lead",
    image: "/static/nexel/test.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className={styles.teamSection}>
      <h2 className={styles.headline}>
        Creative minds. <br /> United with{" "}
        <span className={styles.highlight}>purpose.</span>
      </h2>

      {/* 2. Replace the grid with the Swiper component */}
      <Swiper
        modules={[FreeMode]}
        slidesPerView={"auto"} // Crucial for respecting slide CSS width
        spaceBetween={32} // Gap between slides (2rem)
        freeMode={true} // Allows for free-flowing, non-snapping scroll
        className={styles.teamSlider}
      >
        {teamMembers.map((member, index) => (
          // 3. Each team member is now a SwiperSlide
          <SwiperSlide key={index} className={styles.slide}>
            <div className={styles.teamCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={member.image}
                  alt={`Portrait of ${member.name}`}
                  width={400}
                  height={500}
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardInfo}>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <footer className={styles.contactCta}>
        <p className={styles.ctaLabel}>Drop us a line</p>
        <p className={styles.ctaText}>
          Bring your ideas to life and create cool projects with us.
        </p>
      </footer>
    </section>
  );
};

export default TeamSection;
