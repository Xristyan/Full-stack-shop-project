import ProfileIcon from "../Icons/ProfileIcon";
import classes from "./profileButton.module.css";
import { showFormActions } from "../Store/showLoginForm";
import { loginConfigActions } from "../Store/loginConfig";
import { userActions } from "../Store/user";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfileButton = () => {
  const loggedIn = useSelector((state) => state.loginConfig.loggedIn);
  console.log(loggedIn);
  const dispatch = useDispatch();
  const showFormHandler = () => {
    if (loggedIn) return;
    dispatch(showFormActions.showForm());
  };
  const logout = () => {
    dispatch(userActions.clearUser);
    dispatch(loginConfigActions.login(false));
    localStorage.setItem("jwtToken", null);
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
