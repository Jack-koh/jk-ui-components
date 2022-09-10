const source = {
  jsx: `import React from "react";
import { Alert, Button } from "lib/module/lib";
import source from "./source";

export function Status() {
  const status = ["success", "info", "error", "warning"];

  return (
    <React.Fragment>
      <div style={{ display: "flex", gap: 20 }}>
        {status.map((st) => {
          return (
            <Alert.Provider key={st}>
              <Alert.Consumer>
                {({ set }) => {
                  return (
                    <Alert>
                      <Button
                        onClick={() => {
                          // write status options
                          set({ text: st + " !!!", status: st });
                        }}>
                        {st}
                      </Button>
                    </Alert>
                  );
                }}
              </Alert.Consumer>
            </Alert.Provider>
          );
        })}
      </div>
    </React.Fragment>
  );
}`,
};

export default source;
