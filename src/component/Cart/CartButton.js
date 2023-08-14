import { useContext } from "react";

import { Button } from "@mui/joy";
import { ShoppingCartSharp } from "@mui/icons-material";

import CartContext from "../../store/cart-context";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  return (
    <>
      <Button
        variant="outline"
        sx={{ borderColor: "#17cf97;" }}
        onClick={props.onClick}
      >
        <ShoppingCartSharp sx={{ color: "white" }} />

        <h1 style={{ color: "white", padding: "5px" }}>{numberOfCartItems}</h1>
      </Button>
    </>
  );
};

export default CartButton;
