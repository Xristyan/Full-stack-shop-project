import classes from "./tabsContainer.module.css";
import { useState } from "react";
import watchImg from "../../images/watchImg.jpg";
import ringImg from "../../images/ringImg.jpg";
import earingImg from "../../images/earingImg.jpg";

const TabsContainer = () => {
  const [buttonActive, setButtonActive] = useState("1");
  const check = (e) => {
    console.log(e.target.value);
    setButtonActive(e.target.value);
  };
  return (
    <div className={classes.tapsContainer}>
      <div className={classes.tabs}>
        <button
          className={`${classes.button} ${
            buttonActive === "1" ? classes.operationsActive : ""
          }`}
          onClick={check}
          value={1}
        >
          Watches
        </button>
        <button
          className={`${classes.button} ${
            buttonActive === "2" ? classes.operationsActive : ""
          }`}
          onClick={check}
          value={2}
        >
          Rings
        </button>
        <button
          className={`${classes.button} ${
            buttonActive === "3" ? classes.operationsActive : ""
          }`}
          onClick={check}
          value={3}
        >
          Earrings
        </button>
      </div>
      <div className={classes.contentContainer}>
        {buttonActive === "1" && (
          <>
            <div className={classes.imgContainer}>
              <img className={classes.image} src={watchImg} />
            </div>
            <div className={classes.description}>
              <p>
                Check out our watches made of the highest quality materials and
                suitable for any occasion
              </p>
              <button>Check out</button>
            </div>
          </>
        )}
        {buttonActive === "2" && (
          <>
            <div className={classes.imgContainer}>
              <img className={classes.image} src={ringImg} />
            </div>
            <div className={classes.description}>
              <p>
                Stainless steel men's and women's rings suitable for any
                occasion
              </p>
              <button>Check out</button>
            </div>
          </>
        )}
        {buttonActive === "3" && (
          <>
            <div className={classes.imgContainer}>
              <img className={classes.image} src={earingImg} />
            </div>
            <div className={classes.description}>
              <p>
                Аmazing earrings to complete any look, made of the highest
                quality materials
              </p>
              <button>Check out</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default TabsContainer;
