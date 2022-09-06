import React, { useState } from "react";
import { cx } from "lib/module/lib/functions";
import { pick } from "lodash";
import * as Icons from "lib/module/lib/Icons";
import { N_Input } from "lib/@types";

const cn = "jk__input";

function Input(props: N_Input.Props) {
  const { disabled, readonly, className } = props;
  const [type, setType] = useState(props.type);

  return (
    <div id={props.id} className={cx(cn, { [className]: className, disabled })}>
      <input
        {...props}
        type={type}
        style={props.st}
        ref={props.innerRef}
        value={props.value}
        spellCheck="false"
        {...pick(props, ["placeholder", "disabled", "min", "max", "onFocus"])}
      />

      {props.type === "password" && (
        <button
          type="button"
          className={cx(cn.concat("__lock__icon"))}
          onClick={() => {
            if (!disabled || !readonly) setType(type === "text" ? "password" : "text");
          }}>
          {type === "text" ? <Icons.LockOpend /> : <Icons.LockClosed />}
        </button>
      )}
    </div>
  );
}

const defautProps: N_Input.DefaultProps = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  keyEnter(_value: string) { /* prettier-ignore */ },
  onBlur() {  /* prettier-ignore */ },
  type: "text",
  className: "",
  disabled: false,
  error: "",
};

Input.defaultProps = defautProps;

export default Input;
