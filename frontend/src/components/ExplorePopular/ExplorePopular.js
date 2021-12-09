import React, { useEffect, useState } from "react";
import styles from "./ExplorePopular.module.css";
import axios from "axios";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const titleOptions = {
  method: "GET",
  url: "https://imdb8.p.rapidapi.com/title/get-most-popular-movies",
  params: { homeCountry: "US", purchaseCountry: "US", currentCountry: "US" },
  headers: {
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    "x-rapidapi-key": "c61810c65cmshac8bf485bd410e3p19fd92jsn1e5912056987",
  },
};

const ExplorePopular = () => {
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
    window.scrollTo(0,0)
  },[])

  useEffect(() => {
    const getPopularMovies = async () => {
      const response = await axios.request(titleOptions);
      const popluarMovieTitles = response.data.map(
        (element) => element.split("/")[2]
      );
      setPopularTitles(popluarMovieTitles.splice(0, 50).join("&ids="));
      console.log(popluarMovieTitles);
    };
    getPopularMovies();
  }, []);

  useEffect(() => {
    if (!popularTitles) return;
    const getPopularImages = async () => {
      const response = await axios.request(imageOptions);
      setData(Object.values(response.data));
    };
    getPopularImages();
  }, [popularTitles]);

  if (!data) {
    return (
      <div className={styles.loaderContainer}>
      <Loader
      className={styles.loader}
      type="Puff"
      color="#ea384d"
      height={75}
      width={75}
    />
    </div>
    )
  }

  return (
    <div className={styles.container}>
      {data
        ? data.map((element) => {
            return (
              <div className={styles.movieContainer}>
                <img
                  src={element.popularity.image.url}
                  className={styles.image}
                  alt="movie cover"
                />
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default ExplorePopular;
