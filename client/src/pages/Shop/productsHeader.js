import FilterIcon from "../../Icons/FilterIcon";
import classes from "./productsHeader.module.css";
import { useEffect } from "react";
import { modalActions } from "../../Store/modalSlice";
import { screenWidthActions } from "../../Store/screenWidthSlice";
import { useDispatch, useSelector } from "react-redux";
import { sortActions } from "../../Store/sortSlice";

const ProductsHeader = (props) => {
  const dispatch = useDispatch();
  const screenWidth = useSelector((state) => state.screenWidth.screenWidth);
  const currentSort = useSelector((state) => state.sort.sortType);

  const handleResize = () => {
    dispatch(screenWidthActions.screenWidthHandler(window.innerWidth));
    if (window.innerWidth >= 960) {
      dispatch(modalActions.toggleFilterModal(false));
    }
  };
  const toggleModal = () => {
    if (screenWidth >= 960) {
      props.toggleFilter();
    } else {
      console.log("yes");
      dispatch(modalActions.toggleFilterModal(true));
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const sortProducts = (sortingType) => {
    dispatch(sortActions.sortTypeHandler(sortingType));
  };
  return (
    <section className={classes.header}>
      <div>
        <h2 className={classes.heading}>
          {props.page}-{props.category}
        </h2>
        <span className={classes.productsCount} style={{ margin: "1rem" }}>
          Products:{props.currentProducts}-{props.maxProducts}
        </span>
      </div>
      <div className={classes.optionsContainer}>
        <button className={classes.filterButton} onClick={toggleModal}>
          <FilterIcon />
          Filter
        </button>

        <div className={classes.dropdown}>
          <button className={classes.dropdownButton}>
            Sort by: {currentSort}
          </button>
          <div className={classes["dropdown-content"]}>
            <button onClick={() => sortProducts("Alphabetical a-z")}>
              Alphabetical a-z
            </button>
            <button onClick={() => sortProducts("Alphabetical z-a")}>
              Alphabetical z-a
            </button>
            <button onClick={() => sortProducts("Price ascending")}>
              Price ascending.
            </button>
            <button onClick={() => sortProducts("Price descending")}>
              Price descending.
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductsHeader;
