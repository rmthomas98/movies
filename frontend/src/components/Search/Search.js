import React from "react";
import styles from "./Search.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Search as SearchIcon } from "react-bootstrap-icons";

const Search = () => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search Movies..."
        className={styles.searchInput}
      />
      <Link to="/" className={styles.searchBtn}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          style={{height: 20, position: "relative", top: 2}}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Search;
