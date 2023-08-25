import { MATERIAL_CONSTRAINS } from "./validatorsConfig";
export const emailValidator = (value) => {
  return value.trim().includes("@gmail.com");
};
export const passwordValidator = (value) => {
  return value.length >= 5 && /[a-zA-Z]/.test(value) && /\d/.test(value);
};
export const passwordsMatch = (passwordOne, passwordTwo) => {
  return passwordOne === passwordTwo && passwordValidator(passwordOne);
};
export const productNameValidator = (value) => {
  return /[a-zA-Z]/.test(value) && value.length > 4;
};
export const productPriceValidator = (value) => {
  return +value > 0;
};
export const productMaterialValidator = (value) => {
  return MATERIAL_CONSTRAINS.includes(value.toUpperCase());
};
export const productDescriptionValidator = (value) => {
  return /[a-zA-Z]/.test(value) && value.length >= 10 && value.length <= 30;
};
