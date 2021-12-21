import React, { useEffect, useState } from "react";
import styles from "./MovieInfo.module.css";
import axios from "axios";
import { StarFill, Dot } from "react-bootstrap-icons";
import MovieInfoLoader from "../MovieInfoLoader/MovieInfoLoader";

const MovieInfo = ({ id }) => {
  const [metaData, setMetaData] = useState();
  const [starring, setStarring] = useState();
  const [director, setDirector] = useState();
  const [plot, setPlot] = useState();
  const [backgroundImage, setBackgroundImage] = useState();

  useEffect(() => {
    setMetaData();
    setStarring();
    setDirector();
    setPlot();
    setBackgroundImage();
  }, [id]);

  const metaDataOptions = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/get-meta-data",
    params: { ids: id, region: "US" },
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "c61810c65cmshac8bf485bd410e3p19fd92jsn1e5912056987",
    },
  };

  const creditOptions = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/get-full-credits",
    params: { tconst: id },
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "c61810c65cmshac8bf485bd410e3p19fd92jsn1e5912056987",
    },
  };

  const plotOptions = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/get-plots",
    params: { tconst: id },
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "c61810c65cmshac8bf485bd410e3p19fd92jsn1e5912056987",
    },
  };

  var imageOptions = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/get-images",
    params: { tconst: id, limit: 1 },
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "c61810c65cmshac8bf485bd410e3p19fd92jsn1e5912056987",
    },
  };

  useEffect(() => {
    const getMetaData = async () => {
      const response = await axios.request(metaDataOptions);
      setMetaData(Object.values(response.data));
      document.title = Object.values(response.data)[0].title.title;
    };
    getMetaData();
  }, [id]);

  useEffect(() => {
    const getCredits = async () => {
      const response = await axios.request(creditOptions);
      setStarring(response.data.cast.slice(0, 3));
      if (!response.data.crew.director) return;
      setDirector(response.data.crew.director[0].name);
    };
    getCredits();
  }, [id]);

  useEffect(() => {
    const getPlot = async () => {
      const response = await axios.request(plotOptions);
      if (!response.data.plots[0]) return;
      setPlot(response.data.plots[0].text);
    };
    getPlot();
  }, [id]);

  useEffect(() => {
    const getImage = async () => {
      const response = await axios.request(imageOptions);
      setBackgroundImage(response.data.images[0].url);
    };
    getImage();
  }, [id]);


  if (!metaData || !starring || !backgroundImage) return <MovieInfoLoader />;

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `linear-gradient(#00000093, #00000093, #0b0b0e),
    url(${backgroundImage})`,
      }}
    >
      <div className={styles.contentContainer}>
        <p className={styles.titleTop}>{metaData[0].title.title}</p>
        <div className={styles.movieInfoFlexContainer}>
          <img
            src={metaData[0].popularity.image.url}
            className={styles.movieImageCover}
          />
          <p className={styles.titleBottom}>{metaData[0].title.title}</p>
          <div className={styles.infoContainer}>
            <div className={styles.ratingDate}>
              <p className={styles.date}>{metaData[0].releaseDate}</p>
              <p className={styles.certificate}>{metaData[0].certificate}</p>
              <p className={styles.runTime}>
                <span style={{ marginRight: 5 }}>
                  {metaData[0].title.runningTimeInMinutes
                    ? Math.floor(metaData[0].title.runningTimeInMinutes / 60) +
                      "h"
                    : ""}
                </span>
                <span>
                  {metaData[0].title.runningTimeInMinutes
                    ? (metaData[0].title.runningTimeInMinutes % 60) + "m"
                    : ""}
                </span>
              </p>
              <p className={styles.ratingMarker}>
                {metaData[0].ratings.rating ? (
                  <>
                    <span>{metaData[0].ratings.rating}</span>
                    <StarFill
                      style={{ marginLeft: 5, position: "relative", bottom: 1 }}
                      color="#f5c518"
                    />
                  </>
                ) : (
                  ""
                )}
              </p>
            </div>
            <div className={styles.genreTags}>
              {metaData[0].genres.map((element, index) => (
                <p key={index} className={styles.genreTag}>{element}</p>
              ))}
            </div>

            {plot ? <p className={styles.description}>{plot}</p> : ""}
            {director ? (
              <p className={styles.smallTitle}>
                Director <span className={styles.name}>{director}</span>
              </p>
            ) : (
              ""
            )}
            <p className={styles.smallTitle}>
              Starring{" "}
              <span className={styles.name}>
                {starring[0]?.name}
                {starring[1]?.name ? <Dot className={styles.dot} /> : ""}
                {starring[1]?.name}
                {starring[2]?.name ? <Dot className={styles.dot} /> : ""}
                {starring[2]?.name}
              </span>
            </p>
            <div className={styles.watchBtnsContainer}>
              {metaData[0].waysToWatch.optionGroups ? (
                <>
                  <p className={styles.watchTitle}>Ways to Watch</p>
                  {metaData[0].waysToWatch.optionGroups.map((element, index) => {
                    return (
                      <a
                        href={
                          element.displayName === "IN THEATERS"
                            ? `https://imdb.com${element.watchOptions[0].link.uri}`
                            : element.watchOptions[0].link.uri
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={styles.watchBtn}
                        key={index}
                      >
                        {element.displayName}
                      </a>
                    );
                  })}
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
