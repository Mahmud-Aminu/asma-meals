import Input from "../UI/Input";
import { Button, CardOverflow } from "@mui/joy";
import { ArrowRightAlt } from "@mui/icons-material";
import { useRef } from "react";

const MealForm = (props) => {
  const amountInputRef = useRef();

  const increaseHandle = () => {
    return amountInputRef.current.value + 1;
  };
  const decreaseHandle = () => {
    if (amountInputRef.current.value < 1) {
      return;
    }
    return amountInputRef.current.value - 1;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    console.log(enteredAmountNumber);
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form onSubmit={submitHandler}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginLeft: "50px",
        }}
      >
        <Button
          sx={{
            width: 2,

            paddingX: 1,
            paddingY: 1,
            borderRadius: 0,
          }}
          variant="soft"
          onClick={decreaseHandle}
        >
          -
        </Button>
        <Input
          ref={amountInputRef}
          input={{
            id: "amount" + props.id,
            type: "number",

            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
          sx={{ width: 30, borderRadius: 0, paddingX: 0.5 }}
          size="sm"
        />
        <Button
          sx={{ width: 2, paddingX: 1, paddingY: 0, borderRadius: 0 }}
          variant="soft"
          onClick={increaseHandle}
        >
          +
        </Button>
      </div>
      <CardOverflow>
        <Button type="submit" variant="solid" color="danger" size="lg">
          Add to cart <ArrowRightAlt />
        </Button>
      </CardOverflow>
    </form>
  );
};

export default MealForm;
