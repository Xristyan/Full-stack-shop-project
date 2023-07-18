import classes from "./shop.module.css";
import ProductElement from "./productElemet";
import { useLoaderData } from "react-router-dom";
import ShopHeading from "./shopHeading";
const Shop = () => {
  const events = useLoaderData();
  return (
    <>
      <ShopHeading />
      <div className={classes.sortContainer}></div>
      <div className={classes.line}></div>
      <div className={classes.productsContainer}>
        {events.map((el) => {
          return (
            <ProductElement
              key={el.id}
              id={el.id}
              image={el.images[0].name}
              price={el.price}
              name={el.name}
            />
          );
        })}
      </div>
    </>
  );
};
export default Shop;
export async function loader({ params }) {
  console.log(params);
  const response = await fetch("http://localhost:8080/product/getAll");
  if (!response.ok) {
    return {
      isError: true,
      errorMessage: "Could not fetch events",
    };
  }
  const data = response.json();
  return data;
}
