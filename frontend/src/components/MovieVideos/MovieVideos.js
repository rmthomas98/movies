import React, { useEffect, useState } from "react";
import styles from "./MovieVideos.module.css";
import axios from "axios";
import MovieVideoLoader from "../MovieVideoLoader/MovieVideoLoader";

const MovieVideos = ({ id }) => {
  const [trailerId, setTrailerId] = useState();
  const [trailer, setTrailer] = useState();
  const [description, setDescription] = useState();
  const [title, setTitle] = useState();

  useEffect(() => {
    setTrailerId();
    setTrailer();
    setDescription();
    setTitle();
  }, [id]);

  var options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/get-videos",
    params: { tconst: id, limit: "25", region: "US" },
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "c61810c65cmshac8bf485bd410e3p19fd92jsn1e5912056987",
    },
  };

  var trailerOptions = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/get-video-playback",
    params: { viconst: trailerId, region: "US" },
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "c61810c65cmshac8bf485bd410e3p19fd92jsn1e5912056987",
    },
  };

  useEffect(() => {
    setTimeout(() => {
      const getTrailerId = async () => {
        const response = await axios.request(options);
        setTrailerId(response.data.resource.videos?.[0]?.id.split("/")[2]);
        setDescription(response.data.resource.videos?.[0].description);
        setTitle(response.data.resource.title);
      };
      getTrailerId();
    }, 1000);
  }, [id]);

  useEffect(() => {
    if (!trailerId) return;
    const getTrailer = async () => {
      const response = await axios.request(trailerOptions);
      setTrailer(response.data.resource.encodings[1].playUrl);
    };
    getTrailer();
  }, [trailerId]);


  if (!trailer) return <MovieVideoLoader />;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.title}>Watch the Official Trailer</p>
        <div className={styles.flexContainer}>
          <video src={trailer} controls className={styles.videoTrailer} />
          <div className={styles.bioContainer}>
            <p className={styles.videoTitle}>{title}</p>
            <p className={styles.movieTitle}>Official Trailer</p>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieVideos;
