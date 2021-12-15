import React, { useEffect, useState } from "react";
import styles from "./Search.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDebounce } from "use-debounce";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import OutsideClickHandler from "react-outside-click-handler";

const Search = () => {
  const [text, setText] = useState();
  const [value] = useDebounce(text, 1500);
  const [data, setData] = useState();

  var options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/find",
    params: { q: value },
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "c61810c65cmshac8bf485bd410e3p19fd92jsn1e5912056987",
    },
  };

  useEffect(() => {
    const getSearchData = async () => {
      const response = await axios.request(options);
      console.log(response.data);
      setData(response.data);
    };
    getSearchData();
  }, [value]);

  useEffect(() => {
    setData();
  }, [text, value]);

  const handleOutsideClick = () => {
    setData();
    setText();
    document.querySelector("#search-input").value = "";
  };

  console.log(text);

  return (
    <div className={styles.searchWrapper}>
      <OutsideClickHandler onOutsideClick={handleOutsideClick}>
        <div className={styles.container}>
          <div className={styles.searchIconContainer}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="#000"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style={{ height: 20, position: "relative", top: 2, opacity: 0.8 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            id="search-input"
            type="text"
            placeholder="Search Movies..."
            className={styles.searchInput}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        {data ? (
          <div className={styles.resultsContainer}>
            {data.results ? (
              data.results.map((element) => {
                if (element.episode || !element.image || element.name || element.titleType === 'video' || element.titleType === 'short')
                  return "";
                return (
                  <Link
                    to={`/movie-viewer/${element.id.split("/")[2]}`}
                    state={{ id: element.id.split("/")[2] }}
                    className={styles.link}
                    onClick={handleOutsideClick}
                  >
                    <div className={styles.resultContainer}>
                      <img
                        src={element.image?.url}
                        alt={element.title}
                        className={styles.image}
                      />
                      <div className={styles.resultInfo}>
                        <p className={styles.resultHeader}>{element.title}</p>
                        <p className={styles.resultHeader}>{element.year}</p>
                      </div>
                    </div>
                  </Link>
                );
              })
            ) : (
              <div
                className={`${styles.resultContainer} ${styles.noResultContainer}`}
              >
                <p>No Results Found</p>
              </div>
            )}
          </div>
        ) : text ? (
          <div className={styles.resultsContainer}>
            {" "}
            <div className={styles.loaderContainer}>
              <Loader
                className={styles.loader}
                type="ThreeDots"
                color="#ea384d"
                height={50}
                width={50}
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </OutsideClickHandler>
    </div>
  );
};

export default Search;
