import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import changeFormReducer from "./changeForm";
import loginConfigReducer from "./loginConfig";
import userReducer from "./user";
import filterReducer from "./filterSlice";
import sortReducer from "./sortSlice";
import screenWidthReducer from "./screenWidthSlice";
const store = configureStore({
  reducer: {
    modal: modalReducer,
    changeForm: changeFormReducer,
    loginConfig: loginConfigReducer,
    user: userReducer,
    filters: filterReducer,
    sort: sortReducer,
    screenWidth: screenWidthReducer,
  },
});
export default store;
