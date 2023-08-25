import { useSelector } from "react-redux";
import CartIcon from "../Icons/CartIcon";
import classes from "./cartButton.module.css";
import { userActions } from "../Store/user";
import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
const CartButton = (props) => {
  const [itemsCount, setItemsCount] = useState(0);
  let opacity;
  const itemsInCart = useSelector((state) => state.user.cart);
  const isLogged = useSelector((state) => state.loginConfig.loggedIn);
  useEffect(() => {
    if (!itemsInCart) {
      opacity = { opacity: 0 };
      setItemsCount(0);
      return;
    }
    const count = itemsInCart
      .map((item) => {
        return item.quantity;
      })
      .reduce((acc, curr) => {
        return acc + curr;
      }, 0);
    setItemsCount(count);
  }, [itemsInCart]);
  if (isLogged && itemsInCart.length !== 0) {
    opacity = { opacity: 1 };
  } else {
    opacity = { opacity: 0 };
  }
  return (
    <NavLink
      className={({ isActive }) =>
        [classes.button, isActive ? classes.active : null].join(" ")
      }
      to="Cart"
    >
      <span className={classes.amount}>
        <span style={opacity} className={classes.badge}>
          {isLogged ? itemsCount : 0}
        </span>
        <CartIcon />
      </span>
    </NavLink>
  );
};
export default CartButton;
