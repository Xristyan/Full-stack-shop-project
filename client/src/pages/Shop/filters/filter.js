import classes from "./filter.module.css";
import ColorsFilter from "./colorsFilter";
import PriceFilter from "./priceFilter";
import BrandFilter from "./brandFilter";

const Filter = (props) => {
  return (
    <div
      className={`${classes.filterContainer} ${
        props.isVisible ? classes.active : classes[props.className]
      }`}
    >
      <BrandFilter />
      <PriceFilter />
      <ColorsFilter />
    </div>
  );
};
export default Filter;
