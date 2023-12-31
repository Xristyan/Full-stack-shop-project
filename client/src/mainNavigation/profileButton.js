import ProfileIcon from "../Icons/ProfileIcon";
import classes from "./profileButton.module.css";
import { modalActions } from "../Store/modalSlice";
import { loginConfigActions } from "../Store/loginConfig";
import { userActions } from "../Store/user";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfileButton = () => {
  const loggedIn = useSelector((state) => state.loginConfig.loggedIn);
  const dispatch = useDispatch();
  const showFormHandler = () => {
    if (loggedIn) return;
    dispatch(modalActions.showForm());
  };
  const logout = () => {
    dispatch(userActions.clearUser());
    dispatch(loginConfigActions.login(false));
    localStorage.removeItem("jwtToken");
  };
  return (
    <>
      {loggedIn && (
        <div className={classes.dropdown}>
          <button onClick={showFormHandler} className={classes.button}>
            <ProfileIcon />
          </button>
          <div className={classes["dropdown-content"]}>
            <label>xristian</label>
            <Link href="#">Setting</Link>
            <Link to="/" onClick={logout}>
              Logout
            </Link>
          </div>
        </div>
      )}
      {!loggedIn && (
        <button onClick={showFormHandler} className={classes.button}>
          <ProfileIcon />
        </button>
      )}
    </>
  );
};
export default ProfileButton;
