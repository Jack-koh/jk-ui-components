import React from "react";
import { UnControlled } from "react-codemirror2";
import "./darcula.scss";
require("codemirror/lib/codemirror.css");
require("codemirror/mode/jsx/jsx");
require("codemirror/mode/css/css");

const option = {
  autoCloseBrackets: true,
  cursorScrollMargin: 48,
  lineNumbers: false,
  indentUnit: 2,
  tabSize: 2,
  styleActiveLine: true,
  viewportMargin: 99,
  readOnly: "nocursor",
};

interface Props {
  value?: string;
  mode?: string;
}
export function CodeMirror(props: Props) {
  return <UnControlled value={props.value} options={{ ...option, mode: props.mode }} />;
}

CodeMirror.defaultProps = { value: "", mode: "jsx" };
