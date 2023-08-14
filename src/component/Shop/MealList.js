import MealCard from "./MealCard";
import classes from "./MealList.module.css";
import data from "../../data";
const MealList = () => {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        {data.map((meal) => (
          <MealCard
            key={meal.id}
            id={meal.id}
            name={meal.name}
            src={meal.src}
            price={meal.price}
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

export default MealList;
