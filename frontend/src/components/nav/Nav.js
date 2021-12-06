import React from "react";
import styles from "./Nav.module.css";
import { Search, Film } from "react-bootstrap-icons";
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Film style={{ marginRight: 10 }} />
          <Link to="/" className={styles.title}>MovieExplorer</Link>
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
