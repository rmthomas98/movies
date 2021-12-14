import React, { useState } from "react";
import styles from "./Nav.module.css";
import { Search as SearchIcon, Film } from "react-bootstrap-icons";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Film style={{ marginRight: 10 }} />
          <Link to="/" className={styles.title}>
            MovieExplorer
          </Link>
        </div>
        <div className={styles.navLinks}>
          <NavLink to="/" className={styles.navLink}>
            Home
          </NavLink>
          <NavLink to="/explore/popular" className={styles.navLink}>
            Explore
          </NavLink>
          <div className={styles.search}>
            <SearchIcon size={20} />
            <p style={{ marginLeft: 10 }}>Search</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
