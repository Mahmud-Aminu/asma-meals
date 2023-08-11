import MealCard from "./MealCard";
import classes from "./MealList.module.css";
import data from "../../data";
const FoodList = () => {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        {data.map((meal) => (
          <MealCard
            key={meal.id}
            id={meal.id}
            title={meal.title}
            src={meal.src}
            amount={meal.amount}
            description={meal.description}
          />
        ))}

        <div className={classes.fillingEmptSpace}></div>
        <div className={classes.fillingEmptSpace}></div>
        <div className={classes.fillingEmptSpace}></div>
        <div className={classes.fillingEmptSpace}></div>
      </div>
    </div>
  );
};

export default FoodList;
