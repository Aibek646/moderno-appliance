import React from "react";
import Aux from "../../../../hoc/Aux";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.Card} onClick={props.clicked}>
      <div className={classes.CardHeader}>
        <div>
          <img className={classes.Image} src={props.image} alt="app-picture" />
        </div>
      </div>
      <div className={classes.CardBody}>
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default Card;
