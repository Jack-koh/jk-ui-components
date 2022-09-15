import React from "react";
import { Toast, Button } from "lib/module/lib";
import { Ex } from "client/layout";
import source from "./source";

export function Basic() {
  return (
    <Ex source={source}>
      <Toast.Provider>
        <Toast.Consumer>
          {({ set }) => {
            return (
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Button
                  st={{ backgroundColor: "#ed6c02" }}
                  onClick={() => {
                    set({ text: "Float on anchor" });
                  }}>
                  Excutor
                </Button>

                <Toast>
                  <Button>Anchor</Button>
                </Toast>
              </div>
            );
          }}
        </Toast.Consumer>
      </Toast.Provider>
    </Ex>
  );
}
