import { useSelector, useDispatch } from "react-redux";
import { screenWidthActions } from "../Store/screenWidthSlice";
import { useEffect } from "react";
const useResponsive = () => {
  const dispatch = useDispatch();
  const screenWidth = useSelector((state) => state.screenWidth.screenWidth);

  const handleResize = () => {
    dispatch(screenWidthActions.screenWidthHandler(window.innerWidth));
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenWidth;
};
export default useResponsive;
