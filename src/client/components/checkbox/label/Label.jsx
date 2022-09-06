import React from "react";
import { CheckBox } from "lib/module/lib";
import { Ex } from "client/layout";
import source from "./source";

export function Label() {
  return (
    <Ex source={source}>
      <React.Fragment>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <CheckBox label="Label" />
            <CheckBox disabled label="Disabled" />
          </div>
        </div>
      </React.Fragment>
    </Ex>
  );
}
