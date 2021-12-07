import React from "react";
import styles from "./FrontPage.module.css";
import Popular from "../Popular/Popular";
import ShowCase from "../showcase/ShowCase";
import TopRated from "../TopRated/TopRated";
import PictureWinner from "../PictureWinners/PictureWinner";
import Newsletter from "../NewsLetter/NewsLetter";

const FrontPage = () => {
  return (
    <div className={styles.container}>
      <ShowCase />
      <Popular />
      <TopRated />
      <PictureWinner />
      <Newsletter />
    </div>
  );
};

export default FrontPage;