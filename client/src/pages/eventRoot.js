import { Outlet, ScrollRestoration } from "react-router-dom";

const EventsRoot = () => {
  return (
    <>
      <ScrollRestoration />
      <Outlet></Outlet>
    </>
  );
};
export default EventsRoot;
