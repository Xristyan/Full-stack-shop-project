import { useEffect, useRef, useState } from "react";
import classes from "./detailsForm.module.css";
import PopUp from "../../UI/PopUp";
import Input from "../../UI/Input";
import useInput from "../../hooks/use-unput";
import {
  productDescriptionValidator,
  productMaterialValidator,
  productNameValidator,
  productPriceValidator,
} from "../../Utils/validators";

const DetailsForm = (props) => {
  const brandRef = useRef();
  const detailsRef = useRef();
  const {
    value: enteredName,
    isValid: isNameValid,
    hasError: NameHasError,
    valueChangeHandler: NameChangeHandler,
    inputOnBlurHandler: NameOnBlurHandler,
    reset: resetName,
  } = useInput(productNameValidator);
  const {
    value: enteredMaterial,
    isValid: isMaterialValid,
    hasError: MaterialHasError,
    valueChangeHandler: MaterialChangeHandler,
    inputOnBlurHandler: MaterialOnBlurHandler,
    reset: resetMaterial,
  } = useInput(productMaterialValidator);
  const {
    value: enteredPrice,
    isValid: isPriceValid,
    hasError: PriceHasError,
    valueChangeHandler: PriceChangeHandler,
    inputOnBlurHandler: PriceOnBlurHandler,
    reset: resetPrice,
  } = useInput(productPriceValidator);
  const {
    value: enteredDescription,
    isValid: isDescriptionValid,
    hasError: DescriptionHasError,
    valueChangeHandler: DescriptionChangeHandler,
    inputOnBlurHandler: DescriptionOnBlurHandler,
    reset: resetDescription,
  } = useInput(productDescriptionValidator);
  const [isChecked, setIsChecked] = useState(false);
  const checkboxHandler = (e) => {
    setIsChecked(e.target.checked);
  };
  useEffect(() => {
    console.log(isChecked);
  }, [isChecked]);
  const formHandler = (e) => {
    e.preventDefault();

    brandRef.current.value = "Nike";
    console.log(brandRef.current.value);

    // console.log(detailsRef.current.value);
  };
  return (
    <form onSubmit={formHandler} className={classes.detailsForm}>
      <Input
        value={enteredName}
        inputData={{
          name: "name",
          required: "text",
          type: "text",
          placeholder: "Name",
        }}
        message={NameHasError && "Username is Mandatory"}
        onBlur={NameOnBlurHandler}
        onChange={NameChangeHandler}
        className={`${classes.input} ${NameHasError && classes.invalid}`}
        containerClass={classes.inputName}
      />

      <select
        ref={brandRef}
        className={`${classes.input} ${classes.inputBrand}`}
      >
        <option>Nike</option>
        <option>Adidas</option>
        <option>Puma</option>
      </select>
      <Input
        onBlur={MaterialOnBlurHandler}
        onChange={MaterialChangeHandler}
        className={`${classes.input} ${MaterialHasError && classes.invalid}`}
        inputData={{
          required: "text",
          type: "text",
          placeholder: "Material",
        }}
        value={enteredMaterial}
        message={MaterialHasError && "Material is mandatory"}
        containerClass={classes.inputContainer}
      />
      <Input
        onBlur={PriceOnBlurHandler}
        onChange={PriceChangeHandler}
        value={enteredPrice}
        className={`${classes.input} ${PriceHasError && classes.invalid}`}
        inputData={{
          type: "number",
          placeholder: "Price",
          required: "number",
        }}
        message={PriceHasError && "Price is mandatory"}
        containerClass={classes.inputContainer}
      />
      <div className={classes.descriptionContainer}>
        <textarea
          className={`${classes.description} ${
            DescriptionHasError && classes.invalid
          }`}
          required="text"
          value={enteredDescription}
          placeholder="description"
          onBlur={DescriptionOnBlurHandler}
          onChange={DescriptionChangeHandler}
          maxLength={30}
          style={{ resize: "none" }}
          rows="5"
          cols="30"
        ></textarea>
        {DescriptionHasError && <PopUp message={"Description is mandatory"} />}
      </div>
      <select className={`${classes.input} ${classes.inputGender}`}>
        <option>Male</option>
        <option>Female</option>
      </select>
      <label className={classes.checkboxContainer}>
        <input checked={isChecked} onChange={checkboxHandler} type="checkbox" />
        <div className={classes.checkmark}></div>
        <label>For Children</label>
      </label>
      <input placeholder="color" type="color" />
      <button className={classes.submitButton}>Upload Item</button>
    </form>
  );
};
export default DetailsForm;
