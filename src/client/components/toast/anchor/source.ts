const source = {
  jsx: `import React from "react";
import { Alert, Button } from "lib/module/lib";
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
                      return (
                        <Alert position={pos}>
                          <Button
                            st={buttonSt}
                            onClick={() => {
                              set({ text: pos + "!!!" });
                            }}>
                            {pos}
                          </Button>
                        </Alert>
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
  );
}`,
};

export default source;
