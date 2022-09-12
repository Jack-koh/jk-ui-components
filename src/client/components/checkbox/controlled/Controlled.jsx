import React, { useState } from "react";
import { CheckBox, Button } from "lib/module/lib";
import { Ex } from "client/layout";
import source from "./source";

export function Controlled() {
  const [checked, setChecked] = useState(true);
  const [proxy, setProxy] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  return (
    <Ex source={source}>
      <React.Fragment>
        <div style={{ display: "flex", justifyContent: "space-around", gap: "20px" }}>
          <CheckBox
            label={`${checked}`}
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
          />

          <div style={{ display: "flex", justifyContent: "space-around", gap: "20px" }}>
            <CheckBox checked={proxy} onChange={() => setProxy(!proxy)} />
            <Button onClick={() => setProxy(!proxy)}>Set Check</Button>
          </div>

          <div style={{ display: "flex", justifyContent: "space-around", gap: "20px" }}>
            <CheckBox indeterminate={indeterminate} />
            <Button onClick={() => setIndeterminate(!indeterminate)}>Set indeter</Button>
          </div>
        </div>
      </React.Fragment>
    </Ex>
  );
}
