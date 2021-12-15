import React from "react";
import styles from "./SwiperLoader.module.css";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";

const SwiperLoader = () => {
  return (
    <div className={styles.container}>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        className={styles.swiperContainer}
        navigation={true}
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
