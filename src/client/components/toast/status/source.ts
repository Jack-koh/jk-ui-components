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
            <Toast.Provider key={st}>
              <Toast.Consumer>
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
              </Toast.Consumer>
            </Toast.Provider>
          );
        })}
      </div>
    </React.Fragment>
  );
}`,
};

export default source;
