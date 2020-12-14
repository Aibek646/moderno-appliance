import React from "react";
import Logo from "../Logo/Logo";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <div className={classes.Contact}>
        <h1 className={classes.Underline}>Contact Us</h1>
        <h1>
          {" "}
          <i className="fas fa-phone-alt" style={{ marginRight: "10px" }}></i>
          818-319-7526
        </h1>
        <h1>
          <i className="far fa-envelope"></i> modernoappliance@gmail.com
        </h1>
        <h1>
          {" "}
          <i className="far fa-clock" style={{ marginRight: "10px" }}></i>
          Mon-Sun: 9:00am-7:00pm
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
