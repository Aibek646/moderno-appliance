import React from "react";
import Aux from "../../../hoc/Aux";
import Backdrop from "../../UI/Backdrop/Backdrop";
import classes from "./SideDrawer.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";

const SideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} closeBackdrop={props.closed} />

      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>{" "}
        <nav>
          <NavigationItems closed={props.closed} />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;
