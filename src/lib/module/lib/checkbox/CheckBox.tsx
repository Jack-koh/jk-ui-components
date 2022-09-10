import React from "react";
import { cx } from "lib/module/lib/functions";
import { Check, Dash } from "lib/module/lib/Icons";
import { useControl } from "lib/module/lib/hook";
import Semantic from "./Semantic";
import { N_CheckBox } from "lib/@types";

const cn = "jk__checkbox";

function CheckBox(props: N_CheckBox.Props) {
  const { ref, name, id, disabled, className, indeterminate, defaultValue, label } = props;

  const [checked, onChange] = useControl({
    state: props.checked,
    dispatcher: props.onChange,
    default: !!defaultValue,
  });

  const checkHandler = (): void => {
    if (disabled) return;
    onChange(!checked);
  };

  return (
    <>
      <div
        id={id}
        style={props.st}
        className={cx(cn, { [className]: className, checked, indeter: indeterminate, disabled })}>
        <div
          role="button"
          tabIndex={0}
          className={cn.concat("__container")}
          onClick={checkHandler}
          onKeyPress={checkHandler}>
          {!indeterminate && checked && <Check className={cx(cn.concat("__check__icon"))} />}
          {indeterminate && <Dash className={cx(cn.concat("__indeterminate__icon"))} />}
        </div>
        {label && <label className={cx(cn.concat("__label"))}>{label}</label>}
      </div>
      <Semantic ref={ref} name={name} checked={checked} />
    </>
  );
}

const defaultProps: N_CheckBox.DefaultProps = {
  className: "",
  disabled: false,
  indeterminate: false,
  defaultValue: false,
};
CheckBox.defaultProps = defaultProps;

export default CheckBox;
