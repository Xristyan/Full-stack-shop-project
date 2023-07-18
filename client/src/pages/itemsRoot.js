import { Outlet, ScrollRestoration } from "react-router-dom";

const ItemssRoot = () => {
  return (
    <>
      <ScrollRestoration />
      <Outlet></Outlet>
    </>
  );
};
export default ItemssRoot;
