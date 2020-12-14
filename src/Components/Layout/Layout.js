import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Footer from "../Footer/Footer";
import classes from "./Layout.module.css";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {
        showSideDrawer: !prevState.showSideDrawer,
      };
    });
  };

  sideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: !this.state.showSideDrawer,
    });
  };
  render() {
    return (
      <Aux>
        <div className={classes.Layout}>
          <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
          <SideDrawer
            open={this.state.showSideDrawer}
            closed={this.sideDrawerClosedHandler}
          />
          <main>{this.props.children}</main>
          <Footer />
        </div>
      </Aux>
    );
  }
}

export default Layout;
