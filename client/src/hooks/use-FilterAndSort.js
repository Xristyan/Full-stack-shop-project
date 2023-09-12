import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const useFilterAndSort = (productsData, peopleType, category) => {
  const [filteredData, setFilteredData] = useState([]);
  const colorFilter = useSelector((state) => state.filters.colorsFilter);
  const priceFilter = useSelector((state) => state.filters.priceFilter);
  const brandFilter = useSelector((state) => state.filters.brandFilter);
  const sortType = useSelector((state) => state.sort.sortType);
  console.log(productsData);
  useEffect(() => {
    const data = productsData.filter((item) => {
      console.log(peopleType, category);
      // const type = peopleType
      //   ? item.gender.toUpperCase() === peopleType.toUpperCase()
      //   : true;
      // const categories =
      //   category !== "All"
      //     ? item.category.toUpperCase() === category.toUpperCase()
      //     : true;
      const colors =
        colorFilter.length !== 0 ? colorFilter.includes(item.color) : true;

      const discountedPrice = +(
        item.price -
        item.price * (item.discount / 100)
      ).toFixed(2);

      const prices =
        priceFilter.length !== 0
          ? priceFilter.some(
              (filter) =>
                discountedPrice > filter.min && discountedPrice < filter.max
            )
          : true;
      const brands =
        brandFilter.length !== 0 ? brandFilter.includes(item.brand) : true;

      return colors && prices && brands;
    });
    if (sortType === "") {
      setFilteredData(data);
    }
    if (
      sortType.trim().split(" ").join("").toUpperCase() ===
      "alphabeticalA-Z".toUpperCase()
    ) {
      data.sort((a, b) => a.name.localeCompare(b.name));
      setFilteredData(data);
    }
    if (
      sortType.trim().split(" ").join("").toUpperCase() ===
      "alphabeticalZ-A".toUpperCase()
    ) {
      data.sort((a, b) => b.name.localeCompare(a.name));
      setFilteredData(data);
    }
    if (
      sortType.trim().split(" ").join("").toUpperCase() ===
      "priceAscending".toUpperCase()
    ) {
      data.sort(
        (a, b) =>
          a.price -
          a.price * (a.discount / 100) -
          (b.price - b.price * (b.discount / 100))
      );
      setFilteredData(data);
    }
    if (
      sortType.trim().split(" ").join("").toUpperCase() ===
      "priceDescending".toUpperCase()
    ) {
      data.sort(
        (a, b) =>
          b.price -
          b.price * (b.discount / 100) -
          (a.price - a.price * (a.discount / 100))
      );
      setFilteredData(data);
    }
  }, [peopleType, category, sortType, colorFilter, brandFilter, priceFilter]);
  return { filteredData };
};
export default useFilterAndSort;
