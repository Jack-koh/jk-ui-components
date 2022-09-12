import React, { useState } from "react";
import { cx } from "lib/module/lib/functions";
import Icon from "./Icon";
import { N_Input } from "lib/@types";

export const cn = "jk__input";

function Input(props: N_Input.Props) {
  const { id, st, inputRef, type, className, ...rest } = props;
  const _className = cx(cn, { [className]: className, disabled: props.disabled });
  const [_type, setType] = useState(type);

  return (
    <div id={id} style={st} className={_className}>
      <input {...rest} ref={inputRef} type={_type} spellCheck="false" />
      {type === "password" && <Icon setType={setType} type={_type} />}
    </div>
  );
}

const defaultProps: N_Input.DefaultProps = { className: "" };
Input.defaultProps = defaultProps;

export default Input;
