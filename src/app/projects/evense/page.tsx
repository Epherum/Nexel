"use client";
import React from "react";
import styles from "./evense.module.scss";
import Footer from "@/app/components/layout/Footer";
import { useRef } from "react";
import { useScroll, useTransform, motion, easeOut } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import evense1 from "/public/static/evense/evense-1.webp";
import evensePhone from "/public/static/evense/evense-phone.webp";
import evenseFlow from "/public/static/evense/evense-flow.webp";
import evenseDe from "/public/static/evense/evense-de.webp";
import evenseHomePage from "/public/static/evense/evense-homePage.webp";
import evenseHomePageMobile1 from "/public/static/evense/evense-homePageMobile1.webp";
import evenseHomePageMobile2 from "/public/static/evense/evense-homePageMobile2.webp";
import evenseHomePageMobile3 from "/public/static/evense/evense-homePageMobile3.webp";
import evenseHomePageGreen from "/public/static/evense/evense-homePageGreen.webp";
import evenseHomePageYellow from "/public/static/evense/evense-homePageYellow.webp";
import evenseHomePageBlue from "/public/static/evense/evense-homePageBlue.webp";
import evenseHomePageRed from "/public/static/evense/evense-homePageRed.webp";
import evenseInPerson from "/public/static/evense/evense-inPerson.webp";
import evenseDigital from "/public/static/evense/evense-digital.webp";
import evenseHybrid from "/public/static/evense/evense-hybrid.webp";
import evenseVid1 from "/public/static/evense/evense-vid1.webp";
import evenseVid2 from "/public/static/evense/evense-vid2.webp";
import evenseVid3 from "/public/static/evense/evense-vid3.webp";
import evenseLast from "/public/static/evense/evense-last.webp";

