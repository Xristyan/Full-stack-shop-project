import classes from "./registerForm.module.css";
import logo from "../Icons/logo.png";
import { changeFormActions } from "../Store/changeForm";
import { useDispatch } from "react-redux";
import useInput from "../hooks/use-unput";
import { showFormActions } from "../Store/showLoginForm";
import { loginConfigActions } from "../Store/loginConfig";
import { userActions } from "../Store/user";
import useHttp from "../hooks/use-http";
import {
  emailValidator,
  passwordValidator,
  passwordsMatch,
} from "../Utils/validators";
const RegisterForm = (props) => {
  let formValid = true;
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
  const {
    value: enteredRepeatedPassword,
    isValid: isRepeatedPasswordValid,
    hasError: repeatedPasswordHasError,
    valueChangeHandler: repeatedPasswordChangeHandler,
    inputOnBlurHandler: repeatedPasswordOnBlurHandler,
    reset: resetRepeatedPassword,
  } = useInput(passwordsMatch.bind(null, enteredPassword));
  if (!isEmailValid || !isPasswordValid || !isRepeatedPasswordValid) {
    formValid = false;
  } else {
    formValid = true;
  }
  const dispatch = useDispatch();
  const showLoginFormHandler = () => {
    dispatch(changeFormActions.toggleForm());
  };

  const { isLoading, error, requestHandler } = useHttp();
  const setJwtToken = (data) => {
    if (!data) return;
    console.log("sada");
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
    dispatch(showFormActions.hideForm());
    resetEmail();
    resetPassword();
  };
  const userDataHandler = (data) => {
    console.log(data);
    if (!data) return;
    dispatch(userActions.setUser(data));
  };
  const registeFormHandler = (e) => {
    e.preventDefault();
    if (!isEmailValid || !isPasswordValid) {
      return;
    }
    requestHandler(
      {
        url: "http://localhost:8080/api/auth/register",
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
      <div className={classes.logoContainer}>
        <label>Register</label>
        <img className={classes.logoImg} src={logo} alt="" />
      </div>
      <form onSubmit={registeFormHandler} className={classes.loginForm}>
        <div className={classes.group}>
          <input
            onChange={emailChangeHandler}
            onBlur={emailOnBlurHandler}
            value={enteredEmail}
            required=""
            type="text"
            className={`${classes.input} ${
              classes[emailHasError ? "invalid" : ""]
            }`}
            placeholder="Email"
          />
          <span className={classes.bar}></span>
        </div>
        <div className={classes.group}>
          <input
            required=""
            type="password"
            className={`${classes.input} ${
              classes[
                passwordHasError || repeatedPasswordHasError ? "invalid" : ""
              ]
            }`}
            placeholder="Password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={passwordOnBlurHandler}
          />
          <span className={classes.bar}></span>
        </div>
        <div className={classes.group}>
          <input
            required=""
            type="password"
            className={`${classes.input} ${
              classes[repeatedPasswordHasError ? "invalid" : ""]
            }`}
            placeholder="Repeat-Password"
            value={enteredRepeatedPassword}
            onChange={repeatedPasswordChangeHandler}
            onBlur={repeatedPasswordOnBlurHandler}
          />
          <span className={classes.bar}></span>
        </div>
        <button
          disabled={!formValid}
          onClick={registeFormHandler}
          className={classes.button}
        >
          Register
        </button>
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
