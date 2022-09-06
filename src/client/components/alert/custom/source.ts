const source = {
  jsx: `import React from "react";
import { Alert, Button } from "lib/module/lib";
import source from "./source";
import "./Floating.css";

export function Floating() {
  return (
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
  );
}`,
  css: `.jk__alert__wrapper.bottom-center {
  width: 300px;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.jk__alert__wrapper.bottom-center .jk__alert__list .jk__alert__text {
  height: 60px;
  background-color: #7b1fa2 !important;
}

.jk__alert__wrapper.bottom-center .jk__alert__list .jk__alert__text svg {
  color: #fff;
}

.jk__alert__wrapper.bottom-center .jk__alert__text span {
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
}`,
};

export default source;
