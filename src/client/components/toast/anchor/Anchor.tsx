import React from "react";
import { Toast, Button } from "lib/module/lib";
import { Ex } from "client/layout";
import source from "./source";
import { Position } from "lib/@types";

export function Anchor() {
  const buttonSt = { height: 60 };

  const position: Position[][] = [
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
                  <Toast.Provider key={pos}>
                    <Toast.Consumer>
                      {({ set }) => {
                        const defaultValue = pos === "bottom right";
                        const backgroundColor = defaultValue ? "#2e7d32" : undefined;
                        return (
                          <Toast position={pos}>
                            <Button
                              st={{ ...buttonSt, backgroundColor }}
                              onClick={() => {
                                set({ text: pos + "!!!" });
                              }}>
                              {pos} {defaultValue ? "(default)" : ""}
                            </Button>
                          </Toast>
                        );
                      }}
                    </Toast.Consumer>
                  </Toast.Provider>
                );
              })}
            </div>
          );
        })}
      </React.Fragment>
    </Ex>
  );
}
