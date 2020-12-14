import React from "react";
import AppLogo from "../../assets/images/Logo.jpg";
import classes from "./Logo.module.css";

const Logo = (props) => {
  return (
    <div>
      <img
        style={{ width: props.width, height: props.height }}
        className={classes.Logo}
        src={AppLogo}
      />
    </div>
  );
};

export default Logo;
