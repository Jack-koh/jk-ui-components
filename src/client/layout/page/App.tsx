import React from "react";
import { Outlet } from "react-router-dom";
import Navigator from "./navigator/Navigator";
import { Search } from "lib/module/lib/Icons";
import "./App.scss";

function App() {
  return (
    <div id="jk-ui-components-demo-app">
      <nav>
        <Navigator />
      </nav>
      <header>
        <button type="button">
          <Search />
          <span>Search...</span>
          <p>Ctrl+K</p>
        </button>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
