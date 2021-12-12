import React from "react";
import styles from "./MovieViewer.module.css";
import { StarFill } from "react-bootstrap-icons";
import MovieImages from "../MovieImages/MovieImages";
import TopCast from "../TopCast/TopCast";
import FeaturedReview from "../FeaturedReview/FeaturedReview";
import MoreLikeThis from "../MoreLikeThis/MoreLikeThis";
import MovieVideos from "../MovieVideos/MovieVideos";
import { useLocation } from "react-router-dom";
import MovieInfo from "../MovieInfo/MovieInfo";

const MovieViewer = () => {
  const location = useLocation();

  return (
    <div className={styles.container}>
      <MovieInfo id={location.state.id} />
      <MovieVideos id={location.state.id} />
      <MovieImages id={location.state.id} />
      <TopCast id={location.state.id} />
      <FeaturedReview id={location.state.id} />
      <MoreLikeThis id={location.state.id} />
    </div>
  );
};

export default MovieViewer;
