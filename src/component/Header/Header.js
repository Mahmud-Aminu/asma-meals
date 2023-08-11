import React from "react";
import Navigation from "./Navigation";
import Cart from "../Cart/Cart";
import { useContext } from "react";
import AppContext from "../../store/app-context";

const Header = (props) => {
  const ctx = useContext(AppContext);
  return (
    <>
      <Navigation showCart={props.showCart} />
      <Cart />
    </>
  );
};

export default Header;
