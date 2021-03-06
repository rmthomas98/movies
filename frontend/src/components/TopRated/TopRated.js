import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./TopRated.module.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import SwiperLoader from "../SwiperLoader/SwiperLoader";
import { Link } from "react-router-dom";

const options = {
  method: "GET",
  url: "https://imdb8.p.rapidapi.com/title/get-top-rated-movies",
  headers: {
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    "x-rapidapi-key": "c61810c65cmshac8bf485bd410e3p19fd92jsn1e5912056987",
  },
};

const TopRated = ({ width }) => {
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
    const getIds = async () => {
      const response = await axios.request(options);
      const idsList = response.data.slice(0, 30).map((element) => {
        return element.id.split("/")[2];
      });
      setIds(idsList.join("&ids="));
    };
    getIds();
  }, []);

  useEffect(() => {
    if (!ids) return;
    const getMetaData = async () => {
      const response = await axios.request(metaDataOptions);
      const dataList = Object.values(response.data).map((element) => {
        return [
          element.ratings.rating,
          element.popularity.image.url,
          element.title.id.split("/")[2],
          element.title.title,
        ];
      });
      setData(dataList);
    };
    getMetaData();
  }, [ids]);

  //loader component
  if (!data) return <SwiperLoader />;

  return (
    <div className={styles.container}>
      <p className="sub-header">Top Rated Movies</p>
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
                    to={`movie-viewer/${element[2]}`}
                    state={{ id: element[2] }}
                    className={styles.link}
                  >
                      <img
                        src={element[1]}
                        className={styles.image}
                        alt={element[3]}
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

export default TopRated;
