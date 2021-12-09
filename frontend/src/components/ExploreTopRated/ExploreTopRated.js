import React, { useEffect, useState } from "react";
import styles from "./ExploreTopRated.module.css";
import axios from "axios";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const options = {
  method: "GET",
  url: "https://imdb8.p.rapidapi.com/title/get-top-rated-movies",
  headers: {
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    "x-rapidapi-key": "c61810c65cmshac8bf485bd410e3p19fd92jsn1e5912056987",
  },
};

const ExploreTopRated = () => {
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
    window.scrollTo(0,0)
  },[])

  useEffect(() => {
    const getIds = async () => {
      const response = await axios.request(options);
      console.log(response.data.slice(0, 30));
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
      const dataList = Object.values(response.data).map((element) => {
        return [element.ratings.rating, element.popularity.image.url];
      });
      console.log(dataList);
      setData(dataList);
    };
    getMetaData();
  }, [ids]);

  if (!data) {
    return (
      <div className={styles.loaderContainer}>
      <Loader
      className={styles.loader}
      type="Puff"
      color="#ea384d"
      height={75}
      width={75}
      timeout={3000} //3 secs
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
                  src={element[1]}
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

export default ExploreTopRated;
