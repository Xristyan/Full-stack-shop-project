import classes from "./dropDown.module.css";
import { Link, NavLink } from "react-router-dom";
import NikeIcon from "../../Icons/BrandIcons/nikeIcon";
import AdidasIcon from "../../Icons/BrandIcons/adidasIcon";
import PumaIcon from "../../Icons/BrandIcons/pumaIcon";
const DropDown = () => {
  return (
    <div className={classes.dropdown}>
      <NavLink
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        to="Men/All"
        end
      >
        Men
      </NavLink>
      <div className={classes["dropdown-content"]}>
        <div className={classes.dropdownCategory}>
          <span>Cloathing</span>
          <Link to="Men/All">All Clothing</Link>
          <Link to="Men/Trousers">Trousers</Link>
          <a href="#">Jackets</a>
          <a href="#">Tracks suits</a>
          <Link to="Men/T-shirts">T-shirts</Link>
        </div>
        <div className={classes.dropdownCategory}>
          <span>Shoes</span>
          <a href="#">Runnig</a>
          <a href="#">Lifestyle</a>
          <a href="#">Training and Gym</a>
        </div>
        <div className={classes.dropdownCategory}>
          <span>Jewellery</span>
          <a href="#">Earing</a>
          <a href="#">Necklace</a>
          <a href="#">Rings</a>
          <a href="#">Watches</a>
        </div>
        <div className={`${classes.dropdownCategory} ${classes.brands}`}>
          <NavLink>
            <NikeIcon />
          </NavLink>
          <NavLink>
            <AdidasIcon />
          </NavLink>
          <NavLink>
            <PumaIcon />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default DropDown;
