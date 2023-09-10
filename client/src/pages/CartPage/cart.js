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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div style={{ marginBottom: "3rem", marginTop: "1rem" }}>
              Summary
            </div>
            <div style={{ marginBottom: "1rem" }}>
              Total:{" "}
              {cart
                .reduce(
                  (accumulator, currentItem) =>
                    accumulator + currentItem.price * currentItem.quantity,
                  0
                )
                .toFixed(2)}
              $
            </div>
            <button>Next Step</button>
          </div>
        </div>
      )}
    </section>
  );
};
export default Cart;
