import Navigation from "./Navigation";

const Header = (props) => {
  return (
    <>
      <Navigation showCart={props.showCart} />
    </>
  );
};

export default Header;
