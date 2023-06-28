import { useLoaderData, useParams } from "react-router-dom";
import classes from "./productPage.module.css";
const ProductPage = (props) => {
  const events = useLoaderData();

  console.log(events);
  return (
    <>
      <section className={classes.productContainer}>
        <div className={classes.productInfoContainer}>
          <div className={classes.imageContainer}>
            <img
              className={classes.image}
              src={`/images/${events.images[0].name}`}
            />
          </div>
          <div className={classes.productInfo}>
            <p>{events.name}</p>
            <p>{events.price}$</p>
          </div>
        </div>
        {/* <div className={classes.line}></div> */}
        <div className={classes.descriptionContainer}>
          <h1> {events.brand.toUpperCase()}</h1>
          <p>{events.typeOfProduct}</p>
          <div className={classes.paragraphColor}>
            {events.color}
            <div
              style={{ backgroundColor: events.color }}
              className={classes.color}
            ></div>
          </div>
          <p> {events.description}</p>
          <p> {events.gender}</p>

          <div className={classes.sizes}>
            <div className={classes.square}>XS</div>
            <div className={classes.square}>S</div>
            <div className={classes.square}>M</div>
            <div className={classes.square}>L</div>
          </div>
          <button>Add to Cart</button>
        </div>
      </section>
    </>
  );
};
export default ProductPage;
