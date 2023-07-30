import { NavLink } from "react-router-dom";
import UploadIcon from "../Icons/UploadIcon";
import classes from "./UploadItemButton.module.css";
const UploadItemButton = () => {
  return (
    <NavLink
      className={({ isActive }) =>
        [classes.button, isActive ? classes.active : null]
          .filter(Boolean)
          .join(" ")
      }
      to="Upload"
    >
      <UploadIcon />
    </NavLink>
  );
};
export default UploadItemButton;
