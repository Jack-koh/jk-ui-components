const source = {
  jsx: `import React, { useState } from "react";
import { Button } from "lib/module/lib";
import { Ex } from "client/layout";
import source from "./source";

export function Basic() {
  const [count, setCount] = useState(0);
  return (
    <Ex source={source}>
      <React.Fragment>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
          <Button />

          <Button disabled>Disabled</Button>

          <Button st={{ width: 300 }} />

          <Button
            st={{
              height: 36,
              backgroundColor: "transparent",
              border: "2px solid #007fff",
              color: "#007fff",
            }}>
            Border
          </Button>

          <Button st={{ backgroundColor: "#2e7d32" }}>Green</Button>

          <Button st={{ backgroundColor: "#ed6c02" }}>Orange</Button>

          <Button st={{ backgroundColor: "#d32f2f" }}>Red</Button>

          <Button ripple={false} st={{ backgroundColor: "#7b1fa2" }}>
            No Ripple
          </Button>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 20,
            marginTop: 30,
          }}>
          <Button onClick={() => setCount(count + 1)}>Increase</Button>
          <Button onClick={() => setCount(0)}>Reset</Button>
          Count: {count}
        </div>
      </React.Fragment>
    </Ex>
  );
}`,
};

export default source;
