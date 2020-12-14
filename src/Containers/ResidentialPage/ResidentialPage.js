import React, { Component } from "react";
import classes from "./ResidentialPage.module.css";
import Aux from "../../hoc/Aux";
import Cards from "../../Components/UI/Cards/Cards";
import axios from "axios";
import Spinner from "../../Components/UI/Spinner/Spinner";

class ResidentialPage extends Component {
  state = {
    cards: null,
    error: false,
    selectedCardId: null,
  };

  componentDidMount() {
    axios
      .get("https://appliance-app2.firebaseio.com/cards/.json")
      .then((res) => {
        console.log(res.data);
        this.setState({ cards: res.data });
        // console.log(this.state.cards);
        console.log(res.data + "my-data");
      })
      .catch((err) =>
        this.setState({
          error: true,
        })
      );
  }

  cardSelectedHandler = (id) => {
    this.props.history.push({
      pathname: "/" + id,
    });
  };

  render() {
    return (
      <Aux>
        <div className={classes.ResidentialPage}>
          <div className={classes.Heading}>
            <h1>Residential Appliances</h1>
          </div>

          <div className={classes.CardsRow}>
            {this.state.cards ? (
              <Cards
                cards={this.state.cards}
                clicked={this.cardSelectedHandler}
              />
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      </Aux>
    );
  }
}

export default ResidentialPage;
