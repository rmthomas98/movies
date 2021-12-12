import React from "react";
import styles from "./MovieInfo.module.css";
import axios from "axios";
import { StarFill } from "react-bootstrap-icons";

const MovieInfo = ({ id }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Spider Man: No Way Home</p>
      <div className={styles.movieInfoFlexContainer}>
        <img
          src="https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg"
          className={styles.movieImageCover}
        />
        <div className={styles.infoContainer}>
          <div className={styles.ratingDate}>
            <p className={styles.date}>2021</p>
            <p className={styles.certificate}>R</p>
            <p className={styles.runTime}>2hr 22m</p>
            <p className={styles.ratingMarker}>
              9.2{" "}
              <StarFill
                style={{ marginLeft: 5, position: "relative", bottom: 1 }}
                color="#f5c518"
              />
            </p>
          </div>
          <div className={styles.genreTags}>
            <p className={styles.genreTag}>Drama</p>
            <p className={styles.genreTag}>Thriller</p>
            <p className={styles.genreTag}>Action</p>
          </div>

          <p className={styles.description}>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It
          </p>
          <p className={styles.smallTitle}>
            Director <span className={styles.name}>ryan thomas</span>
          </p>
          <p className={styles.smallTitle}>
            Producer <span className={styles.name}>ryan thomas</span>
          </p>
          <div className={styles.watchBtnsContainer}>
            <p className={styles.watchTitle}>Ways to Watch</p>
            <p className={styles.theatersBtn}>IN THEATERS</p>
            <p className={styles.watchBtn}>RENT/BUY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
