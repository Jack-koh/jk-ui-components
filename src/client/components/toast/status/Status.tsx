import React from "react";
import { Toast, Button } from "lib/module/lib";
import { Ex } from "client/layout";
import { N_Toast } from "lib/@types";
import source from "./source";

export function Status() {
  const status: N_Toast.Status[] = ["success", "info", "error", "warning"];

  return (
    <Ex
      source={source}
      st={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", height: 200 }}>
      <React.Fragment>
        {status.map((st) => {
          return (
            <Toast.Provider key={st}>
              <Toast.Consumer>
                {({ set }) => {
                  let styles = { backgroundColor: "", color: "" };
                  if (st === "info") styles = { backgroundColor: "#e5f6fd", color: "#014361" };
                  if (st === "success") styles = { backgroundColor: "#edf7ed", color: "#1e4620" };
                  if (st === "warning") styles = { backgroundColor: "#fff4e5", color: "#663c00" };
                  if (st === "error") styles = { backgroundColor: "#fdeded", color: "#5f2120" };
                  return (
                    <Toast position="bottom center">
                      <Button
                        st={styles}
                        onClick={() => {
                          // write status options
                          set({ text: st + " !!!", status: st });
                        }}>
                        {st}
                      </Button>
                    </Toast>
                  );
                }}
              </Toast.Consumer>
            </Toast.Provider>
          );
        })}
      </React.Fragment>
    </Ex>
  );
}
