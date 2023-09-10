import classes from "./shop.module.css";
import ProductElement from "./productElemet";
import { useLoaderData, useParams } from "react-router-dom";
import ShopHeading from "./shopHeading";
import { useState } from "react";
import Filter from "./filters/filter";
import ProductsHeader from "./productsHeader";
import { useSelector } from "react-redux";
import useFilterAndSort from "../../hooks/use-FilterAndSort";

const Shop = () => {
  const { peopleType, category } = useParams();
  const [isVisible, setIsVisible] = useState(false);
  const screenWidth = useSelector((state) => state.screenWidth.screenWidth);
  const events = useLoaderData();
  const { filteredData } = useFilterAndSort(events, peopleType, category);
  // console.log(filteredData);
  const toggleFilter = () => {
    setIsVisible((prev) => {
      return !prev;
    });
  };

  return (
    <>
      <ShopHeading />

      <div className={classes.line}></div>

      <div className={classes.shopContainer}>
        {screenWidth >= 960 && (
          <Filter className={"unActive"} isVisible={isVisible} />
        )}
        <div style={{ width: "calc(97%)" }}>
          <ProductsHeader
            page={peopleType}
            category={category}
            toggleFilter={toggleFilter}
          />
          <div className={classes.productsContainer}>
            {filteredData.map((el) => {
              return (
                <ProductElement
                  key={el.id}
                  id={el.id}
                  image={el.images[0].name}
                  price={el.price}
                  name={el.name}
                  category={el.typeOfProduct}
                  gender={peopleType}
                  discount={el.discount}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Shop;
export async function loader({ params }) {
  const { peopleType, category } = params;
  console.log(peopleType, category);
  console.log(params);
  const response = await fetch(
    `http://localhost:8080/products/getCategory?gender=${peopleType}&category=${category}`
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
