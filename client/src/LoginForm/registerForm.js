import classes from "./registerForm.module.css";
import logo from "../Icons/logo.png";
import { changeFormActions } from "../Store/changeForm";
import { useDispatch } from "react-redux";
const RegisterForm = (props) => {
  const dispatch = useDispatch();
  const showLoginFormHandler = () => {
    dispatch(changeFormActions.toggleForm());
  };
  return (
    <>
      <div className={classes.logoContainer}>
        <label>Register</label>
        <img className={classes.logoImg} src={logo} alt="" />
      </div>
      <form className={classes.loginForm}>
        <div className={classes.group}>
          <input
            required=""
            type="text"
            className={classes.input}
            placeholder="Name"
          />
          <span className={classes.bar}></span>
        </div>
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
        <button className={classes.button}>Register</button>
      </form>
      <div className={classes.textContainer}>
        <span>Already have an account?</span>
        <button onClick={showLoginFormHandler} className={classes.signUpButton}>
          Login
        </button>
      </div>
    </>
  );
};
export default RegisterForm;
