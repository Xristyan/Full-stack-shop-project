import { useState } from "react";
import Stars from "../../UI/Stars";
import ReviewCard from "./reviewCard";
import classes from "./reviews.module.css";
import { modalActions } from "../../Store/modalSlice";
import useHttp from "../../hooks/use-http";
import { useSelector, useDispatch } from "react-redux";
import NewReview from "./newReview";
import Loader from "../../UI/Loader";
import Pagination from "../../UI/Pagination";
import { useEffect } from "react";
const reviewsPageSize = 4;
const Reviews = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [reviews, setReviews] = useState([]);
  const dispatch = useDispatch();
  const [isAddReviewActive, setIsAddReviewActive] = useState(false);
  const { requestHandler, isLoading, error } = useHttp();
  const [reviewsCount, setReviewsCount] = useState(0);
  const [sumOfRating, setSumOfRating] = useState(0);
  const loggedIn = useSelector((state) => state.loginConfig.loggedIn);
  const newReviewHandler = () => {
    if (!loggedIn) {
      dispatch(modalActions.showForm());
      return;
    }
    setIsAddReviewActive((prev) => {
      return !prev;
    });
  };
  useEffect(() => {
    requestHandler(
      {
        url: `http://localhost:8080/products/${props.productNumber}/reviews?page=${currentPage}&itemsPerPage=${reviewsPageSize}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwtToken"),
        },
      },
      (data) => {
        setReviews(data.reviews);
        setReviewsCount(data.reviewsCount);
        setSumOfRating(data.averageRating);
      }
    );
  }, [currentPage]);
  const addnewReview = (newReview) => {
    requestHandler(
      {
        url: `http://localhost:8080/products/${props.productNumber}/addReview?page=${currentPage}&itemsPerPage=${reviewsPageSize}`,
        body: newReview,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwtToken"),
        },
      },
      (data) => {
        setIsAddReviewActive(false);
        setReviews(data.reviews);
        setReviewsCount(data.reviewsCount);
        setSumOfRating(data.averageRating);
      }
    );
  };
  return (
    <section className={classes.reviews}>
      <button className={classes.reviewsButton}>
        Reviews ({reviewsCount})
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          {sumOfRating === 0 ? "0" : (sumOfRating / reviewsCount).toFixed(1)}

          <Stars
            rating={
              isNaN(sumOfRating / reviewsCount) ? 0 : sumOfRating / reviewsCount
            }
          />
        </div>
      </button>
      <button className={classes.newReviewButtton} onClick={newReviewHandler}>
        {isAddReviewActive ? "Delete Review" : "Add Review"}
      </button>
      {isAddReviewActive && (
        <NewReview
          error={error}
          reviewHandler={addnewReview}
          product={props.productNumber}
        />
      )}
      {isLoading ? (
        <Loader />
      ) : (
        reviews.map((review) => {
          return (
            <ReviewCard
              key={review.id}
              id={review.id}
              date={review.date}
              rating={review.rating}
              userName={review.userName}
              content={review.content}
            />
          );
        })
      )}
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={reviewsCount}
        pageSize={reviewsPageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </section>
  );
};
export default Reviews;
