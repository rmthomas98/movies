import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./ShowCase.module.css";
import SwiperCore, { Navigation, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import { Link } from "react-router-dom";

const ShowCase = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Planning a Movie Night?</p>
      <p className={styles.description}>
        Find the perfect movie for any occasion. Look through different genres,
        read reviews, see what the most popular movies are, and much more.
      </p>
      <Link to="/explore" className={styles.btn}>
        Explore Movies
      </Link>
    </div>
  );
};

export default ShowCase;
