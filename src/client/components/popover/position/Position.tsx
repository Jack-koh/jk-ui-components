import React, { useState } from "react";
import { Popover, Button, Radio } from "lib/module/lib";
import { Ex } from "client/layout";

export function Position() {
  const [position, setPosition] = useState("bottom right");
  return (
    <Ex
      st={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 20,
      }}>
      <React.Fragment>
        <Popover
          position={position}
          clickOutside
          content={() => {
            return <p>The content of the Popover.</p>;
          }}>
          <Button st={{ width: 100, height: 100 }}>Position</Button>
        </Popover>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            gap: 20,
          }}>
          <Radio.Group value={position} onChange={setPosition}>
            <Radio text="bottom left" value="bottom left" />
            <Radio text="bottom center" value="bottom center" />
            <Radio text="bottom right" value="bottom right" />
          </Radio.Group>

          <Radio.Group value={position} onChange={setPosition}>
            <Radio text="top left" value="top left" />
            <Radio text="top center" value="top center" />
            <Radio text="top right" value="top right" />
          </Radio.Group>

          <Radio.Group value={position} onChange={setPosition}>
            <Radio text="left top" value="left top" />
            <Radio text="left center" value="left center" />
            <Radio text="left bottom" value="left bottom" />
          </Radio.Group>

          <Radio.Group value={position} onChange={setPosition}>
            <Radio text="right top" value="right top" />
            <Radio text="right center" value="right center" />
            <Radio text="right bottom" value="right bottom" />
          </Radio.Group>
        </div>
      </React.Fragment>
    </Ex>
  );
}
