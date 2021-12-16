import React from "react";
import styles from "./MovieImagesLoader.module.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Navigation, FreeMode } from "swiper";

const MovieImagesLoader = () => {
  SwiperCore.use([Navigation, FreeMode]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.title}>Photos</p>
        <Swiper
          slidesPerView={"auto"}
          navigation={true}
          spaceBetween={20}
          freeMode={true}
        >
          <SwiperSlide className={styles.imageContainer}></SwiperSlide>
          <SwiperSlide className={styles.imageContainer}></SwiperSlide>
          <SwiperSlide className={styles.imageContainer}></SwiperSlide>
          <SwiperSlide className={styles.imageContainer}></SwiperSlide>
          <SwiperSlide className={styles.imageContainer}></SwiperSlide>
          <SwiperSlide className={styles.imageContainer}></SwiperSlide>
          <SwiperSlide className={styles.imageContainer}></SwiperSlide>
          <SwiperSlide className={styles.imageContainer}></SwiperSlide>
          <SwiperSlide className={styles.imageContainer}></SwiperSlide>
          <SwiperSlide className={styles.imageContainer}></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MovieImagesLoader;
