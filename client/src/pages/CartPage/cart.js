import classes from "./cart.module.css";
import CartItem from "./cartItem";
import { useSelector } from "react-redux";
const Cart = () => {
  const user = useSelector((state) => state.user.user);
  console.log(user.cart);
  return (
    <section className={classes.cartContainer}>
      <div>
        {user.cart.map((item) => {
          return (
            <CartItem
              key={item.id}
              productName={item.productName}
              productDescription={item.productDescription}
              price={item.price}
              quantity={item.quantity}
            />
          );
        })}
      </div>
      <div className={classes.summary}>
        <p>Summary</p>
      </div>
    </section>
  );
};
export default Cart;
