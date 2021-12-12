import React, { useEffect, useState } from "react";
import styles from "./FeaturedReview.module.css";
import axios from "axios";
import {
  StarFill,
  HandThumbsUpFill,
  HandThumbsDownFill,
} from "react-bootstrap-icons";

const FeaturedReview = () => {
  const [featuredReview, setFeaturedReview] = useState();

  var FeaturedReviewOptions = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/get-reviews",
    params: {
      tconst: "tt0944947",
      currentCountry: "US",
      purchaseCountry: "US",
    },
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "c61810c65cmshac8bf485bd410e3p19fd92jsn1e5912056987",
    },
  };

  useEffect(() => {
    const getFeaturedReview = async () => {
      const response = await axios.request(FeaturedReviewOptions);
      console.log(response.data);
      setFeaturedReview(response.data.featuredUserReview.review);
    };
    getFeaturedReview();
  }, []);

  console.log(featuredReview);

  if (!featuredReview) return "";

  return (
    <div className={styles.container}>
      <p className={styles.title}>User Reviews</p>
      <div className={styles.featuredReviewContainer}>
        <p className={styles.featuredReviewHeader}>Featured Review</p>
        <div className={styles.infoFlexContainer}>
          <p className={styles.author}>
            by {featuredReview.author.displayName}
          </p>
          <p className={styles.submissionDate}>
            {featuredReview.submissionDate}
          </p>
          <p className={styles.authorRating}>
            {featuredReview.authorRating}/10
            <StarFill color="#f5c518" style={{ marginLeft: 5 }} />
          </p>
        </div>
        <p className={styles.featuredReview}>{featuredReview.reviewText}</p>
        <div className={styles.ratingSection}>
          <div className={styles.thumbContainer}>
            <HandThumbsUpFill style={{ marginRight: 5 }} />
            <p>{featuredReview.interestingVotes.up}</p>
          </div>
          <div className={styles.thumbContainer}>
            <HandThumbsDownFill style={{ marginRight: 5 }} />
            <p>{featuredReview.interestingVotes.down}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedReview;
