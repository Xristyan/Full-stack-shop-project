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
const reviewsPageSize = 3;
const Reviews = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [reviews, setReviews] = useState(props.reviews);
  const dispatch = useDispatch();
  const [isAddReviewActive, setIsAddReviewActive] = useState(false);
  const [sumOfRating, setSumOfRating] = useState(props.rating);
  const [numberOfReview, setNumberOfReviews] = useState(props.reviewsCount);
  const { requestHandler, isLoading, error } = useHttp();
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
  // useEffect(() => {
  //   requestHandler(
  //     {
  //       url: `http://localhost:8080/products/${props.productNumber}/reviews?page=${currentPage}&itemsPerPage=${reviewsPageSize}`,
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer " + localStorage.getItem("jwtToken"),
  //       },
  //     },
  //     (data) => {
  //       setReviews(data);
  //     }
  //   );
  // }, [currentPage]);
  const addnewReview = (newReview) => {
    requestHandler(
      {
        url: `http://localhost:8080/products/${props.productNumber}/addReview`,
        body: newReview,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwtToken"),
        },
      },
      (data) => {
        setIsAddReviewActive(false);
        setReviews((prev) => {
          return [data, ...prev];
        });
        setSumOfRating((prev) => {
          return prev + newReview.rating;
        });
        setNumberOfReviews((prev) => {
          return prev + 1;
        });
      }
    );
  };
  return (
    <section className={classes.reviews}>
      <button className={classes.reviewsButton}>
        Reviews ({numberOfReview})
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          {sumOfRating === 0 ? "0" : (sumOfRating / numberOfReview).toFixed(1)}

          <Stars
            rating={
              isNaN(sumOfRating / numberOfReview)
                ? 0
                : sumOfRating / numberOfReview
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
      {isLoading && <Loader />}
      {reviews.map((review) => {
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
      })}
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={numberOfReview}
        pageSize={reviewsPageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </section>
  );
};
export default Reviews;
