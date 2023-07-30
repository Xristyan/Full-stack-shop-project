import { NavLink } from "react-router-dom";
import QuestionMarkIcon from "../Icons/QuestionMarkIcon";
import classes from "./questionButton.module.css";
const QuestionButton = () => {
  return (
    <NavLink
      to="/"
      className={`${({ isActive }) =>
        isActive ? classes.active : undefined} ${classes.button}`}
    >
      <QuestionMarkIcon />
    </NavLink>
  );
};
export default QuestionButton;
