import React from "react";
import { Alert, Button } from "lib/module/lib";
import { Ex } from "client/layout";
import source from "./source";
import "./Custom.css";

export function Custom() {
  return (
    <Ex source={source}>
      <Alert.Provider>
        <Alert.Consumer>
          {({ set }) => {
            return (
              <React.Fragment>
                <Alert className="bottom-center" />
                <Button
                  onClick={() => {
                    set({ text: "Floating !!!" });
                  }}>
                  Floating
                </Button>
              </React.Fragment>
            );
          }}
        </Alert.Consumer>
      </Alert.Provider>
    </Ex>
  );
}
