import Stars from "../../UI/Stars";
import classes from "./reviewCard.module.css";
const ReviewCard = (props) => {
  return (
    <div className={classes.reviewContainer} key={props.id}>
      <h3>{props.userName}</h3>
      <div className={classes.reviewInfo}>
        <span>{props.rating}</span>
        <Stars rating={props.rating} />
        <span> {props.date}</span>
      </div>
      <p>{props.content}</p>
    </div>
  );
};
export default ReviewCard;
