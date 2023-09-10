import classes from "./loginForm.module.css";
import Modal from "../UI/Modal";
import logo from "../Icons/logo.png";
import { changeFormActions } from "../Store/changeForm";
import { modalActions } from "../Store/modalSlice";
import { loginConfigActions } from "../Store/loginConfig";
import { userActions } from "../Store/user";
import { useDispatch } from "react-redux";
import useHttp from "../hooks/use-http";
import useInput from "../hooks/use-unput";
import { emailValidator, passwordValidator } from "../Utils/validators";
const LoginForm = (props) => {
  /**Validation  */ ////////////////`
  let formValid = true;
  const dispatch = useDispatch();
  const {
    value: enteredEmail,
    isValid: isEmailValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputOnBlurHandler: emailOnBlurHandler,
    reset: resetEmail,
  } = useInput(emailValidator);
  const {
    value: enteredPassword,
    isValid: isPasswordValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputOnBlurHandler: passwordOnBlurHandler,
    reset: resetPassword,
  } = useInput(passwordValidator);
  if (!isEmailValid || !isPasswordValid) {
    formValid = false;
  } else {
    formValid = true;
  }
  /////////////////////
  const { isLoading, error, requestHandler } = useHttp();
  const setJwtToken = (data) => {
    if (!data) return;
    dispatch(loginConfigActions.login(true));
    localStorage.setItem("jwtToken", data.token);
    requestHandler(
      {
        url: "http://localhost:8080/user/getUserBy/email",
        body: { email: enteredEmail },
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwtToken"),
        },
      },
      userDataHandler
    );
    dispatch(modalActions.hideForm());
    resetEmail();
    resetPassword();
  };
  const userDataHandler = (data) => {
    console.log(data);
    if (!data) return;
    dispatch(userActions.setUser(data));
  };
  const showRegisterFormHandler = () => {
    dispatch(changeFormActions.toggleForm());
  };
  const loginFormHandler = (e) => {
    e.preventDefault();
    if (!isEmailValid || !isPasswordValid) {
      return;
    }
    requestHandler(
      {
        url: "http://localhost:8080/api/auth/authentication",
        body: { email: enteredEmail, password: enteredPassword },
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      },
      setJwtToken
    );
  };
  return (
    <>
      {error && <span className={classes.errorTopMessage}>{error}</span>}
      <div className={classes.logoContainer}>
        <label>Login</label>
        <img className={classes.logoImg} src={logo} alt="" />
      </div>
      <form onSubmit={loginFormHandler} className={classes.loginForm}>
        <div className={classes.group}>
          <input
            autoComplete="email"
            onChange={emailChangeHandler}
            onBlur={emailOnBlurHandler}
            required=""
            type="email"
            className={`${classes.input} ${
              classes[emailHasError ? "invalid" : ""]
            }`}
            placeholder="Email"
            value={enteredEmail}
          />
          <span className={classes.bar}></span>
          {emailHasError && (
            <p className={classes.errorMessage}>*Email is not valid</p>
          )}
        </div>
        <div className={classes.group}>
          <input
            autoComplete="current-password"
            required=""
            type="password"
            className={`${classes.input} ${
              classes[passwordHasError ? "invalid" : ""]
            }`}
            placeholder="Password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={passwordOnBlurHandler}
          />
          <span className={classes.bar}></span>
          {passwordHasError && (
            <p className={classes.errorMessage}>*Please enter valis password</p>
          )}
        </div>
        <button
          disabled={!formValid}
          onClick={loginFormHandler}
          className={classes.button}
        >
          {isLoading ? "loading..." : "Login"}
        </button>
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
