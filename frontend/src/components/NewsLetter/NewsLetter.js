import React from "react";
import styles from "./NewsLetter.module.css";

const Newsletter = () => {
  return (
    <div className={styles.container}>
      <p className="small-title">Join Our Newsletter</p>
      <p className="medium-description">
        Be the first one to know about up and coming movies, release dates,
        ticket info, show times, and much more.
      </p>
      <div className={styles.inputContainer}>
        <input type="text" className={styles.textInput} placeholder="Email" />
        <button className={styles.signUpBtn}>Sign Up</button>
      </div>
    </div>
  );
};

export default Newsletter;
