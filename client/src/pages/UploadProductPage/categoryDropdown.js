import { useState } from "react";
import classes from "./categoryDropdown.module.css";
const CategoryDropDown = (props) => {
  const [category, setCategory] = useState("");

  const categoryHandler = (category) => {
    setCategory(category);
    props.setCategoryHandler(category);
  };

  return (
    <div className={classes.dropdown}>
      <button className={classes.dropdownButton}>Category: {category}</button>
      <div className={classes["dropdown-content"]}>
        <div className={classes.dropdownCloathing}>
          <h4>Cloathing ➭</h4>
          <div className={classes["dropdown-content-cloathing"]}>
            <button onClick={() => categoryHandler("T-shirts")}>
              T-shirts
            </button>
            <button onClick={() => categoryHandler("Trousers")}>
              Trousers
            </button>
            <button onClick={() => categoryHandler("Jackets")}>Jackets</button>
            <button onClick={() => categoryHandler("Tracksuits")}>
              Tracksuits
            </button>
          </div>
        </div>
        <div className={classes.dropdownCloathing}>
          <h4>Shoes ➭</h4>

          <div className={classes["dropdown-content-cloathing"]}>
            <button onClick={() => categoryHandler("RunningShoes")}>
              Running shoes
            </button>
            <button onClick={() => categoryHandler("LifestyleShoes")}>
              Lifestyle Shoes
            </button>
            <button onClick={() => categoryHandler("GymShoes")}>
              Gym Shoes
            </button>
          </div>
        </div>
        <div className={classes.dropdownCloathing}>
          <h4>Jewellery ➭</h4>

          <div className={classes["dropdown-content-cloathing"]}>
            <button onClick={() => categoryHandler("Watches")}>Watches</button>
            <button onClick={() => categoryHandler("Earings")}>Earings</button>
            <button onClick={() => categoryHandler("Rings")}>Rings</button>
            <button onClick={() => categoryHandler("Necleces")}>
              Necleces
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryDropDown;
