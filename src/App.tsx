import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "client/router/Router";
import "./client/theme.js";
import "lib/module/module.scss";
import "client/reset.scss";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
