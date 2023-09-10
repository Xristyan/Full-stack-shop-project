import { Link } from "react-router-dom";
import classes from "./productElement.module.css";
const ProductElement = (props) => {
  return (
    <>
      <Link to={"" + props.id} className={`${classes.item} ${classes.stacked}`}>
        <img className={classes.image} src={`/images/${props.image}`} />

        <div className={classes.content}>
          <div className={classes.headline}>{props.name}</div>
          <div className={classes.subtitle}>
            {props.gender}'{props.category}
          </div>
          <div className={classes.priceContent}>
            <div
              className={`${classes.price} ${
                props.discount > 0 && classes.discounted
              }`}
            >
              {props.price}$
            </div>{" "}
            {props.discount > 0 && (
              <span>
                {(props.price - props.price * (props.discount / 100)).toFixed(
                  2
                )}
                $
              </span>
            )}
            {props.discount > 0 && (
              <div className={classes.discount}>{props.discount}% off</div>
            )}
          </div>
        </div>
      </Link>
    </>
  );
};
export default ProductElement;
