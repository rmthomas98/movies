import React, { useEffect, useState } from "react";
import styles from "./TopCast.module.css";
import axios from "axios";

const TopCast = () => {
  const [ids, setIds] = useState();
  const [topCast, setTopCast] = useState();

  const options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/get-top-cast",
    params: { tconst: "tt0944947" },
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "c61810c65cmshac8bf485bd410e3p19fd92jsn1e5912056987",
    },
  };

  var bioOptions = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/get-charname-list",
    params: {
      id: ids,
      tconst: "tt0944947",
      currentCountry: "US",
      marketplace: "ATVPDKIKX0DER",
      purchaseCountry: "US",
    },
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "c61810c65cmshac8bf485bd410e3p19fd92jsn1e5912056987",
    },
  };

  useEffect(() => {
    const getTopCast = async () => {
      const response = await axios.request(options);
      console.log(response.data);
      const idsList = response.data
        .slice(0, 20)
        .map((element) => element.split("/")[2]);
      setIds(idsList.join("&id="));
      console.log(idsList);
    };
    getTopCast();
  }, []);

  useEffect(() => {
    if (!ids) return;
    const getBios = async () => {
      const response = await axios.request(bioOptions);
      console.log(response.data);
      setTopCast(Object.values(response.data));
    };
    getBios();
  }, [ids]);

  if (!topCast) return "";

  return (
    <div className={styles.container}>
      <p className={styles.title}>Top Cast</p>
      <div className={styles.characterGridContainer}>
        {topCast.map((element) => {
          return (
            <div className={styles.characterContainer}>
              <div
                className={styles.imageContainer}
                style={{ backgroundImage: `url(${element.name.image.url})` }}
              ></div>
              <div className={styles.nameContainer}>
                <p className={styles.name}>{element.name.name}</p>
                <p className={styles.character}>
                  as {element.charname[0].characters[0]}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopCast;
