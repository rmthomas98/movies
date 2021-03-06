import React, { useEffect, useRef, useState } from "react";
import styles from "./ExploreComingSoon.module.css";
import axios from "axios";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

const options = {
  method: "GET",
  url: "https://imdb8.p.rapidapi.com/title/get-coming-soon-movies",
  params: { homeCountry: "US", purchaseCountry: "US", currentCountry: "US" },
  headers: {
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    "x-rapidapi-key": "c61810c65cmshac8bf485bd410e3p19fd92jsn1e5912056987",
  },
};

const ExploreComingSoon = () => {
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
    window.scrollTo(0, 0);
    document.title = "Movies Coming Soon";
  }, []);

  useEffect(() => {
    const getIds = async () => {
      const response = await axios.request(options);
      const idsList = response.data.slice(0, 50).map((element) => {
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
      const metaList = Object.values(response.data).map((element) => {
        return [
          element.popularity.image?.url,
          element.title.title,
          element.title.id.split("/")[2],
        ];
      });
      setData(metaList);
    };
    getMetaData();
  }, [ids]);

  if (!data) {
    return (
      <div className={styles.loaderContainer}>
        <Loader
          className={styles.loader}
          type="Oval"
          color="#ea384d"
          height={60}
          width={60}
        />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <p className={styles.title}>Coming Soon</p>
      {data
        ? data.map((element, index) => {
            return (
              <div className={styles.movieContainer} key={index}>
                <Link
                  to={`/movie-viewer/${element[2]}`}
                  state={{ id: element[2] }}
                  className={styles.link}
                >
                  <LazyLoad >
                    <img
                      src={element[0]}
                      className={styles.image}
                      alt={element[1]}
                    />
                  </LazyLoad>
                </Link>
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default ExploreComingSoon;
