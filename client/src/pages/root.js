import { Outlet } from "react-router-dom";
import Header from "../mainNavigation/header";
import React, { useState } from "react";
import Footer from "../Footer/footer";
import FormChoice from "../LoginForm/formChoice";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../Store/modalSlice";
import { useEffect } from "react";
import useHttp from "../hooks/use-http";
import Filter from "./Shop/filters/filter";
import Modal from "../UI/Modal";
import FilterModal from "./Shop/filters/filterModal";
const Root = () => {
  const { requestHandler } = useHttp();
  const dispatch = useDispatch();
  const showFilterModal = useSelector((state) => state.modal.showFilter);
  const screenWidth = useSelector((state) => state.screenWidth.screenWidth);
  const showForm = useSelector((state) => state.modal.showForm);
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

  const hideFormHandler = () => {
    dispatch(modalActions.hideForm());
  };
  console.log(showFilterModal);
  return (
    <React.Fragment>
      {showFilterModal && screenWidth <= 960 && <FilterModal />}
      {showForm && <FormChoice onClose={hideFormHandler} />}
      <Header></Header>
      <main
        style={{ minHeight: "100vh", maxWidth: "1440px", margin: "0 auto" }}
      >
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  );
};
export default Root;
