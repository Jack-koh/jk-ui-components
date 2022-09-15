const source = {
  jsx: `import React from "react";
import { Alert, Button } from "lib/module/lib";
import source from "./source";
import "./Floating.css";

export function Floating() {
  return (
    <Toast.Provider>
      <Toast.Consumer>
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
      </Toast.Consumer>
    </Toast.Provider>
  );
}`,
  css: `.jk_toast__wrapper.bottom-center {
  width: 300px;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.jk_toast__wrapper.bottom-center .jk_toast__list .jk_toast__text {
  height: 60px;
  background-color: #7b1fa2 !important;
}

.jk_toast__wrapper.bottom-center .jk_toast__list .jk_toast__text svg {
  color: #fff;
}

.jk_toast__wrapper.bottom-center .jk_toast__text span {
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
}`,
};

export default source;
