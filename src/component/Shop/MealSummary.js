import classes from "./MealSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <div className={classes.cover}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
      </div>
    </section>
  );
};

export default MealsSummary;
