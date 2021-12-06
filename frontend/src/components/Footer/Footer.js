import React from "react";
import styles from "./Footer.module.css";
import { Film, Instagram, Twitter, Facebook } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Film style={{ marginRight: 10 }} color="#d31027" />
          <p className={styles.footerTitle}>MovieExplorer</p>
        </div>
        <p className={styles.copyright}>&#169; Copyright MovieExplorer 2021</p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Instagram
            style={{ marginRight: 15, cursor: "pointer" }}
            className={styles.socialIcon}
          />
          <Twitter
            style={{ marginRight: 15, cursor: "pointer" }}
            className={styles.socialIcon}
          />
          <Facebook
            style={{ cursor: "pointer" }}
            className={styles.socialIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
