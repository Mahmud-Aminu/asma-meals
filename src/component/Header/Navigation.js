import "./Navigation.css";
import { Menu, Close } from "@mui/icons-material";

import { useState, useContext } from "react";
import AppContext from "../../store/app-context";
import CartButton from "../Cart/CartButton";

const Navbar = (props) => {
  const [clicked, setClicked] = useState(false);

  const showDrawer = () => {
    setClicked(true);
  };
  const closeDrawer = () => {
    setClicked(false);
  };

  const ctx = useContext(AppContext);

  return (
    <>
      <nav className="nav">
        <div className="logo">
          <a href="index.html">Asma Meals</a>
        </div>

        <div>
          <ul className={clicked ? "navbar active" : "navbar"}>
            <li>
              <a href="/"> Home </a>
            </li>
            <li>
              <a href="/"> Menu </a>
            </li>
            <li>
              <a href="/"> About </a>
            </li>
            <li>
              <a href="/"> Contact </a>
            </li>
          </ul>
        </div>
        {props.showCart && <CartButton onClick={ctx.openCartHandle} />}
        <div className="mobile">
          <i onClick={!clicked ? showDrawer : closeDrawer}>
            {!clicked ? <Menu /> : <Close />}
          </i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
