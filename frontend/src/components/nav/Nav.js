import React, { useState } from "react";
import styles from "./Nav.module.css";
import { Search as SearchIcon, Film } from "react-bootstrap-icons";
import { Link, NavLink } from "react-router-dom";
import Search from "../Search/Search";

const Nav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Film style={{ marginRight: 10 }} color="#d31027" />
          <Link to="/" className={styles.title}>
            MovieExplorer
          </Link>
        </div>
        <Search />
        <div className={styles.navLinks}>
          <NavLink to="/" className={styles.navLink}>
            Home
          </NavLink>
          <NavLink to="/explore/popular" className={styles.navLink}>
            Explore
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
