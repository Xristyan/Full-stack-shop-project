import classes from "./description.module.css";
const Description = (props) => {
  const { events } = props;
  return (
    <div className={classes.descriptionContainer}>
      <h1> {events.name.toUpperCase()}</h1>
      <div style={{ marginBottom: "1rem" }}>{events.brand}</div>
      <div className={classes.priceContent}>
        <div
          className={`${classes.price} ${
            events.discount > 0 && classes.discounted
          }`}
        >
          {events.price}$
        </div>{" "}
        {events.discount > 0 && (
          <span>
            {(events.price - events.price * (events.discount / 100)).toFixed(2)}
            $
          </span>
        )}
        {events.discount > 0 && (
          <div className={classes.discount}>{events.discount}% off</div>
        )}
      </div>

      <p>Description: {events.description}</p>
      <ul>
        <li>
          <p>Gender: {events.gender}</p>
        </li>
        <li>
          <p>Material: {events.material}</p>
        </li>
        <li>
          <div className={classes.colorContainer}>
            Color: {events.color}
            <div
              style={{ backgroundColor: events.color }}
              className={classes.color}
            ></div>
          </div>
        </li>
      </ul>
      <div className={classes.sizes}>
        <button className={classes.square}>XS</button>
        <button className={classes.square}>S</button>
        <button className={classes.square}>M</button>
        <button className={classes.square}>L</button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className={classes.button} onClick={props.addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default Description;
