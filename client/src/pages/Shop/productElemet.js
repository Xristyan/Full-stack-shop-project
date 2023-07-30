import { Link } from "react-router-dom";
import classes from "./productElement.module.css";
const ProductElement = (props) => {
  return (
    <>
      <Link to={"" + props.id} className={classes.item}>
        <div className={classes.imageContainer}>
          <img className={classes.image} src={`/images/${props.image}`} />
        </div>
        <div className={classes.descriptin}>
          <p>{props.name}</p>
          <label className={classes.price}>{props.price}$</label>
        </div>
      </Link>
    </>
  );
};
export default ProductElement;
