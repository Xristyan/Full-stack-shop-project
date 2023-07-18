import { configureStore } from "@reduxjs/toolkit";
import showLoginFormReducer from "./showLoginForm";
import changeFormReducer from "./changeForm";
import loginConfigReducer from "./loginConfig";
import userReducer from "./user";
import user from "./user";
const store = configureStore({
  reducer: {
    showLoginForm: showLoginFormReducer,
    changeForm: changeFormReducer,
    loginConfig: loginConfigReducer,
    user: userReducer,
  },
});
export default store;
