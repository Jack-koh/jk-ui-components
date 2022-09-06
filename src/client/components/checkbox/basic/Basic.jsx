import React from "react";
import { CheckBox } from "lib/module/lib";
import { Ex } from "client/layout";
import source from "./source";

export function Basic() {
  return (
    <Ex source={source}>
      <React.Fragment>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
          <CheckBox checked={1} />
          <CheckBox checked={0} />
          <CheckBox checked={1} disabled />
          <CheckBox disabled />
        </div>
      </React.Fragment>
    </Ex>
  );
}
