import React from "react";
import { CheckBox } from "lib/module/lib";
import { Ex } from "client/layout";
import source from "./source";

export function Label() {
  return (
    <Ex source={source}>
      <React.Fragment>
        <CheckBox label="Label" name="1" />
        <CheckBox disabled label="Disabled" />
      </React.Fragment>
    </Ex>
  );
}
