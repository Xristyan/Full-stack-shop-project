import { useEffect, useRef, useState } from "react";
import classes from "./detailsForm.module.css";

const DetailsForm = (props) => {
  const detailsRef = useRef();
  const [isChecked, setIsChecked] = useState(false);
  const checkboxHandler = (e) => {
    setIsChecked(e.target.checked);
  };
  useEffect(() => {
    console.log(isChecked);
  }, [isChecked]);
  const formHandler = (e) => {
    e.preventDefault();
    // console.log(detailsRef.current.value);
  };
  return (
    <form onSubmit={formHandler} className={classes.detailsForm}>
      <input
        className={classes.input}
        required=""
        type="text"
        placeholder="Name"
      />
      <select style={{ maxWidth: `12rem` }} className={classes.input}>
        <option>Nike</option>
        <option>Adidas</option>
        <option>Puma</option>
      </select>
      <input
        className={classes.input}
        style={{ maxWidth: `12rem` }}
        required=""
        type="text"
        placeholder="Material"
      />
      <input
        placeholder="price"
        style={{ maxWidth: `12rem` }}
        className={classes.input}
        type="number"
      />
      <textarea
        className={classes.description}
        placeholder="description"
        maxLength={30}
        rows="5"
        cols="30"
      ></textarea>
      <select style={{ maxWidth: `7rem` }} className={classes.input}>
        <option>Male</option>
        <option>Female</option>
      </select>
      <label className={classes.checkboxContainer}>
        <input onChange={checkboxHandler} type="checkbox" />
        <div className={classes.checkmark}></div>
        <label>For Children</label>
      </label>
      <input placeholder="color" type="color" />
      <button className={classes.submitButton}>Upload Item</button>
    </form>
  );
};
export default DetailsForm;
