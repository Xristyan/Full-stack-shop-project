import classes from "./loginForm.module.css";
import Modal from "../UI/Modal";
import logo from "../Icons/logo.png";
import { changeFormActions } from "../Store/changeForm";
import { useDispatch } from "react-redux";

const LoginForm = (props) => {
  const dispatch = useDispatch();
  const showRegisterFormHandler = () => {
    dispatch(changeFormActions.toggleForm());
  };
  return (
    <>
      <div className={classes.logoContainer}>
        <label>Login</label>
        <img className={classes.logoImg} src={logo} alt="" />
      </div>
      <form className={classes.loginForm}>
        <div className={classes.group}>
          <input
            required=""
            type="text"
            className={classes.input}
            placeholder="Email"
          />
          <span className={classes.bar}></span>
        </div>
        <div className={classes.group}>
          <input
            required=""
            type="password"
            className={classes.input}
            placeholder="Password"
          />
          <span className={classes.bar}></span>
        </div>
        <button className={classes.button}>Login</button>
      </form>
      <div className={classes.textContainer}>
        <span>Don’t have an account?</span>
        <button
          onClick={showRegisterFormHandler}
          className={classes.signUpButton}
        >
          Sign up
        </button>
      </div>
    </>
  );
};
export default LoginForm;
