import React from "react";
import { Popover, Button } from "lib/module/lib";
import { Ex } from "client/layout";
import source from "./source";

export function Layout() {
  return (
    <Ex source={source} st={{ display: "flex", justifyContent: "center", gap: 20 }}>
      <React.Fragment>
        <Popover
          position="bottom center"
          content={({ closeHandler }) => {
            return (
              <div style={{}}>
                <p>
                  Irure minim anim culpa mollit Lorem laboris et.
                  <br />
                  labore magna excepteur cupidatat nulla id tempor.
                  <br />
                  amet. Labore et nisi fugiat nisi dolor.
                  <br />
                  aute culpa.
                </p>
                <div
                  style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 10 }}>
                  <Button onClick={closeHandler}>Cancel</Button>
                  <Button>Save</Button>
                </div>
              </div>
            );
          }}>
          <Button>LAYOUT</Button>
        </Popover>
      </React.Fragment>
    </Ex>
  );
}
