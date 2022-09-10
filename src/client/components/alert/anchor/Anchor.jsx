import React from "react";
import { Alert, Button } from "lib/module/lib";
import { Ex } from "client/layout";
import source from "./source";

export function Anchor() {
  const buttonSt = { height: 60 };

  const position = [
    ["bottom left", "bottom center", "bottom right"],
    ["left top", "left center", "left bottom"],
    ["top left", "top center", "top right"],
    ["right top", "right center", "right bottom"],
  ];

  return (
    <Ex source={source}>
      <React.Fragment>
        {position.map((row, index) => {
          return (
            <div
              key={index}
              style={{ display: "flex", gap: 20, marginBottom: index !== 3 ? 10 : undefined }}>
              {row.map((pos) => {
                return (
                  <Alert.Provider key={pos}>
                    <Alert.Consumer>
                      {({ set }) => {
                        const defaultValue = pos === "bottom right";
                        const backgroundColor = defaultValue ? "#2e7d32" : undefined;
                        return (
                          <Alert position={pos}>
                            <Button
                              st={{ ...buttonSt, backgroundColor }}
                              onClick={() => {
                                set({ text: pos + "!!!" });
                              }}>
                              {pos} {defaultValue ? "(default)" : ""}
                            </Button>
                          </Alert>
                        );
                      }}
                    </Alert.Consumer>
                  </Alert.Provider>
                );
              })}
            </div>
          );
        })}
      </React.Fragment>
    </Ex>
  );
}
