// import React, { Component } from "react";

// class DrawerToggle extends Component {
//   render() {
//     return <div onClick={(this.setState.closed = true)}></div>;
//   }
// }

// export default DrawerToggle;

import React from "react";
import classes from "./DrawerToggle.css";

const drawerToggle = props => (
  <div className={classes.DrawerToggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default drawerToggle;
