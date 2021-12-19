import React from "react";
import styles from "./MovieInfoLoader.module.css";

const MovieInfoLoader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}></div>
        <div className={styles.flexContainer}>
          <div className={styles.imgContainer}></div>
          <div className={styles.infoContainer}>
            <div className={styles.mobileTitle}></div>
            <div className={styles.smallFlexContainer}>
              <div className={styles.info}></div>
              <div className={styles.info}></div>
              <div className={styles.info}></div>
            </div>
            <div
              className={`${styles.smallFlexContainer} ${styles.borderBottom}`}
            >
              <div className={styles.genre}></div>
              <div className={styles.genre}></div>
              <div className={styles.genre}></div>
            </div>
            <div className={styles.description}></div>
            <div className={styles.director}></div>
            <div className={styles.starringContainer}>
              <div className={styles.starring}></div>
              <div className={styles.name}></div>
              <div className={styles.name}></div>
              <div className={styles.name}></div>
            </div>
            <div className={styles.waysToWatchContainer}>
              <div className={styles.waysToWatch}></div>
              <div className={styles.wayToWatch}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfoLoader;
