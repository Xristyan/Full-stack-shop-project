import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import classes from "./sliderContainer.module.css";
import { Link } from "react-router-dom";
const SliderContainer = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <>
      <div className={classes.textContainer}>
        <h1>TOP HITS</h1>
        <p>See popular products</p>
      </div>
      <Carousel
        transitionDuration={500}
        draggable={true}
        showDots={false}
        infinite={true}
        className={classes.container}
        responsive={responsive}
      >
        {Array.from({ length: 7 }).map((e, i) => {
          return (
            <div className={classes.card}>
              <div className={classes.imgContainer}>
                <img
                  className={classes["product--image"]}
                  src="https://www.highsnobiety.com/static-assets/thumbor/Vd6_JucyK0bFkkAKdLTcZ_XtTVo=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2019/09/04164648/custom-sneakers-good-bad-ugly-main.jpg"
                />
                <Link>Check out</Link>
                <div className={classes.badge}>NEW</div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};
export default SliderContainer;
