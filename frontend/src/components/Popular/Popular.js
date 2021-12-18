import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Popular.module.css";
import SwiperCore, { Navigation, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import SwiperLoader from "../SwiperLoader/SwiperLoader";
import { Link } from "react-router-dom";

const titleOptions = {
  method: "GET",
  url: "https://imdb8.p.rapidapi.com/title/get-most-popular-movies",
  params: { homeCountry: "US", purchaseCountry: "US", currentCountry: "US" },
  headers: {
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    "x-rapidapi-key": "c61810c65cmshac8bf485bd410e3p19fd92jsn1e5912056987",
  },
};

const Popular = ({ width }) => {
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
      console.log(popluarMovieTitles);
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
  SwiperCore.use([Navigation, FreeMode]);

  if (!data) return <SwiperLoader />;

  console.log(width);

  return (
    <div className={styles.container}>
      <p className="sub-header">Most Popular Movies</p>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={width > 500 ? 30 : 15}
        className={styles.swiperContainer}
        navigation={width > 500 ? true : false}
        freeMode={true}
      >
        {data
          ? data.map((element, index) => {
              const { id } = element.title;
              const strippedId = id.split("/")[2];

              return (
                <SwiperSlide
                  className={styles.movieContainer}
                  key={index}
                  virtualIndex={index}
                >
                  <Link
                    to={`movie-viewer/${strippedId}`}
                    state={{ id: strippedId }}
                    className={styles.link}
                  >
                    <img
                      src={element.popularity.image.url}
                      className={styles.image}
                      alt={element.title.title}
                    />
                  </Link>
                </SwiperSlide>
              );
            })
          : ""}
      </Swiper>
    </div>
  );
};

export default Popular;
