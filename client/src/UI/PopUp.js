import classes from "./PopUp.module.css";
const PopUp = (prop) => {
  return (
    <span className={classes.popUpButton}>
      *
      <div className={classes.popUp}>
        <p>{prop.message}</p>
      </div>
    </span>
  );
};
export default PopUp;
