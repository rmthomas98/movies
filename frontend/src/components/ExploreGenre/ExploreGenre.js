import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import styles from "./ExploreGenre.module.css";
import axios from "axios";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Link } from "react-router-dom";

const ExploreGenre = () => {
  const [ids, setIds] = useState();
  const [data, setData] = useState();

  const location = useLocation();

  const options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre",
    params: { genre: `/chart/popular/genre/${location.state.genre}` },
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
    window.scrollTo(0, 0);
    setData();
    setIds();
    const firstLetter = location.state.genre[0].toUpperCase();
    const genre = firstLetter + location.state.genre.slice(1);
    document.title = `${genre} Movies`;
  }, [location]);

  useEffect(() => {
    const getIds = async () => {
      const response = await axios.request(options);
      const idsList = response.data.map((element) => {
        return element.split("/")[2];
      });
      setIds(idsList.join("&ids="));
      console.log(idsList);
    };
    getIds();
  }, [location]);

  useEffect(() => {
    if (!ids) return;
    const getMetaData = async () => {
      const response = await axios.request(metaOptions);
      console.log(response.data);
      const dataList = Object.values(response.data).map((element) => {
        return [
          element.popularity.image?.url,
          element.title.title,
          element.title.id.split("/")[2],
        ];
      });
      setData(dataList.slice(0, 50));
    };
    getMetaData();
  }, [ids]);

  console.log(location.state.genre);

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
    );
  }

  return (
    <div className={styles.container}>
      {data
        ? data.map((element) => {
            return (
              <div className={styles.movieContainer}>
                <Link
                  to={`/movie-viewer/${element[2]}`}
                  state={{ id: element[2] }}
                  className={styles.link}
                >
                  <img
                    src={element[0]}
                    alt={element[1]}
                    className={styles.image}
                  />
                </Link>
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default ExploreGenre;
