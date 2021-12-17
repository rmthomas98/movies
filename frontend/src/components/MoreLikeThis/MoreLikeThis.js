import React, { useEffect, useState } from "react";
import styles from "./MoreLikeThis.module.css";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Navigation, FreeMode } from "swiper";
import { Link } from "react-router-dom";
import SwiperLoader from '../SwiperLoader/SwiperLoader'
import MoreLikeThisLoader from "../MoreLikeThisLoader/MoreLikeThisLoader";

const MoreLikeThis = ({ id }) => {
  const [ids, setIds] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    setIds();
    setData();
  }, [id]);

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
    setTimeout(() => {
      const getIds = async () => {
        const response = await axios.request(idOptions);
        const idList = response.data.map((element) => element.split("/")[2]);
        console.log(idList);
        setIds(idList.join("&ids="));
      };
      getIds();
    }, 4000);
  }, [id]);

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

  if (!data) return <MoreLikeThisLoader />

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.title}>More Like This</p>
        <Swiper
          navigation={true}
          slidesPerView={"auto"}
          spaceBetween={30}
          freeMode={true}
        >
          {data.map((element) => {
            if (
              element.title.numberOfEpisodes ||
              !element.title.image ||
              element.title.titleType === "short" ||
              element.title.titleType === "video" ||
              !element.title.runningTimeInMinutes
            )
              return "";
            return (
              <SwiperSlide className={styles.movieContainer}>
                <Link
                  to={`/movie-viewer/${element.title.id.split("/")[2]}`}
                  state={{ id: element.title.id.split("/")[2] }}
                  className={styles.link}
                >
                  <img
                    src={element.popularity.image?.url}
                    className={styles.image}
                    alt={element.title.title}
                  />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default MoreLikeThis;
