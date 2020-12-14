import React, { Component } from "react";
import axios from "axios";
import Spinner from "../../Components/UI/Spinner/Spinner";
import Aux from "../../hoc/Aux";
import classes from "./FullPage.module.css";
import Button from "../../Components/Button/Button";
import { Route } from "react-router-dom";
import ContactPage from "../ContactPage/ContactPage";
import Modal from "../../Components/UI/Modal/Modal";

class FullPage extends Component {
  state = {
    loadedPage: null,
    error: false,
    ordering: false,
  };

  componentDidMount() {
    if (this.props.match.params.id) {
      axios
        .get(
          `https://appliance-app2.firebaseio.com/cards/${this.props.match.params.id}.json`
        )
        .then((res) => {
          this.setState({ loadedPage: res.data });
        })
        .catch(this.setState({ error: true }));
    }
  }

  orderContinueHandler = () => {
    this.setState({ ordering: true });
    this.props.history.push(this.props.match.url + "/contact-data");
    console.log(this.props);
  };

  closeModal = () => {
    this.setState({ ordering: false });
  };

  render() {
    let page = this.state.error ? <Spinner /> : <p>Page can not be loaded!</p>;

    if (this.state.loadedPage) {
      page = (
        <Aux>
          <div className={classes.FullPage}>
            <h1 style={{ display: "flex", justifyContent: "center" }}>
              {this.state.loadedPage.name}
            </h1>
            <div className={classes.middleDiv}>
              <img
                className={classes.Picture}
                src={this.state.loadedPage.image}
                alt="app-picture"
              />
              <div className={classes.Text}>
                <ul>
                  <li> Heating element not working</li>
                  <li> Cooktop has no power</li>
                  <li> Indicator light keeps fluctuating</li>
                  <li> Worn out coils</li>
                  <li> Gas burners won’t start</li>
                  <li> Gas burners spark</li>
                </ul>
                <p>{this.state.loadedPage.text}</p>
              </div>
            </div>

            <div className={classes.lastDiv}>
              <img
                className={classes.Picture2}
                src="/images/appliance_brands.jpg"
                alt="brand-picture"
              />
            </div>
            <div className={classes.Button}>
              <Button clicked={this.orderContinueHandler}>Order Repair</Button>
            </div>
            <Modal show={this.state.ordering}>
              <Route
                path={this.props.match.path + "/contact-data"}
                render={(props) => (
                  <ContactPage closed={this.closeModal} {...this.props} />
                )}
              />
            </Modal>
          </div>
        </Aux>
      );
    }

    return (
      <Aux>
        <div className={classes.FullPage}>{page}</div>
      </Aux>
    );
  }
}

export default FullPage;
