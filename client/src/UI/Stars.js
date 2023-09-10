import classes from "./Stars.module.css";
const Stars = (props) => {
  return (
    <div className={classes.starsContainer}>
      {[...Array(5)].map((star, i) => {
        let width;
        if (props.rating - (i + 1) >= 0) {
          width = { width: "100%" };
        } else {
          const percentage = (props.rating - Math.floor(props.rating)) * 100;
          width =
            i + 1 - props.rating >= 1
              ? { width: `0%` }
              : { width: `${percentage}%` };
        }

        return (
          <div key={i + 1} className={classes.star}>
            <div style={width} className={classes.starContent}></div>
          </div>
        );
      })}
    </div>
  );
};
export default Stars;
