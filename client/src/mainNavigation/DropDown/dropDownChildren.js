import classes from "./dropDown.module.css";
import { NavLink } from "react-router-dom";
import NikeIcon from "../../Icons/BrandIcons/nikeIcon";
import AdidasIcon from "../../Icons/BrandIcons/adidasIcon";
import PumaIcon from "../../Icons/BrandIcons/pumaIcon";
const DropDownChildren = () => {
  return (
    <div className={classes.dropdown}>
      <NavLink
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        to="/Children"
      >
        Children
      </NavLink>
      <div className={classes["dropdown-content"]}>
        <div className={classes.dropdownCategory}>
          <span>Cloathing</span>
          <a href="#">All Clothing</a>
          <a href="#">Jeans</a>
          <a href="#">Trousers</a>
          <a href="#">Jackets</a>
          <a href="#">Tracks suits</a>
          <a href="#">T-shirts</a>
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
export default DropDownChildren;
