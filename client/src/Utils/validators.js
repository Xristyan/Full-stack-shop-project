export const emailValidator = (value) => {
  return value.trim().includes("@gmail.com");
};
export const passwordValidator = (value) => {
  return value.length > 5;
};
