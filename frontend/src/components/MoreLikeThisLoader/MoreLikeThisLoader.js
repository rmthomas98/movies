import React from 'react';
import styles from './MoreLikeThisLoader.module.css';
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import SwiperCore, { Navigation, FreeMode } from "swiper";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";

const MoreLikeThisLoader = () => {

  SwiperCore.use([Navigation, FreeMode]);

  return <div className={styles.wrapper}>
    <div className={styles.container}>
    <p className={styles.title}>More Like This</p>
      <Swiper navigation={true} freeMode={true} slidesPerView={'auto'}j spaceBetween={30}>
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
}

export default MoreLikeThisLoader;