import React from "react";
import styles from "./MovieVideoLoader.module.css";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const MovieVideoLoader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.title}>Watch the Official Trailer</p>
        <div className={styles.flexContainer}>
          <div className={styles.videoTrailer}>
            {" "}
            <Loader
              className={styles.loader}
              type="Oval"
              color="#ea384d"
              height={50}
              width={50}
            />
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.infoTitle}></div>
            <div className={styles.officialTrailer}></div>
            <div className={styles.description}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieVideoLoader;
