import React from "react";
import { Popover, Button } from "lib/module/lib";
import { Ex } from "client/layout";
import source from "./source";

export function Nested() {
  return (
    <Ex source={source} st={{ display: "flex", justifyContent: "center", gap: 20 }}>
      <React.Fragment>
        <Popover
          position="right center"
          clickOutside
          content={() => {
            return (
              <Popover
                position="right center"
                content={() => {
                  return <p>Nested Menu</p>;
                }}>
                <p>OPEN CHILD</p>
              </Popover>
            );
          }}>
          <Button>NESTED</Button>
        </Popover>
      </React.Fragment>
    </Ex>
  );
}
