import classes from "./shop.module.css";
import ProductElement from "./productElemet";
import { json, useLoaderData, useParams } from "react-router-dom";
import ShopHeading from "./shopHeading";
import { useEffect, useRef, useState } from "react";
import Filter from "./filters/filter";
import ProductsHeader from "./productsHeader";
import { useSelector } from "react-redux";
import useFilterAndSort from "../../hooks/use-FilterAndSort";
import Pagination from "../../UI/Pagination";
import useHttp from "../../hooks/use-http";
import Loader from "../../UI/Loader";
const PRODUCT_PAGE_SIZE = 9;
const Shop = () => {
  // const products = useLoaderData();
  const headingRef = useRef();
  const [products, setProducts] = useState([]);
  const { peopleType, category } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const screenWidth = useSelector((state) => state.screenWidth.screenWidth);
  const colorFilter = useSelector((state) => state.filters.colorsFilter);
  const priceFilter = useSelector((state) => state.filters.priceFilter);
  const brandFilter = useSelector((state) => state.filters.brandFilter);
  const { requestHandler, isLoading, error } = useHttp();

  // const { products } = useFilterAndSort(events, peopleType, category);

  useEffect(() => {
    requestHandler(
      {
        url: `http://localhost:8080/products/getCategory?peopleType=${peopleType}&category=${category}&page=${currentPage}&itemsPerPage=${PRODUCT_PAGE_SIZE}`,
        body: {
          colors: colorFilter,
          brands: brandFilter,
          priceRange: priceFilter,
        },
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwtToken"),
        },
      },
      (data) => {
        setProducts(data);
      }
    );
  }, [
    currentPage,
    peopleType,
    category,
    requestHandler,
    colorFilter,
    priceFilter,
    brandFilter,
  ]);

  const toggleFilter = () => {
    setIsVisible((prev) => {
      return !prev;
    });
  };

  return (
    <>
      <div>
        <ShopHeading />
      </div>
      <div ref={headingRef} className={classes.line}></div>

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
          {isLoading ? (
            <Loader />
          ) : (
            <div className={classes.productsContainer}>
              {products.map((el) => {
                return (
                  <ProductElement
                    key={el.id}
                    id={el.id}
                    image={el.images[0].name}
                    price={el.price}
                    name={el.name}
                    category={el.category}
                    gender={peopleType}
                    discount={el.discount}
                  />
                );
              })}
            </div>
          )}
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={20}
            pageSize={PRODUCT_PAGE_SIZE}
            onPageChange={(page) => {
              headingRef.current?.scrollIntoView({
                behavior: "auto",
                block: "center",
                inline: "nearest",
              });
              setCurrentPage(page);
            }}
          />
        </div>
      </div>
    </>
  );
};
export default Shop;
export async function loader({ params }) {
  const { peopleType, category } = params;

  const response = await fetch(
    `http://localhost:8080/products/getCategory?peopleType=${peopleType}&category=${category}&page=1&itemsPerPage=${PRODUCT_PAGE_SIZE}`,
    {
      method: "POST",
      body: JSON.stringify({
        colors: [],
        brands: ["adidas", "nike"],
        priceRange: [],
      }),
      headers: { "Content-Type": "application/json" },
    }
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
