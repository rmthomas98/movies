import React from "react";
import styles from "./SwiperLoader.module.css";
import SwiperCore, { Navigation, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";

const SwiperLoader = ({ width }) => {

  SwiperCore.use([Navigation, FreeMode]);

  return (
    <div className={styles.container}>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={width > 500 ? 30 : 15}
        className={styles.swiperContainer}
        navigation={width > 700 ? true : false}
        freeMode={true}
      >
        <SwiperSlide className={styles.movieContainer}></SwiperSlide>
        <SwiperSlide className={styles.movieContainer}></SwiperSlide>
        <SwiperSlide className={styles.movieContainer}></SwiperSlide>
        <SwiperSlide className={styles.movieContainer}></SwiperSlide>
        <SwiperSlide className={styles.movieContainer}></SwiperSlide>
        <SwiperSlide className={styles.movieContainer}></SwiperSlide>
        <SwiperSlide className={styles.movieContainer}></SwiperSlide>
        <SwiperSlide className={styles.movieContainer}></SwiperSlide>
        <SwiperSlide className={styles.movieContainer}></SwiperSlide>
        <SwiperSlide className={styles.movieContainer}></SwiperSlide>
        <SwiperSlide className={styles.movieContainer}></SwiperSlide>
        <SwiperSlide className={styles.movieContainer}></SwiperSlide>
        <SwiperSlide className={styles.movieContainer}></SwiperSlide>
        <SwiperSlide className={styles.movieContainer}></SwiperSlide>
        <SwiperSlide className={styles.movieContainer}></SwiperSlide>
        <SwiperSlide className={styles.movieContainer}></SwiperSlide>
        <SwiperSlide className={styles.movieContainer}></SwiperSlide>
        <SwiperSlide className={styles.movieContainer}></SwiperSlide>
        <SwiperSlide className={styles.movieContainer}></SwiperSlide>
        <SwiperSlide className={styles.movieContainer}></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperLoader;
