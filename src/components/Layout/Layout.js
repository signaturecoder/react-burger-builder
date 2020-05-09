import React from "react";
import classes from "./Layout.module.css";
import Aux from "../../hoc/Aux";
const Layout = (props) => (
  <Aux>
    <div>Toolbar, Side Drawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default Layout;
