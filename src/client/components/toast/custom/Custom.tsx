import React from "react";
import { Toast, Button } from "lib/module/lib";
import { Ex } from "client/layout";
import source from "./source";
import "./Custom.css";

export function Custom() {
  return (
    <Ex
      source={source}
      st={{ display: "flex", alignItems: "center", justifyContent: "center", height: 200 }}>
      <Toast.Provider>
        <Toast.Consumer>
          {({ set }) => {
            return (
              <React.Fragment>
                <Toast className="bottom-center" />
                <Button
                  onClick={() => {
                    set({ text: "Floating !!!" });
                  }}>
                  Floating
                </Button>
              </React.Fragment>
            );
          }}
        </Toast.Consumer>
      </Toast.Provider>
    </Ex>
  );
}
