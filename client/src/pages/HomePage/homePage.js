import classes from "./homePage.module.css";
import SliderContainer from "./sliderContainer";
import TabsContainer from "./tabsContainer";
import Heading from "./homeHeading";
import { Link } from "react-router-dom";
import nikeImg from "../../images/nikeImg.jpg";
import adidasImg from "../../images/adidasImg.jpg";
import pumaImg from "../../images/pumaImg.jpg";

const HomePage = () => {
  return (
    <>
      <Heading />
      <div className={classes.mainContainer}>
        <div className={classes.cardContainer}>
          <Link className={`${classes.item} ${classes.stacked}`}>
            <img className={classes.image} src={nikeImg} />
            <div className={classes.content}>
              <div className={classes.headline}>New Coletcion</div>
              <div className={classes.subline}>NIKE</div>
            </div>
          </Link>
          <Link className={`${classes.item} ${classes.stacked}`}>
            <img className={classes.image} src={pumaImg} />
            <div className={classes.content}>
              <div className={classes.headline}>New Coletcion</div>
              <div className={classes.subline}>PUMA</div>
            </div>
          </Link>
          <Link className={`${classes.item} ${classes.stacked}`}>
            <img className={classes.image} src={adidasImg} />
            <div className={classes.content}>
              <div className={classes.headline}>New Coletcion</div>
              <div className={classes.subline}>ADIDAS</div>
            </div>
          </Link>
        </div>

        <TabsContainer />
      </div>
      <SliderContainer />
    </>
  );
};
export default HomePage;
