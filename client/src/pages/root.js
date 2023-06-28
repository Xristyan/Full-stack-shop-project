import { Outlet } from "react-router-dom";
import Header from "../mainNavigation/header";
import React, { useState } from "react";
import Footer from "../Footer/footer";
import FormChoice from "../LoginForm/formChoice";
import { useDispatch, useSelector } from "react-redux";
import { showFormActions } from "../Store/showLoginForm";

const Root = () => {
  const dispatch = useDispatch();
  const hideFormHandler = () => {
    dispatch(showFormActions.hideForm());
  };
  const showForm = useSelector((state) => state.showLoginForm.showForm);
  return (
    <React.Fragment>
      {showForm && <FormChoice onClose={hideFormHandler} />}
      <Header></Header>
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};
export default Root;
