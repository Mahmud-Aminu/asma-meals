import React, { useState } from "react";

const AppContext = React.createContext({
  onRedirect: null,
  redirectHandle: () => {},
  openCart: false,
  openCartHandle: () => {},
  closeCartHandle: () => {},
});

export const AppProvider = (props) => {
  const [onRedirect, setOnRedirect] = useState(null);
  const [openCart, setOpenCart] = useState(false);

  const redirectHandle = () => {
    setOnRedirect(true);
  };

  const openCartHandle = () => {
    setOpenCart(true);
  };
  const closeCartHandle = () => {
    setOpenCart(false);
  };
  const value = {
    onRedirect: onRedirect,
    redirectHandle: redirectHandle,
    openCart: openCart,
    openCartHandle: openCartHandle,
    closeCartHandle: closeCartHandle,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContext;
