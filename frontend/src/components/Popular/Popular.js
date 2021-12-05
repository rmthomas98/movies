import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Popular.module.css";
import SwiperCore, { Navigation, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";

const titleOptions = {
  method: "GET",
  url: "https://imdb8.p.rapidapi.com/title/get-most-popular-movies",
  params: { homeCountry: "US", purchaseCountry: "US", currentCountry: "US" },
  headers: {
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    "x-rapidapi-key": "c61810c65cmshac8bf485bd410e3p19fd92jsn1e5912056987",
  },
};

const Popular = () => {
  const [popularTitles, setPopularTitles] = useState();
  const [data, setData] = useState();

  const imageOptions = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/get-meta-data",
    params: { ids: popularTitles, region: "US" },
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "c61810c65cmshac8bf485bd410e3p19fd92jsn1e5912056987",
    },
  };

  useEffect(() => {
    const getPopularMovies = async () => {
      const response = await axios.request(titleOptions);
      const popluarMovieTitles = response.data.map(
        (element) => element.split("/")[2]
      );
      setPopularTitles(popluarMovieTitles.splice(0, 30).join("&ids="));
    };
    getPopularMovies();
  }, []);

  useEffect(() => {
    if (!popularTitles) return;
    const getPopularImages = async () => {
      const reponse = await axios.request(imageOptions);
      setData(Object.values(reponse.data));
    };
    getPopularImages();
  }, [popularTitles]);

  console.log(data);
  SwiperCore.use([Navigation]);

  return (
    <div className={styles.container}>
      <p className="sub-header">Most Popular Movies</p>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={50}
        className={styles.swiperContainer}
        navigation={true}
      >
        {data
          ? data.map((element, index) => {
              return (
                <SwiperSlide
                  className={styles.movieContainer}
                  key={index}
                  virtualIndex={index}
                >
                  <img
                    src={element.popularity.image.url}
                    className={styles.image}
                    alt="movie cover"
                  />
                </SwiperSlide>
              );
            })
          : ""}
      </Swiper>
    </div>
  );
};

export default Popular;
