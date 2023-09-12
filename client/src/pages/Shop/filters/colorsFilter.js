import CheckBox from "../../../UI/CheckBox";
import classes from "./filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filtersActions } from "../../../Store/filterSlice";
const inputColors = ["Black", "White", "Red", "Blue", "Green"];
const ColorsFilter = (props) => {
  const colorsFilter = useSelector((state) => state.filters.colorsFilter);
  const showFilters = useSelector((state) => state.filters.showColorsFilter);
  const dispatch = useDispatch();
  const showFilterHandler = () => {
    dispatch(filtersActions.showColorsFilterHandler());
  };
  const inputChangeHandler = (e) => {
    e.preventDefault();
    dispatch(filtersActions.colorsFilterHandler(e.target.value));
  };

  return (
    <form className={classes.filterSection}>
      <h2 onClick={showFilterHandler}>
        Color:<span>{showFilters ? "▲" : "▼"}</span>
      </h2>

      <div
        style={{ display: !showFilters ? "none" : "" }}
        className={classes.filters}
      >
        {inputColors.map((inputColor, i) => {
          return (
            <CheckBox
              key={i + 1}
              onChange={inputChangeHandler}
              value={inputColor}
              type={"checkbox"}
              color={inputColor}
              title={inputColor}
              checked={colorsFilter.includes(inputColor)}
            />
          );
        })}
      </div>
    </form>
  );
};
export default ColorsFilter;
