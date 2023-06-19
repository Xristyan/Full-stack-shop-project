import { configureStore } from "@reduxjs/toolkit";
import showLoginFormReducer from "./showLoginForm";
import changeFormReducer from "./changeForm";
const store = configureStore({
  reducer: {
    showLoginForm: showLoginFormReducer,
    changeForm: changeFormReducer,
  },
});
export default store;
