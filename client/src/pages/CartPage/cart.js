import classes from "./cart.module.css";
import CartItem from "./cartItem";
import { useSelector } from "react-redux";
const Cart = () => {
  const cart = useSelector((state) => state.user.cart);

  return (
    <section className={classes.cartContainer}>
      <div className={classes.itemsContainer}>
        {cart.length !== 0 ? (
          cart.map((item) => {
            return (
              <CartItem
                key={item.productId}
                productId={item.productId}
                imageName={item.imageName}
                productName={item.productName}
                productDescription={item.productDescription}
                price={item.price}
                quantity={item.quantity}
              />
            );
          })
        ) : (
          <p className={classes.empty}>Cart is empty</p>
        )}
      </div>
      {cart.length !== 0 && (
        <div className={classes.summary}>
          <p>Summary</p>
        </div>
      )}
    </section>
  );
};
export default Cart;
