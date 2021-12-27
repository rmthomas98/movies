import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./PictureWinners.module.css";
import SwiperCore, { Navigation, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import SwiperLoader from "../SwiperLoader/SwiperLoader";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

const options = {
  method: "GET",
  url: "https://imdb8.p.rapidapi.com/title/get-best-picture-winners",
  headers: {
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    "x-rapidapi-key": "c61810c65cmshac8bf485bd410e3p19fd92jsn1e5912056987",
  },
};

const PictureWinner = ({ width }) => {
  const [ids, setIds] = useState();
  const [data, setData] = useState();

  const metaDataOptions = {
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
        const response = await axios.request(options);
        const idsList = response.data.slice(0, 30).map((element) => {
          return element.split("/")[2];
        });
        setIds(idsList.join("&ids="));
      };
      getIds();
    }, 1000);
  }, []);

  useEffect(() => {
    if (!ids) return;
    const getMetaData = async () => {
      const response = await axios.request(metaDataOptions);
      const dataList = Object.values(response.data).map((element) => {
        return [
          element.popularity.image.url,
          element.title.id.split("/")[2],
          element.title.title,
        ];
      });
      setData(dataList);
    };
    getMetaData();
  }, [ids]);

  SwiperCore.use([Navigation, FreeMode]);

  if (!data) return <SwiperLoader width={width} />;

  return (
    <div className={styles.container}>
      <p className="sub-header">Best Picture Winners</p>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={width > 500 ? 30 : 15}
        navigation={width > 700 ? true : false}
        freeMode={true}
      >
        {data
          ? data.map((element, index) => {
              return (
                <SwiperSlide className={styles.movieContainer} key={index}>
                  <Link
                    to={`movie-viewer/${element[1]}`}
                    state={{ id: element[1] }}
                    className={styles.link}
                  >
                    <LazyLoad>
                      <img
                        src={element[0]}
                        className={styles.image}
                        alt={element[2]}
                      />
                    </LazyLoad>
                  </Link>
                </SwiperSlide>
              );
            })
          : ""}
      </Swiper>
    </div>
  );
};

export default PictureWinner;
