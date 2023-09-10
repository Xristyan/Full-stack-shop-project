import React, { useState } from "react";
import classes from "./newReview.module.css";
import { useSelector } from "react-redux";

const NewReview = (props) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(1);
  const loggedIn = useSelector((state) => state.loginConfig.loggedIn);
  const user = useSelector((state) => state.user.user);
  const textHandler = (e) => {
    setText(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!loggedIn || !user.hasOwnProperty("email")) return;
    const newReview = {
      userName: user.email.substring(0, user.email.indexOf("@")),
      content: text,
      rating: rating,
    };
    props.reviewHandler(newReview);
  };

  return (
    <form onSubmit={submitHandler} className={classes.reviewContainer}>
      {props.error && props.error}
      <div className={classes.rating}>
        {[...Array(5)].map((el, i) => {
          return (
            <React.Fragment key={i}>
              <input
                value={`${5 - i}`}
                name="rate"
                id={`star${5 - i}`}
                type="radio"
                defaultChecked={5 - i <= rating && true}
              />
              <label
                onClick={() => {
                  setRating(5 - i);
                }}
                title="text"
                htmlFor={`star${5 - i}`}
              ></label>
            </React.Fragment>
          );
        })}
      </div>
      <textarea
        value={text}
        onChange={textHandler}
        required="text"
        placeholder="description"
        maxLength={30}
        style={{ resize: "none" }}
        rows="5"
        cols="30"
      ></textarea>
      <button className={classes.submitButton}>Submit</button>
    </form>
  );
};
export default NewReview;
