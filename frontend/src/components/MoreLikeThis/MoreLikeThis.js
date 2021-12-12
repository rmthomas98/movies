import React, { useEffect, useState } from "react";
import styles from "./MoreLikeThis.module.css";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Navigation, FreeMode } from "swiper";

const MoreLikeThis = ({ id }) => {
  const [ids, setIds] = useState();
  const [data, setData] = useState();

  const idOptions = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/get-more-like-this",
    params: {
      tconst: id,
      currentCountry: "US",
      purchaseCountry: "US",
    },
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "c61810c65cmshac8bf485bd410e3p19fd92jsn1e5912056987",
    },
  };

  const metaOptions = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/get-meta-data",
    params: { ids: ids, region: "US" },
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "c61810c65cmshac8bf485bd410e3p19fd92jsn1e5912056987",
    },
  };

  useEffect(() => {
    const getIds = async () => {
      const response = await axios.request(idOptions);
      const idList = response.data.map((element) => element.split("/")[2]);
      console.log(idList);
      setIds(idList.join("&ids="));
    };
    getIds();
  }, []);

  useEffect(() => {
    if (!ids) return;
    const getMetaData = async () => {
      const response = await axios.request(metaOptions);
      console.log(response.data);
      setData(Object.values(response.data));
    };
    getMetaData();
  }, [ids]);

  SwiperCore.use([Navigation, FreeMode]);

  console.log(data);

  if (!data) return "";

  return (
    <div className={styles.container}>
      <p className={styles.title}>More Like This</p>
      <Swiper
        navigation={true}
        slidesPerView={"auto"}
        spaceBetween={40}
        freeMode={true}
      >
        {data.map((element) => {
          return (
            <SwiperSlide className={styles.movieContainer}>
              <img
                src={element.popularity.image.url}
                className={styles.image}
                alt="movie cover"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MoreLikeThis;
