import React, { useEffect, useState } from "react";
import styles from "./MoreLikeThis.module.css";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Navigation, FreeMode } from "swiper";
import { Link } from "react-router-dom";
import MoreLikeThisLoader from "../MoreLikeThisLoader/MoreLikeThisLoader";
import LazyLoad from "react-lazyload";

const MoreLikeThis = ({ id, width }) => {
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
        setIds(idList.join("&ids="));
      };
      getIds();
    }, 4000);
  }, [id]);

  useEffect(() => {
    if (!ids) return;
    const getMetaData = async () => {
      const response = await axios.request(metaOptions);
      setData(Object.values(response.data));
    };
    getMetaData();
  }, [ids]);

  SwiperCore.use([Navigation, FreeMode]);

  if (!data) return <MoreLikeThisLoader width={width} />;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.title}>More Like This</p>
        <Swiper
          navigation={width > 700 ? true : false}
          slidesPerView={"auto"}
          spaceBetween={width > 500 ? 30 : 15}
          freeMode={true}
        >
          {data.map((element, index) => {
            if (
              element.title.numberOfEpisodes ||
              !element.title.image ||
              element.title.titleType === "short" ||
              element.title.titleType === "video" ||
              !element.title.runningTimeInMinutes
            )
              return "";
            return (
              <SwiperSlide className={styles.movieContainer} key={index}>
                <Link
                  to={`/movie-viewer/${element.title.id.split("/")[2]}`}
                  state={{ id: element.title.id.split("/")[2] }}
                  className={styles.link}
                >
                  <LazyLoad>
                    <img
                      src={element.popularity.image?.url}
                      className={styles.image}
                      alt={element.title.title}
                    />
                  </LazyLoad>
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
