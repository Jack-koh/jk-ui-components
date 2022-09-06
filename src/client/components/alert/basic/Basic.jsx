import React from "react";
import { Alert, Button } from "lib/module/lib";
import { Ex } from "client/layout";
import source from "./source";

export function Basic() {
  return (
    <Ex source={source}>
      <Alert.Provider>
        <Alert.Consumer>
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

                <Alert>
                  <Button>Anchor</Button>
                </Alert>
              </div>
            );
          }}
        </Alert.Consumer>
      </Alert.Provider>
    </Ex>
  );
}
