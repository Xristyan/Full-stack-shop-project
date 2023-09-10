import { useLoaderData, useParams } from "react-router-dom";
import classes from "./productPage.module.css";
import { useDispatch } from "react-redux";
import { userActions } from "../../Store/user";
import { useSelector } from "react-redux";
import { useState } from "react";
import Reviews from "./reviews";
import Description from "./description";

const ProductPage = (props) => {
  const { eventId } = useParams();
  const dispatch = useDispatch();
  const events = useLoaderData();
  console.log(events);
  const user = useSelector((state) => state.user.user);
  const isLogged = useSelector((state) => state.loginConfig.loggedIn);
  const [currImage, setCurrImage] = useState(0);
  const addToCart = () => {
    if (!isLogged || !user.id) return;
    dispatch(
      userActions.addtoCart({
        productId: events.product.id,
        productName: events.product.name,
        imageName: events.product.images[0].name,
        price: events.product.price,
      })
    );
  };
  const prevImage = () => {
    if (currImage === 0) return;
    setCurrImage((prevImage) => {
      return prevImage - 1;
    });
  };
  const nextImage = () => {
    if (currImage === events.product.images.length - 1) return;
    setCurrImage((prevImage) => {
      return prevImage + 1;
    });
  };
  return (
    <>
      <section className={classes.productContainer}>
        <div className={classes.imagesContainer}>
          <div className={classes.dots}>
            {events.product.images.map((img, i) => {
              return (
                <img
                  className={`${i === currImage && classes.active}`}
                  onClick={() => {
                    setCurrImage(i);
                  }}
                  id={i}
                  key={img.id}
                  src={`/images/${img.name}`}
                />
              );
            })}
          </div>
          <div className={classes.displayedImage}>
            <button className={classes.btnLeft} onClick={prevImage}>
              {"<"}
            </button>
            <img
              className={classes.image}
              src={`/images/${events.product.images[currImage].name}`}
            />
            <button className={classes.btnRight} onClick={nextImage}>
              {">"}
            </button>
          </div>
        </div>
        <Description events={events.product} addToCart={addToCart} />
        <Reviews
          productNumber={eventId}
          reviews={events.product.reviews}
          reviewsCount={events.reviewsCount}
          rating={events.averageRating}
        />
      </section>
    </>
  );
};
export default ProductPage;
export async function loader({ params }) {
  console.log(params);
  const response = await fetch(
    `http://localhost:8080/products/getProduct/${params.eventId}?itemsPerPage=5`
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
