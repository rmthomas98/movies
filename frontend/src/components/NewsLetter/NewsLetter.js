import React, { useState } from "react";
import styles from "./NewsLetter.module.css";
import { useForm } from "react-hook-form";
import { Check } from "react-bootstrap-icons";

const Newsletter = () => {
  const [btnState, setBtnState] = useState("submit");
  const [isDisabled, setIsDisabled] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setIsDisabled(true);
    setBtnState("submitting");
    setTimeout(() => {
      setBtnState("sent");
      reset();
    }, 2000);
  };

  return (
    <div className={styles.container}>
      <p className="small-title">Join Our Newsletter</p>
      <p className="medium-description">
        Be the first one to know about up and coming movies, release dates,
        ticket info, show times, and much more.
      </p>
      <form className={styles.inputContainer} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          className={styles.textInput}
          placeholder="Email"
          {...register("email", { required: true })}
        />
        <button
          type="submit"
          className={styles.signUpBtn}
          disabled={isDisabled}
          style={
            btnState === "submit" || btnState === "submitting"
              ? { background: "#d31027" }
              : { background: "#31cf39", opacity: 1 }
          }
        >
          {btnState === "submit" ? (
            "Sign Up"
          ) : btnState === "submitting" ? (
            <i className="fa fa-spinner fa-spin"></i>
          ) : (
            <Check
              color="#fff"
              size={25}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          )}
        </button>
      </form>
      <p
        className={styles.errors}
        style={errors.email ? { opacity: 1 } : { opacity: 0 }}
      >
        {errors.email && "You must enter your email"}
      </p>
    </div>
  );
};

export default Newsletter;
