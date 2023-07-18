import { useSelector } from "react-redux";
import CartIcon from "../Icons/CartIcon";
import classes from "./cartButton.module.css";
import { userActions } from "../Store/user";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const CartButton = (props) => {
  const [itemsCount, setItemsCount] = useState(0);
  let opacity;
  const itemsInCart = useSelector((state) => state.user.user);
  const isLogged = useSelector((state) => state.loginConfig.loggedIn);
  useEffect(() => {
    if (!itemsInCart.cart) {
      setItemsCount(0);
      return;
    }

    const count = itemsInCart.cart
      .map((item) => {
        return item.quantity;
      })
      .reduce((acc, curr) => {
        return acc + curr;
      }, 0);
    console.log(count);
    setItemsCount(count);
  }, [itemsInCart]);
  if (isLogged) {
    opacity = { opacity: 1 };
  } else {
    opacity = { opacity: 0 };
  }
  return (
    <Link to="Cart" className={classes.button}>
      <span className={classes.amount}>
        <span style={opacity} className={classes.badge}>
          {isLogged ? itemsCount : 0}
        </span>
        <CartIcon />
      </span>

      <span className={classes.cartName}>Cart</span>
    </Link>
  );
};
export default CartButton;
