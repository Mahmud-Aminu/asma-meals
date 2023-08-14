import { useContext } from "react";
import MealForm from "./MealForm";
import {
  AspectRatio,
  Card,
  CardContent,
  CardOverflow,
  Typography,
} from "@mui/joy";
import CartContext from "../../store/cart-context";

export default function MealCard(props) {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <Card
      sx={{
        width: 200,
        maxWidth: "100%",
        boxShadow: "0 1px 15px 10px rgba(0, 0, 0, 0.25)",
      }}
    >
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>{props.src}</AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="title-lg">{props.name}</Typography>
        <Typography level="body-xs">{props.description}</Typography>
        <Typography level="body-lg" sx={{ mt: 1, fontWeight: "xl" }}>
          {price}{" "}
        </Typography>
      </CardContent>
      <MealForm id={props.id} onAddToCart={addToCartHandler} />
    </Card>
  );
}
