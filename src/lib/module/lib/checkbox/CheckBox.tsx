import React from "react";
import { cx } from "lib/module/lib/functions";
import { Check, Dash } from "lib/module/lib/Icons";
import { N_CheckBox } from "lib/@types";

const cn = "jk__checkbox";

function CheckBox(props: N_CheckBox.Props) {
  const { id, st, inputRef, className = "", indeterminate, label, ...rest } = props;

  const _className = cx(cn, {
    [className]: !!className,
    indeter: !!indeterminate,
    disabled: !!rest.disabled,
  });

  return (
    <>
      <div id={id} style={st} className={_className}>
        <div className={cn.concat("__container")}>
          <input {...rest} type="checkbox" ref={inputRef} />
          <Check className={cx(cn.concat("__check__icon"))} />
          <Dash className={cx(cn.concat("__indeterminate__icon"))} />
        </div>
        {label && <label className={cx(cn.concat("__label"))}>{label}</label>}
      </div>
    </>
  );
}

export default CheckBox;
