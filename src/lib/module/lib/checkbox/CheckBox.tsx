import React, { useState } from "react";
import { cx } from "lib/module/lib/functions";
import { Check, Dash } from "lib/module/lib/Icons";
import { N_CheckBox } from "lib/@types";

const cn = "jk__checkbox";

function CheckBox(props: N_CheckBox.Props) {
  const {
    id,
    st,
    inputRef,
    disabled,
    className,
    indeterminate,
    label,
    onChange,
    defaultChecked,
    ...rest
  } = props;

  const [checked, setChecked] = useState(props.checked ?? defaultChecked);

  const _checked = props.checked ?? checked;
  const checkIcon = !indeterminate && _checked;
  const dashIcon = indeterminate;
  const _className = cx(cn, {
    [className]: className,
    checked: _checked,
    indeter: indeterminate,
    disabled,
  });

  return (
    <>
      <div id={id} style={st} className={_className}>
        <div className={cn.concat("__container")}>
          <input
            {...rest}
            type="checkbox"
            ref={inputRef}
            checked={_checked}
            onChange={(e) => {
              if (disabled) return;
              if (onChange) onChange(e);
              if (props.checked === undefined) setChecked(e.target.checked);
            }}
          />
          {checkIcon && <Check className={cx(cn.concat("__check__icon"))} />}
          {dashIcon && <Dash className={cx(cn.concat("__indeterminate__icon"))} />}
        </div>
        {label && <label className={cx(cn.concat("__label"))}>{label}</label>}
      </div>
    </>
  );
}

const defaultProps: N_CheckBox.DefaultProps = {
  className: "",
  disabled: false,
  indeterminate: false,
  defaultChecked: false,
};
CheckBox.defaultProps = defaultProps;

export default CheckBox;
