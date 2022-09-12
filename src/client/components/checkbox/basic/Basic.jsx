import React from "react";
import { CheckBox } from "lib/module/lib";
import { Ex } from "client/layout";
import source from "./source";

export function Basic() {
  return (
    <Ex source={source}>
      <React.Fragment>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
          <CheckBox />
          <CheckBox indeterminate />
          <CheckBox checked={true} disabled />
          <CheckBox disabled />
          <CheckBox className="error" />
        </div>
      </React.Fragment>
    </Ex>
  );
}
