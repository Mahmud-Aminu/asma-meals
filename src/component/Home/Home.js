import React from "react";
import classes from "./Home.module.css";
import { Button, Typography } from "@mui/material";
import ClientCard, { Service } from "../UI/Card";
const Home = (props) => {
  return (
    <div className={classes.home}>
      <div className={classes.header}>
        <div className={classes.actions}>
          <h2>Asma Meals</h2>
          <h3>Order testy and fresh meal anytime.</h3>
          <Button
            onClick={props.onClick}
            sx={{ color: " white", backgroundColor: "#17cf97" }}
            variant="soft"
          >
            <Typography sx={{ fontSize: "25px" }}> Explore now </Typography>{" "}
          </Button>
        </div>
      </div>
      <div className={classes.whyUs}>
        <h3> Why </h3> <h1> Choose us </h1>{" "}
        <ul>
          <Service />
        </ul>
        <Button
          onClick={props.onClick}
          sx={{ color: " white", backgroundColor: "#17cf97" }}
        >
          {" "}
          See our menu{" "}
        </Button>
      </div>
      <div className={classes.clients}>
        <h4>Our</h4>
        <h2>Client</h2>
        <div className={classes.feedback}>
          <ClientCard />
          <ClientCard />
          <ClientCard />
        </div>
        <Button
          onClick={props.onClick}
          sx={{ color: " white", backgroundColor: "#17cf97" }}
        >
          ORDER NOW
        </Button>
      </div>
    </div>
  );
};

export default Home;
