import React from "react";
import classes from "./Cards.module.css";
import Card from "../Cards/Card/Card";
import Aux from "../../../hoc/Aux";

const Cards = (props) => {
  return (
    <Aux>
      {props.cards.map((card) => (
        <Card
          name={card.name}
          text={card.text}
          key={card.id}
          image={card.image}
          clicked={() => props.clicked(card.id)}
        />
      ))}
    </Aux>
  );
};

export default Cards;
