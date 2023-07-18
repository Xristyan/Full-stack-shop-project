import { useState } from "react";

const useInput = (validate) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const isValid = validate(enteredValue);
  const hasError = !isValid && isTouched;
  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };
  const inputOnBlurHandler = () => {
    setIsTouched(true);
  };
  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };
  return {
    value: enteredValue,
    isValid,
    hasError,
    valueChangeHandler,
    inputOnBlurHandler,
    reset,
  };
};
export default useInput;
