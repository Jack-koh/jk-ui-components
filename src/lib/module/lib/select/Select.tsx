/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useState, forwardRef, createContext, Dispatch, useEffect } from "react";
import { useClickOutSide } from "lib/module/lib/hook";

import type { N_Select } from "lib/@types";
import { cx } from "lib/module/lib/functions";
import { Render } from "lib/module/lib/hoc";
import Options from "./options/Options";
import Summary from "./Summary";
import Item from "./Item";
import { pick, isObject } from "lodash";
import { getElement } from "./selectFunc";

export const cn = "jk__select";

type Context = {
  anchor: HTMLDivElement | null;
  state: { toggle: boolean; selected: Map<number, N_Select.Data> };
  setState: {
    setToggle: (toggle: boolean) => void;
    setSelected: Dispatch<Map<number, N_Select.Data>>;
  };
  multiple?: boolean;
  disabled: { value: boolean; shouldKeepValue?: boolean } | boolean;
  transition: boolean;
  onChange?: N_Select.onChange;
};

const initialContext: Context = {
  anchor: null,
  state: { toggle: false, selected: new Map() },
  setState: {
    setToggle(_toggle: boolean) { /* prettier-ignore */ },
    setSelected() { /* prettier-ignore */},
  },
  multiple: false,
  disabled: false,
  transition: true,
  onChange(_value: N_Select.value) { /* prettier-ignore */},
};

export const SelectContext = createContext(initialContext);

function Select(props: N_Select.Props) {
  const { id, className, disabled, children, width, height, label } = props;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState<Map<number, N_Select.Data>>(new Map());

  useClickOutSide({ toggle, target: wrapperRef.current, closeHandler: () => setToggle(false) });
  useEffect(() => {
    const reset = () => {
      if (selected.size) setSelected(new Map());
    };

    if (isObject(disabled)) {
      const { value, shouldKeepValue } = disabled;
      if (value && !shouldKeepValue) reset();
    } else if (disabled) reset();
  }, [disabled]);
  const { Summary, Options } = getElement(children);

  const _disabled = isObject(disabled) ? disabled.value : disabled;

  const provide = {
    state: { toggle, selected },
    setState: { setToggle, setSelected },
    anchor: anchorRef.current,
    disabled: _disabled,
    ...pick(props, ["multiple", "onChange", "transition"]),
  };

  return (
    <SelectContext.Provider value={provide}>
      <div
        style={{ width, height }}
        ref={wrapperRef}
        id={id}
        className={cx(cn, { [className]: className, disabled: _disabled, active: toggle })}>
        {label && <label className={cx(cn.concat("__label"))}>{label}</label>}
        <Render
          ref={anchorRef}
          role="button"
          tabIndex={0}
          onKeyPress={() => !_disabled && setToggle(!toggle)}
          onClick={() => !_disabled && setToggle(!toggle)}>
          {Summary}
        </Render>
        {Options}
      </div>
    </SelectContext.Provider>
  );
}

const defaultProps: N_Select.DefaultProps = {
  className: "",
  multiple: false,
  disabled: false,
  transition: true,
};

Select.defaultProps = defaultProps;

Select.Summary = Summary;
Select.Options = Options;
Select.Item = Item;

export default Select;
