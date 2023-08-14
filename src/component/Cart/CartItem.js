import classes from "./CartItem.module.css";
import { Typography } from "@mui/joy";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <Typography
          component="h2"
          id="modal-title"
          level="h3"
          textColor=" #363636"
          fontWeight="lg"
          mb={1}
        >
          {props.name}
        </Typography>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
