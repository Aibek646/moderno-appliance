import React from "react";

import Aux from "../../hoc/Aux";
import classes from "./Button2.module.css";

const Button2 = (props) => {
  return (
    <Aux>
      <button className={classes.Button} style={{ verticalAlign: "middle" }}>
        <span>{props.children}</span>
      </button>
    </Aux>
  );
};

export default Button2;
