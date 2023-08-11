import classes from "./Footer.module.css";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.logo}>
        <p>&copy; {new Date().getFullYear()} Asma Meals</p>
      </div>
      <div className={classes.social}>
        <a href="index.html">
          {" "}
          <Twitter />
        </a>

        <a href="index.html">
          <Instagram />
        </a>
        <a href="index.html">
          {" "}
          <Facebook />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
