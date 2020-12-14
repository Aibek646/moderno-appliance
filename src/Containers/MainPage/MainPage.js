import React, { Component } from "react";
import classes from "./MainPage.module.css";
import Aux from "../../hoc/Aux";
import Logo from "../../Components/Logo/Logo";
import { NavLink } from "react-router-dom";
import NavigationItem from "../../Components/Navigation/NavigationItems/NavigationItem/NavigationItem";
// import MainPicture from "../../assets/images/Background.jpg";

class MainPage extends Component {
  render() {
    return (
      <Aux>
        <div className={classes.Mainpage}>
          <section className={classes.Introduction}>
            <NavLink to="/residential">
              <button
                className={classes.Button}
                style={{ verticalAlign: "middle" }}
              >
                <span>Residential</span>
              </button>
            </NavLink>
            <NavLink to="/commercial">
              <button
                className={classes.Button}
                style={{ verticalAlign: "middle" }}
              >
                <span>Commercial</span>
              </button>
            </NavLink>
          </section>
        </div>
      </Aux>
    );
  }
}

export default MainPage;
