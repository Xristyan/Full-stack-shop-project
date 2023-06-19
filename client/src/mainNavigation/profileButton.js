import ProfileIcon from "../Icons/ProfileIcon";
import classes from "./profileButton.module.css";
import { showFormActions } from "../Store/showLoginForm";
import { useDispatch } from "react-redux";
const ProfileButton = () => {
  const dispatch = useDispatch();
  const showFormHandler = () => {
    dispatch(showFormActions.showForm());
  };
  return (
    <button onClick={showFormHandler} className={classes.button}>
      <ProfileIcon />
    </button>
  );
};
export default ProfileButton;
