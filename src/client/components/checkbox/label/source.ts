const source = {
  jsx: `import React from "react";
import { Button } from "lib/module/lib";
import source from "./source";

export function Basic() {
  return (
    <React.Fragment>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
        <Button />

        <Button>Click</Button>

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
    </React.Fragment>
  );
}`,
};

export default source;
