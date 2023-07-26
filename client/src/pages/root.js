import { Outlet } from "react-router-dom";
import Header from "../mainNavigation/header";
import React, { useState } from "react";
import Footer from "../Footer/footer";
import FormChoice from "../LoginForm/formChoice";
import { useDispatch, useSelector } from "react-redux";
import { showFormActions } from "../Store/showLoginForm";
import { useEffect } from "react";
import useHttp from "../hooks/use-http";
import { userActions } from "../Store/user";
const Root = () => {
  const { requestHandler } = useHttp();
  const cart = useSelector((state) => state.user.cart);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (!user.id) return;
    requestHandler({
      url: `http://localhost:8080/user/${user.id}/cart`,
      body: cart,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwtToken"),
      },
    });
  }, [cart, requestHandler]);
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
