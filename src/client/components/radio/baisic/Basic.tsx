import React from "react";
import { Radio } from "lib/module/lib";
import { Ex } from "client/layout";
import source from "./source";

export function Basic() {
  return (
    <Ex source={source} st={{ display: "flex", justifyContent: "center", gap: 20 }}>
      <React.Fragment>
        <Radio.Group>
          <Radio text="Femail" value="Femail" />
          <Radio text="Mail" value="Mail" />
          <Radio text="Other" value="Other" />
        </Radio.Group>
      </React.Fragment>
    </Ex>
  );
}
