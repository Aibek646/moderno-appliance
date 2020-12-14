import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";
import Button2 from "../../Button/Button2";

const navigationItems = (props) => {
  return (
    <ul className={classes.NavItems}>
      <NavigationItem closed={props.closed} link="/">
        Main Page
      </NavigationItem>
      <NavigationItem closed={props.closed} link="#">
        Contact{" "}
      </NavigationItem>
      <NavigationItem closed={props.closed} link="#">
        Services
      </NavigationItem>

      <li className={classes.Telephone}>
        <i
          style={{ fontFamily: "Architects Daughter" }}
          className="fas fa-phone-alt"
        >
          {" "}
          818-319-7526
        </i>
      </li>
    </ul>
  );
};

export default navigationItems;
