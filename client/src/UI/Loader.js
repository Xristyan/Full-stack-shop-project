import classes from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={classes.loader}>
      {[...Array(12)].map((el, i) => {
        return <div key={i} className={classes[`bar${i + 1}`]}></div>;
      })}
    </div>
  );
};
export default Loader;
