import React, { useState } from "react";
import styles from "./Nav.module.css";
import { House, Film, Binoculars } from "react-bootstrap-icons";
import { Link, NavLink } from "react-router-dom";
import Search from "../Search/Search";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);

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
            <House />
          </NavLink>
          <NavLink to="/explore/popular" className={styles.navLink}>
            <Binoculars />
          </NavLink>
          <div
            className={styles.DropDownNavContainer}
            onClick={() => (isActive ? setIsActive(false) : setIsActive(true))}
          >
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
        </div>
      </div>
      <div
        className={styles.dropDownMenuWrapper}
        style={
          isActive ? { transform: "scaleY(1)" } : { transform: "scaleY(0)" }
        }
      >
        <div className={styles.dropDownMenuContainer}>
          <p>nav container</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
