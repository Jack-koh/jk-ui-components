import React from "react";
import { Outlet } from "react-router-dom";
import "./Main.scss";

function Main() {
  return (
    <section id="jk-ui-components-demo-main">
      <Outlet />
    </section>
  );
}

export default Main;
