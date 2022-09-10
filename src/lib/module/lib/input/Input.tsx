import React, { useState, forwardRef } from "react";
import { cx } from "lib/module/lib/functions";
import { LockOpend, LockClosed } from "lib/module/lib/Icons";
import { N_Input } from "lib/@types";

const cn = "jk__input";

function Input(props: N_Input.Props, ref?: React.ForwardedRef<HTMLInputElement>) {
  const { id, st, className = "", ...rest } = props;
  const [_type, setType] = useState(rest.type);

  return (
    <div id={id} style={st} className={cx(cn, { [className]: className, disabled: rest.disabled })}>
      <input ref={ref} {...rest} type={_type} spellCheck="false" />

      {rest.type === "password" && (
        <button
          type="button"
          className={cx(cn.concat("__lock__icon"))}
          onClick={() => {
            if (!rest.disabled || !rest.readOnly) setType(_type === "text" ? "password" : "text");
          }}>
          {_type === "text" ? <LockOpend /> : <LockClosed />}
        </button>
      )}
    </div>
  );
}

const ForwardInput = forwardRef<HTMLInputElement, N_Input.Props>(Input);

export default ForwardInput;
