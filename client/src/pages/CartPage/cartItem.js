import classes from "./cartItem.module.css";
const CartItem = (props) => {
  const removeFromCartHandler = () => {};
  const addToCartHandler = () => {};
  return (
    <div className={classes.cartItem}>
      <div className={classes.imgContainer}>
        <img
          className={classes.img}
          src={`/images/6ea53378-0b9f-4be6-b272-4ef02c9e7d06dsadasd (2).jpg`}
        />
        <h3>{props.productName.toUpperCase()}</h3>
      </div>
      <div className={classes.details}>
        <p>{props.price}$</p>
        <div className={classes.quantityDetails}>
          <div className={classes.actions}>
            <button onClick={removeFromCartHandler}>-</button>
            <div className={classes.quantity}>
              x<span>{props.quantity}</span>
            </div>
            <button onClick={addToCartHandler}>+</button>
          </div>
        </div>
      </div>
      <button className={classes.removeButton}>X</button>
    </div>
  );
};
export default CartItem;
