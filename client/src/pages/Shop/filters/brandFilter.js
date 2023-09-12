import classes from "./filter.module.css";
import CheckBox from "../../../UI/CheckBox";
import { filtersActions } from "../../../Store/filterSlice";
import { useDispatch, useSelector } from "react-redux";
const brandInputs = ["Nike", "Adidas", "Puma"];
const BrandFilter = () => {
  const dispatch = useDispatch();
  const brandsFilter = useSelector((state) => state.filters.brandFilter);
  const showFilters = useSelector((state) => state.filters.showBrandsFilter);
  const showFilterHandler = () => {
    dispatch(filtersActions.showBrandsFilterHandler());
  };
  const inputChangeHandler = (e) => {
    e.preventDefault();
    dispatch(filtersActions.brandFilterHandler(e.target.value));
  };
  return (
    <form className={classes.filterSection}>
      <h2 onClick={showFilterHandler}>
        Brand:<span>{showFilters ? "▲" : "▼"}</span>
      </h2>

      <div
        style={{ display: !showFilters ? "none" : "" }}
        className={classes.filters}
      >
        {brandInputs.map((brandInput, i) => {
          return (
            <CheckBox
              key={i + 1}
              onChange={inputChangeHandler}
              type={"checkbox"}
              title={brandInput}
              value={brandInput}
              checked={brandsFilter.includes(brandInput)}
            />
          );
        })}
      </div>
    </form>
  );
};
export default BrandFilter;
