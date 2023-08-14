import FriedRice from "./images/fried-rice.png";
import Burger from "./images/burger.jpg";
import ChickenStew from "./images/chicken-stew.png";
import FrenchFries from "./images/fench-fries.jpg";
import FishFriedRice from "./images/fish-friedrice.png";
import FriedChicken from "./images/fried-chicken.jpg";
import PeriWings from "./images/peri-peri-wings.png";
import RidgeYam from "./images/ridge-yam.png";
import Sandwich from "./images/sandwich.jpg";
import Tuwon from "./images/Tuwo_Shinkafa_with_garden_egg_Soup.jpg";
import Amala from "./images/thai-fried-chicken.jpg";

const data = [
  {
    id: "1",
    name: "Fried Rice",
    price: 29.88,
    src: <img src={FriedRice} alt="friedrice" loading="lazy" />,
    description:
      "Fried rice served with vegetables, soy sauce and chicken drumstick",
    tag: "lunch",
  },
  {
    id: "2",
    name: "Burger",
    src: <img src={Burger} alt="burger" loading="lazy" />,
    price: 7.88,
    description:
      "Fried rice served with vegetables, soy sauce and chicken drumstick",
    tag: "snacks",
  },
  {
    id: "3",
    name: "Rice and Spaghetti",
    src: <img src={ChickenStew} alt="chickenStew" loading="lazy" />,
    price: 15.88,
    description: "Serve with chicken stew and fried plantain. ",
    tag: "lunch",
  },
  {
    id: "4",
    name: "French Fries",
    src: <img src={FrenchFries} alt="frenchFries" loading="lazy" />,
    price: 8.88,
    description:
      "Fried rice served with vegetables, soy sauce and chicken drumstick",
    tag: "snacks",
  },
  {
    id: "5",
    name: "Fish Fried Rice",
    src: <img src={FishFriedRice} alt="fishFried" loading="lazy" />,
    price: 16.88,
    description:
      "Fried rice served with vegetables, soy sauce and chicken drumstick",
    tag: "lunch",
  },
  {
    id: "6",
    name: "Fried Chicken",
    src: <img src={FriedChicken} alt="friedChicken" loading="lazy" />,
    price: 24.48,
    description:
      "Fried rice served with vegetables, soy sauce and chicken drumstick",
    tag: "snacks",
  },
  {
    id: "7",
    name: "Peri Peri Wings",
    src: <img src={PeriWings} alt="periwings" loading="lazy" />,
    price: 7.99,
    description:
      "Peri-peri wings served with braccoli carrot and peri-peri sauce",
    tag: "snacks",
  },
  {
    id: "8",
    name: "Ridge Yam",
    src: <img src={RidgeYam} alt="ridgeyam" loading="lazy" />,
    price: 9.99,
    description:
      "Ridge Yam served with tomato stew and crispy fried chicken drumstick.",
    tag: "lunch",
  },
  {
    id: "9",
    name: "Sandwich",
    src: <img src={Sandwich} alt="sandwich" loading="lazy" />,
    price: 5.78,
    description:
      "Fried rice served with vegetables, soy sauce and chicken drumstick",
    tag: "snacks",
  },
  {
    id: "10",
    name: "Tuwon Shinkafa",
    src: <img src={Tuwon} alt="tuwo" loading="lazy" />,
    price: 11.44,
    description:
      "Fried rice served with vegetables, soy sauce and chicken drumstick",
    tag: "lunch",
  },
  {
    id: "11",
    name: "Amala",
    src: <img src={Amala} alt="amala" loading="lazy" />,
    price: 12.7,
    description:
      "Fried rice served with vegetables, soy sauce and chicken drumstick",
  },
];

export default data;
