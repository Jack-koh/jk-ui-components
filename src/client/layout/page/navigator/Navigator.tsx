import React, { useReducer } from "react";
import { NavLink } from "react-router-dom";
import { Accordion } from "lib/module/lib";
import { Logo, ToggleOff } from "lib/module/lib/Icons";
import produce from "immer";
import "./Navigator.scss";

type Action = { type: "expanded"; payload: boolean };

interface State {
  expanded: boolean;
}

const initialState: State = { expanded: true };
const reducer = (state: State, action: Action) => {
  return produce(state, (draft: State) => {
    switch (action.type) {
      case "expanded":
        draft["expanded"] = action.payload;
    }
  });
};

function Navigator() {
  const [state, setState] = useReducer(reducer, initialState);
  const { expanded } = state;

  return (
    <div id="gnb">
      <div id="jk-logo">
        <Logo />
        <div>
          <p>RCU CORE</p>
          <p>
            <span>React Compotion UI</span>
            <span>v0.1.4</span>
          </p>
        </div>
      </div>
      <Accordion
        rowToggle
        expanded={expanded}
        onChange={() => setState({ type: "expanded", payload: !expanded })}>
        <Accordion.Summary>
          <ToggleOff />
          <span>Components</span>
        </Accordion.Summary>
        <Accordion.Collapse>
          <NavLink to="/components/react-accordion">accordion</NavLink>
          <NavLink to="/components/react-button">button</NavLink>
          <NavLink to="/components/react-checkBox">checkBox</NavLink>
          <NavLink to="/components/react-toast">toast</NavLink>
          <NavLink to="/components/react-input">input</NavLink>
          <NavLink to="/components/react-modal">modal</NavLink>
          <NavLink to="/components/react-pagination">pagination</NavLink>
          <NavLink to="/components/react-popover">popover</NavLink>
          <NavLink to="/components/react-radio">radio</NavLink>
          <NavLink to="/components/react-select">select</NavLink>
          <NavLink to="/components/react-table">table</NavLink>
          {/* <NavLink to="/components/react-autoComplete">autoComplete</NavLink> */}
          <NavLink to="/components/react-dropZone">dropZone</NavLink>
          {/* <NavLink to="/components/react-loading">loading</NavLink> */}
          {/* <NavLink to="/components/react-noData">noData</NavLink> */}
          {/* <NavLink to="/components/react-resizer">resizer</NavLink> */}
          {/* <NavLink to="/components/react-search">search</NavLink> */}
          {/* <NavLink to="/components/react-slider">slider</NavLink> */}
          {/* <NavLink to="/components/react-switch">switch</NavLink> */}
          <NavLink to="/components/react-textArea">textArea</NavLink>
          <NavLink to="/components/react-toolTip">toolTip</NavLink>
        </Accordion.Collapse>
      </Accordion>
    </div>
  );
}

export default Navigator;
