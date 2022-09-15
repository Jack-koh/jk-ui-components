import React, { useState } from "react";
import { cx } from "lib/module/lib/functions";
import Icon from "./Icon";
import { N_Input } from "lib/@types";
import { omit, pick } from "lodash";

export const cn = "jk__input";

function Input(props: N_Input.Props) {
  const { id, st, inputRef, type, className, label, ...rest } = props;
  const _className = cx(cn, { [className]: className, disabled: props.disabled });
  const [_type, setType] = useState(type);

  const divide = [
    "margin",
    "padding",
    "marginLeft",
    "marginRight",
    "marginTop",
    "marginBottom",
    "paddingLeft",
    "paddingRight",
    "paddingTop",
    "paddingBottom",
  ];

  return (
    <div id={id} className={_className} style={pick(st, divide)}>
      {label && <label className={cx(cn.concat("__label"))}>{label}</label>}
      <div className={cx(cn.concat("__field"))} style={omit(st, divide)}>
        <input {...rest} ref={inputRef} type={_type} spellCheck="false" />
        {type === "password" && <Icon setType={setType} type={_type} />}
      </div>
    </div>
  );
}

const defaultProps: N_Input.DefaultProps = { className: "" };
Input.defaultProps = defaultProps;

export default Input;
