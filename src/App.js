import Header from "./component/Header/Header";
import Home from "./component/Home/Home.js";
import Meals from "./component/Shop/Meals";

import { useContext } from "react";
import AppContext from "./store/app-context";
import Cart from "./component/Cart/Cart";
import CartProvider from "./store/CartProvider";
// import Footer from "./component/Footer/Footer";

function App() {
  const ctx = useContext(AppContext);
  return (
    <CartProvider>
      <div>
        <Header showCart={ctx.onRedirect} />
        {!ctx.onRedirect && <Home onClick={ctx.redirectHandle} />}
        {ctx.onRedirect && <Meals />}

        <Cart />
      </div>
      {/* <Footer /> */}
    </CartProvider>
  );
}

export default App;
