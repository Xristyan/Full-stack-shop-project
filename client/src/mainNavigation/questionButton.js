import QuestionMarkIcon from "../Icons/QuestionMarkIcon";
import classes from "./questionButton.module.css";
const QuestionButton = () => {
  return (
    <button className={classes.button}>
      <QuestionMarkIcon />
    </button>
  );
};
export default QuestionButton;
