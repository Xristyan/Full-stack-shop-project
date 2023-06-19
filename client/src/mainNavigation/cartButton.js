import CartIcon from "../Icons/CartIcon";
import classes from "./cartButton.module.css";
const CartButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.amount}>
        <span className={classes.badge}>1</span>
        <CartIcon />
      </span>

      <span className={classes.cartName}>Cart</span>
    </button>
  );
};
export default CartButton;
