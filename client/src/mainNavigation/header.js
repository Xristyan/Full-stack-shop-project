import { NavLink } from "react-router-dom";
import classes from "./header.module.css";
import CartButton from "./cartButton";
import ProfileButton from "./profileButton";
import QuestionButton from "./questionButton";
import logo from "../Icons/logo.png";
import DropDown from "./DropDown/dropDown";
import DropDownChildren from "./DropDown/dropDownChildren";
import DropDownWomen from "./DropDown/dropDownWoman";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <nav className={classes.navigation}>
        <div className={classes.logo}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to="/"
            end
          >
            <img className={classes.logoImg} src={logo} alt="" />
            <span>SUUII</span>
          </NavLink>
        </div>
        <ul className={classes.list}>
          <li>
            <DropDown />
          </li>
          <li>
            <DropDownWomen />
          </li>
          <li>
            <DropDownChildren />
          </li>
        </ul>
        <div className={classes.buttonContainer}>
          <ProfileButton />
          <QuestionButton />
          <CartButton />
        </div>
      </nav>
    </header>
  );
};
export default Header;
