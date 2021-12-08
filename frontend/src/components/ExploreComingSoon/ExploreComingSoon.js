import React, { useEffect, useState } from "react";
import styles from "./ExploreComingSoon.module.css";
import axios from "axios";

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
    const getIds = async () => {
      const response = await axios.request(options);
      const idsList = response.data.slice(0, 50).map((element) => {
        return element.id.split("/")[2];
      });
      setIds(idsList.join("&ids="));
      console.log(ids);
    };
    getIds();
  }, []);

  useEffect(() => {
    if (!ids) return;
    const getMetaData = async () => {
      const response = await axios.request(metaDataOptions);
      console.log(Object.values(response.data));
      const metaList = Object.values(response.data).map((element) => {
        return element.popularity.image?.url;
      });
      setData(metaList);
    };
    getMetaData();
  }, [ids]);

  if (!ids) return <div className={styles.container}>{}</div>;

  return (
    <div className={styles.container}>
      {data
        ? data.map((element) => {
            return (
              <div className={styles.movieContainer}>
                <img src={element} className={styles.image} alt="movie cover" />
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default ExploreComingSoon;
