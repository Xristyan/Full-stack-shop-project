import { useLoaderData, useParams } from "react-router-dom";
import classes from "./productPage.module.css";
import Carousel from "react-multi-carousel";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../Store/user";
import { useSelector } from "react-redux";
import { loginConfigActions } from "../../Store/loginConfig";
const ProductPage = (props) => {
  const dispatch = useDispatch();
  const events = useLoaderData();
  const user = useSelector((state) => state.user.user);
  const isLogged = useSelector((state) => state.loginConfig.loggedIn);
  // console.log(events.images[0].name);
  const addtoCart = () => {
    if (!isLogged || !user.id) return;
    dispatch(
      userActions.addtoCart({
        productId: events.id,
        productName: events.name,
        imageName: events.images[0].name,
        price: events.price,
      })
    );
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 40,
    },
  };
  return (
    <>
      <section className={classes.productContainer}>
        <div className={classes.productInfoContainer}>
          <div className={classes.imageContainer}>
            <Carousel
              transitionDuration={500}
              draggable={true}
              ssr={true}
              responsive={responsive}
            >
              {events.images.map((img) => {
                return (
                  <img
                    key={img.name}
                    className={classes.image}
                    src={`/images/${img.name}`}
                  />
                );
              })}
            </Carousel>
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
            Color: {events.color}
            <div
              style={{ backgroundColor: events.color }}
              className={classes.color}
            ></div>
          </div>
          <p>Description: {events.description}</p>
          <p>Gender: {events.gender}</p>
          <p>Material: {events.material}</p>

          <div className={classes.sizes}>
            <div className={classes.square}>XS</div>
            <div className={classes.square}>S</div>
            <div className={classes.square}>M</div>
            <div className={classes.square}>L</div>
          </div>
          <button className={classes.button} onClick={addtoCart}>
            Add to Cart
          </button>
        </div>
      </section>
    </>
  );
};
export default ProductPage;
export async function loader({ params }) {
  console.log(params);
  const response = await fetch(
    `http://localhost:8080/product/getProduct/${params.eventId}`
  );
  if (!response.ok) {
    return {
      isError: true,
      errorMessage: "Could not fetch events",
    };
  }
  const data = response.json();
  return data;
}
