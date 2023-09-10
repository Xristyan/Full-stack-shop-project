import classes from "./Input.module.css";

const CheckBox = (props) => {
  return (
    <label className={classes.container}>
      <input
        checked={props.checked}
        onChange={props.onChange}
        type={props.type}
        value={props.value}
      />
      {props.color && (
        <span
          className={`${classes.colorCheckmark} ${
            props.color === "Black" ? classes.isBlack : ""
          }`}
          style={{ backgroundColor: props.color }}
        ></span>
      )}
      {!props.color && <span className={classes.checkmark}></span>}

      {props.title}
    </label>
  );
};
export default CheckBox;
