import classes from "./homePage.module.css";
import SliderContainer from "./sliderContainer";
import TabsContainer from "./tabsContainer";
import Heading from "./homeHeading";
import { Link } from "react-router-dom";
import nikeImg from "./nikeImgR.jpg";
import pumaImg from "./pumaImgR.jpg";
import adidasImg from "./adidasImgR.jpg";

const HomePage = () => {
  return (
    <>
      <Heading />
      <div className={classes.mainContainer}>
        <div className={classes.backgroundDesignTop}></div>
        <div className={classes.backgroundDesignBot}></div>
        <div className={classes.cardContainer}>
          <div className={classes.logo}>
            <Link to="/Men">
              <img className={classes.image} src={nikeImg} />
            </Link>
          </div>
          <div className={classes.logo}>
            <Link to="/Men">
              <img className={classes.image} src={pumaImg} />
            </Link>
          </div>
          <div className={classes.logo}>
            {" "}
            <Link to="/Men">
              <img className={classes.image} src={adidasImg} />
            </Link>
          </div>
        </div>

        <TabsContainer />
      </div>
      <SliderContainer />
    </>
  );
};
export default HomePage;
