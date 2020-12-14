import React from "react";

import Aux from "../../hoc/Aux";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <Aux>
      <button
        onClick={props.clicked}
        className={classes.Button}
        style={{ verticalAlign: "middle" }}
      >
        <span>{props.children}</span>
      </button>
    </Aux>
  );
};

export default Button;
