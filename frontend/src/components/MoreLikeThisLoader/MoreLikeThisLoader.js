import React from "react";
import styles from "./MoreLikeThisLoader.module.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import SwiperCore, { Navigation, FreeMode } from "swiper";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";

const MoreLikeThisLoader = ({ width }) => {
  SwiperCore.use([Navigation, FreeMode]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.title}>More Like This</p>
        <Swiper
          navigation={width > 700 ? true : false}
          freeMode={true}
          slidesPerView={"auto"}
          j
          spaceBetween={width > 500 ? 30 : 15}
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
        </Swiper>
      </div>
    </div>
  );
};

export default MoreLikeThisLoader;
