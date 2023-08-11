import { useState } from "react";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home.js";
import MealList from "./component/Shop/MealList";

import { useContext } from "react";
import AppContext from "./store/app-context";
// import Footer from "./component/Footer/Footer";

function App() {
  const ctx = useContext(AppContext);
  return (
    <>
      <div>
        <Header showCart={ctx.onRedirect} />
        {!ctx.onRedirect && <Home onClick={ctx.redirectHandle} />}
        {ctx.onRedirect && <MealList />}
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
