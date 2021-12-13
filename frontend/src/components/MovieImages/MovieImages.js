import React, { useEffect, useState } from "react";
import styles from "./MovieImages.module.css";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Navigation, FreeMode } from "swiper";

const MovieImages = ({ id }) => {
  const [images, setImages] = useState();

  useEffect(() => {
    setImages();
  }, [id]);

  const options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/get-images",
    params: { tconst: id, limit: 25 },
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "c61810c65cmshac8bf485bd410e3p19fd92jsn1e5912056987",
    },
  };

  useEffect(() => {
    setTimeout(() => {
      const getImages = async () => {
        const response = await axios.request(options);
        const imagesList = response.data.images.map((element) => element.url);
        setImages(imagesList);
      };
      getImages();
    }, 1000);
  }, [id]);

  SwiperCore.use([Navigation, FreeMode]);

  if (!images) return "";

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.title}>
          Photos <span className={styles.number}>({images.length})</span>
        </p>
        <Swiper
          slidesPerView={"auto"}
          navigation={true}
          spaceBetween={20}
          freeMode={true}
        >
          {images.map((element) => {
            return (
              <SwiperSlide
                className={styles.imageContainer}
              >
                <img src={element} className={styles.image} alt="movie image" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default MovieImages;
