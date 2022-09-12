import React, { Dispatch, HTMLInputTypeAttribute } from "react";
import { cx } from "lib/module/lib/functions";
import { cn } from "./Input";
import { LockOpend, LockClosed } from "lib/module/lib/Icons";
import { N_Input } from "lib/@types";

function Icons(props: N_Input.InputProps & { setType: Dispatch<HTMLInputTypeAttribute> }) {
  const { type, disabled, readOnly, setType } = props;
  return (
    <button
      type="button"
      className={cx(cn.concat("__lock__icon"))}
      onClick={() => {
        if (!disabled || !readOnly) setType(type === "text" ? "password" : "text");
      }}>
      {type === "text" ? <LockOpend /> : <LockClosed />}
    </button>
  );
}

Icons.defaultProps = {
  type: "text",
};

export default Icons;
