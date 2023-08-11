import { useState } from "react";

import {
  Input,
  AspectRatio,
  Button,
  Card,
  CardContent,
  CardOverflow,
  Typography,
} from "@mui/joy";
import { ArrowRightAlt } from "@mui/icons-material";

export default function MealCard(props) {
  const [amount, setAmount] = useState("");

  const changeHandle = (e) => {
    setAmount(e.target.value);
  };
  const increaseHandle = () => {
    setAmount(+amount + 1);
  };
  const decreaseHandle = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  return (
    <Card sx={{ width: 200, maxWidth: "100%", boxShadow: "lg", zIndex: -1 }}>
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
          {props.src}
          {/* <img
            src={props.src}
            srcSet="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
          /> */}
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="title-lg">{props.title}</Typography>
        <Typography level="body-xs">{props.description}</Typography>
        <Typography
          level="body-lg"
          sx={{ mt: 1, fontWeight: "xl" }}
          endDecorator={
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
                sx={{ width: 30, borderRadius: 0, paddingX: 0.5 }}
                size="sm"
                onChange={changeHandle}
                value={amount}
              />
              <Button
                sx={{ width: 2, paddingX: 1, paddingY: 0, borderRadius: 0 }}
                variant="soft"
                onClick={increaseHandle}
              >
                +
              </Button>
            </div>
          }
        >
          ${props.amount}{" "}
        </Typography>
      </CardContent>
      <CardOverflow>
        <Button variant="solid" color="danger" size="lg">
          Add to cart <ArrowRightAlt />
        </Button>
      </CardOverflow>
    </Card>
  );
}
