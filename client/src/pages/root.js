import { Outlet } from "react-router-dom";
import Header from "../mainNavigation/header";
import React, { useState } from "react";
import Footer from "../Footer/footer";
import FormChoice from "../LoginForm/formChoice";
import { useDispatch, useSelector } from "react-redux";
import { showFormActions } from "../Store/showLoginForm";
import { useEffect } from "react";
const Root = () => {
  const [data, setData] = useState("");
  // const postingData = async function () {
  //   try {
  //     const response = await fetch("https://localhost:8080/student/add", {
  //       method: "POST",
  //       body: { name: "joshua", address: "sliven" },
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const getData = async function () {
    try {
      const response = await fetch("http://localhost:8080/product/getAll");
      const data = await response.json();
      console.log(data);
      console.log(data[0].images[0].filePath);
      setData(data[0].images[0].name);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const dispatch = useDispatch();
  const hideFormHandler = () => {
    dispatch(showFormActions.hideForm());
  };
  const showForm = useSelector((state) => state.showLoginForm.showForm);
  return (
    <React.Fragment>
      {showForm && <FormChoice onClose={hideFormHandler} />}
      <Header data={data}></Header>
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};
export default Root;
