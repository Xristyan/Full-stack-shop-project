import classes from "./Input.module.css";
import React from "react";
import PopUp from "./PopUp";
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={props.containerClass}>
      <input
        value={props.value}
        onBlur={props.onBlur}
        onChange={props.onChange}
        className={props.className ? props.className : ""}
        {...props.inputData}
      />
      {props.message && <PopUp message={props.message} />}
    </div>
  );
});
export default Input;
