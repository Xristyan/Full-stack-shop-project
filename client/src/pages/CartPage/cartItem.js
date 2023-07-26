import classes from "./cartItem.module.css";
import { useDispatch } from "react-redux";
import { userActions } from "../../Store/user";
const CartItem = (props) => {
  const dispatch = useDispatch();
  const removeFromCartHandler = () => {
    dispatch(
      userActions.removeFromCart({
        productId: props.productId,
        productName: props.productName,
        imageName: props.imageName,
        price: props.price,
      })
    );
  };
  const addToCartHandler = () => {
    dispatch(
      userActions.addtoCart({
        productId: props.productId,
        productName: props.productName,
        imageName: props.imageName,
        price: props.price,
      })
    );
  };
  const deleteFromCart = () => {
    dispatch(userActions.deleteFromCart(props.productId));
  };
  console.log(props.imageName);
  return (
    <div className={classes.cartItem}>
      <div className={classes.imgContainer}>
        <img className={classes.img} src={`/images/${props.imageName}`} />
        <h3>{props.productName.toUpperCase()}</h3>
      </div>
      <div className={classes.details}>
        <p>{(props.price * props.quantity).toFixed(2)}$</p>
        <div className={classes.quantityDetails}>
          <div className={classes.actions}>
            <button
              className={classes.quantityButton}
              onClick={removeFromCartHandler}
            >
              -
            </button>
            <div className={classes.quantity}>
              x<span>{props.quantity}</span>
            </div>
            <button
              className={classes.quantityButton}
              onClick={addToCartHandler}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <button onClick={deleteFromCart} className={classes.removeButton}>
        X
      </button>
    </div>
  );
};
export default CartItem;
