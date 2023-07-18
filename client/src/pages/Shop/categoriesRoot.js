import { Outlet, ScrollRestoration } from "react-router-dom";

const CategoriesRoot = () => {
  return (
    <>
      <ScrollRestoration />
      <Outlet></Outlet>
    </>
  );
};
export default CategoriesRoot;
