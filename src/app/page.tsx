"use client";
import { useEffect } from "react";
import Hero from "./components/Home/Hero/Hero";
import About from "./components/Home/About/About";
import Projects from "./components/Home/Projects/Projects";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

//  .slidingImages {
//     padding-bottom: 3rem;
//     display: flex;
//     flex-direction: column;
//     position: relative;
//     z-index: 1;
//     .slider {
//       background-color: #26272b;
//       display: flex;
//       position: relative;
//       gap: 3vw;
//       width: 110vw;
//       left: -10vw;
//       .project {
//         position: relative;
//         width: 33vw;
//         height: 33vw;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         border-radius: 20px;
//         .imageContainer {
//           position: relative;
//           width: 100%;
//           height: 100%;

//           img {
//             object-fit: contain;
//             transition: border-radius 0.3s ease-out;
//           }
//         }
//         &:hover {
//           img {
//             border-radius: 50%;
//           }
//         }
//       }
//     }
