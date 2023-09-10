import React from "react";
import classes from "./Pagination.module.css";
import { usePagination, DOTS } from "../hooks/use-Pagination";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 items in pagination range, we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className={`${classes["pagination-container"]} ${classes[className]}`}>
      {/* Left navigation arrow */}
      <li
        className={`${classes["pagination-item"]} ${
          currentPage === 1 ? classes["disabled"] : ""
        }`}
        onClick={onPrevious}
      >
        <div className={classes["arrow"]} />
      </li>
      {paginationRange.map((pageNumber, i) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return (
            <li
              key={i}
              className={`${classes["pagination-item"]} ${classes["dots"]}`}
            >
              &#8230;
            </li>
          );
        }

        // Render our Page Pills
        return (
          <li
            key={i}
            className={`${classes["pagination-item"]} ${
              pageNumber === currentPage ? classes["selected"] : ""
            }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li
        className={`${classes["pagination-item"]} ${
          currentPage === lastPage ? classes["disabled"] : ""
        }`}
        onClick={onNext}
      >
        <div className={classes["arrow"]} />
      </li>
    </ul>
  );
};

export default Pagination;
