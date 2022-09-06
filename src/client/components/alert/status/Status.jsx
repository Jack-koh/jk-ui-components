import React from "react";
import { Alert, Button } from "lib/module/lib";
import { Ex } from "client/layout";
import source from "./source";

export function Status() {
  const status = ["success", "info", "error", "warning"];

  return (
    <Ex source={source}>
      <React.Fragment>
        <div style={{ display: "flex", gap: 10 }}>
          {status.map((st) => {
            return (
              <Alert.Provider key={st}>
                <Alert.Consumer>
                  {({ set }) => {
                    let styles = { backgroundColor: "", color: "" };
                    if (st === "info") styles = { backgroundColor: "#e5f6fd", color: "#014361" };
                    if (st === "success") styles = { backgroundColor: "#edf7ed", color: "#1e4620" };
                    if (st === "warning") styles = { backgroundColor: "#fff4e5", color: "#663c00" };
                    if (st === "error") styles = { backgroundColor: "#fdeded", color: "#5f2120" };
                    return (
                      <Alert position="bottom center">
                        <Button
                          st={styles}
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
    </Ex>
  );
}
