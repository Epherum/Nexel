import React from "react";
import styles from "./Loader.module.css";

const TruckLoader = () => {
  return (
    // The entire animation is handled by this single div and its pseudo-elements in CSS
    <div className={styles.truck}></div>
  );
};

export default TruckLoader;