export default function Page() {
  const sectionRef = useRef(null);

  const { scrollYProgress: sectionScrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["end 100vh", "end 0vh"],
  });

  const scale = useTransform(sectionScrollYProgress, [0, 0.9], [1, 0.85]);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [sectionMiddle, setSectionMiddle] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      // @ts-ignore
      const sectionOffsetTop = sectionRef.current.offsetTop;
      const sectionMiddle =
        // @ts-ignore i love typescript
        sectionOffsetTop + sectionRef.current.offsetHeight / 2;
      setScrollPosition(scrollPosition);
      setSectionMiddle(sectionMiddle);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > sectionMiddle) {
      document.body.style.background = "#18181b";
    } else {
      document.body.style.background = "white";
    }
    return () => {
      document.body.style.background = "white";
    };
  }, [scrollPosition, sectionRef]);
  return (
    <>
      <section className={styles.first}>
        <div data-scroll data-scroll-speed="-0.1">
          <div className={styles.image}>
            <Image src={evense1} alt="" priority />
            <div className={styles.logo}>
              <img src="/static/evense/evense-logo.svg" alt="" />
            </div>
          </div>
        </div>
        <div className={styles.firstColor} />
      </section>
      <section className={styles.introduction}>
        <div className={styles.container}>
          <div className={styles.imageLeft}>
            <img src="/static/evense/evense-logoBlack.svg" alt="" />
          </div>
          <p className={styles.textRight}>
            The logo design was crafted with a deliberate focus on achieving a
            balance between minimalism and professionalism, while infusing a
            modern sensibility. Emphasizing simplicity and sophistication, each
            element was carefully selected and refined to convey the
            brand&apos;s identity succinctly.
          </p>
          <div className={styles.videoLeft}>
            <video src="/static/evense/evense-introVid.mp4" autoPlay loop />
          </div>
          <div className={styles.contentRight}>
            <p>
              The logo design was crafted with a deliberate focus on achieving a
              balance between minimalism and professionalism, while infusing a
              modern sensibility. Emphasizing simplicity and sophistication,
              each element was carefully selected and refined to convey the
              brand&apos;s identity succinctly.
            </p>
            <div className={styles.image}>
              <Image src={evensePhone} alt="" />
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
                  Comprehensive research and data collection, providing a solid
                  informational foundation for the project.
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
                  solidifying the project&apos;s design foundation.
                </p>
              </div>
            </div>
            <div className={styles.row}>
              <p className={styles.number}>4</p>
              <div className={styles.content}>
                <p className={styles.title}>Testing and Feedback </p>
                <p className={styles.text}>
                  Testing of the design and collection of valuable feedback for
                  future enhancements.
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
            the client&apos;s preferences with my design expertise to ensure a
            vibrant and cohesive aesthetic. Each color was selected
            thoughtfully, aiming to resonate with the target audience while
            maintaining the brand&apos;s identity.
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
                This font was chosen to complement the overall design aesthetic.
                Its clean lines and modern appearance align perfectly with the
                minimalistic yet vibrant approach of the project.
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
            enhances the visual appeal of the project but also contributes to a
            seamless user experience, reinforcing the brand&apos;s identity
            across various digital platforms.
          </p>
        </div>
        <img
          className={styles.pink}
          src="/static/evense/evense-pink.svg"
          alt=""
        />
        <img
          className={styles.yellow}
          src="/static/evense/evense-yellow.svg"
          alt=""
        />
        <img
          className={styles.blue}
          src="/static/evense/evense-blue.svg"
          alt=""
        />
        {/* <img className={styles.green} src="/static/evense/evense-green.svg" alt="" /> */}
      </section>
      <section className={styles.userFlow}>
        <div className={styles.container}>
          <h2 className={styles.text}>User Flow</h2>
          <div className={styles.flow}>
            <Image src={evenseFlow} alt="" />
          </div>
        </div>
      </section>
      <section className={styles.digitalEvents}>
        <div data-scroll data-scroll-speed="-0.1" className={styles.image}>
          <Image src={evenseDe} alt="" />
        </div>
      </section>
      <section className={styles.homePage}>
        <div className={styles.color} />
        <div className={styles.mainImage}>
          <Image src={evenseHomePage} alt="" />
          <motion.div>
            <motion.div
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-300px" }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: easeOut }}
              className={styles.mobile1}
            >
              <Image
                data-scroll
                data-scroll-speed="-0.05"
                src={evenseHomePageMobile1}
                alt=""
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-300px" }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: easeOut }}
              className={styles.mobile2}
            >
              <Image
                data-scroll
                data-scroll-speed="-0.05"
                src={evenseHomePageMobile2}
                alt=""
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-300px" }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: easeOut }}
              className={styles.mobile3}
            >
              <Image
                data-scroll
                data-scroll-speed="-0.1"
                src={evenseHomePageMobile3}
                alt=""
              />
            </motion.div>
          </motion.div>
        </div>
        <Image className={styles.green} src={evenseHomePageGreen} alt="" />
        <Image className={styles.yellow} src={evenseHomePageYellow} alt="" />
        <Image className={styles.blue} src={evenseHomePageBlue} alt="" />
        <Image className={styles.red} src={evenseHomePageRed} alt="" />
      </section>
      <section className={styles.services}>
        <div className={styles.text}>
          <h2>
            Services <br /> <span>pages</span>{" "}
          </h2>
          <p>
            Careful attention was paid to font sizes and spacing to ensure
            optimal readability and usability, adhering to established web
            design principles and preferences. This deliberate choice not only
            enhances the visual appeal of the project but also contributes to a
            seamless user experience, reinforcing the brand&apos;s identity
            across various digital platforms. <br /> <br />
            the project but also contributes to a seamless user experience,
            reinforcing the brand&apos;s identity across various digital
            platforms
          </p>
        </div>
        <div className={styles.typesOfServices}>
          <div className={styles.inPerson}>
            <p>In person</p>
            <Image src={evenseInPerson} alt="" />
            <img
              className={styles.ellipse1}
              src="/static/evense/evense-ellipse.svg"
              alt=""
            />
          </div>
          <div className={styles.digital}>
            <p>Digital</p>
            <Image src={evenseDigital} alt="" />
            <img
              className={styles.ellipse2}
              src="/static/evense/evense-ellipse.svg"
              alt=""
            />
          </div>
          <div className={styles.hybrid}>
            <p>Hybrid</p>
            <Image src={evenseHybrid} alt="" />
            <img
              className={styles.ellipse3}
              src="/static/evense/evense-ellipse.svg"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className={styles.interactive}>
        <h2 className={styles.title}>
          Interactive <br /> <span>design</span>{" "}
        </h2>
        <div className={styles.vids}>
          <div>
            <Image src={evenseVid1} alt="" />
          </div>
          <div>
            <Image src={evenseVid2} alt="" />
          </div>
          <div>
            <Image src={evenseVid3} alt="" />
          </div>
        </div>
      </section>
      <motion.section
        style={{ scale }}
        ref={sectionRef}
        className={styles.last}
      >
        <div>
          <Image src={evenseLast} alt="" />
        </div>
      </motion.section>

      <Footer />
    </>
  );
}
