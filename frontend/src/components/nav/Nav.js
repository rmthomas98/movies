import React from "react";
import styles from "./Nav.module.css";
import { Search, Film } from "react-bootstrap-icons";

const Nav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Film style={{ marginRight: 10 }} />
          <p className={styles.title}>MovieExplorer</p>
        </div>
        <div className={styles.search}>
          <Search size={20} />
          <p style={{ marginLeft: 10 }}>Search</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
