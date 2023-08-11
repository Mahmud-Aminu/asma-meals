import { FormatQuote } from "@mui/icons-material";
import classes from "./Card.module.css";
import { DeliveryDining, Fastfood, FoodBank } from "@mui/icons-material";
import { Typography } from "@mui/joy";

export const Service = (props) => {
  return (
    <>
      <li>
        <DeliveryDining
          sx={{ width: "100px", height: "100px", color: "#17cf97" }}
        />

        <Typography level="title-lg" sx={{ color: "white" }}>
          Fastest Delivery. <br />
          We Deliver before your food is turn cold, just five minute to order.
        </Typography>
      </li>
      <li>
        <Fastfood sx={{ width: "100px", height: "100px", color: "#17cf97" }} />
        <Typography level="title-lg" sx={{ color: "white" }}>
          Fast food
        </Typography>
      </li>
      <li>
        <FoodBank sx={{ width: "100px", height: "100px", color: "#17cf97" }} />
        <Typography level="title-lg" sx={{ color: "white" }}>
          Fresh food
        </Typography>
      </li>
    </>
  );
};

const Cards = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.user}>
        <h1>
          <FormatQuote />
        </h1>
        <Typography sx={{ color: "white", fontStyle: "italic" }}>
          The food was absolutely wonderful from preparation to presentation
          very pleasing. we especially enjoy the chicken stew, the aroma and
          seaseaning are just great
        </Typography>
        <div className={classes.username}>
          <h1>Mahmud</h1>
          <h3>Developer</h3>
        </div>
      </div>
    </div>
  );
};

export default Cards;
