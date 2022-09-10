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
import Semantic from "./Semantic";
import { getElement } from "./selectFunc";

export const cn = "jk__select";

type Context = {
  value: N_Select.value;
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
  value: "",
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

function Select(props: N_Select.Props, ref?: React.ForwardedRef<HTMLSelectElement>) {
  const {
    id,
    className = "",
    multiple = false,
    disabled = false,
    transition = true,
    children,
    width,
    height,
    label,
    name,
  } = props;
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

  const value = multiple
    ? ([...selected].map((el) => el[1].value?.toString()) as ReadonlyArray<string>)
    : selected.size
    ? [...selected.values()][0].value
    : "";

  const _disabled = isObject(disabled) ? disabled.value : disabled;

  const provide = {
    value,
    state: { toggle, selected },
    setState: { setToggle, setSelected },
    anchor: anchorRef.current,
    disabled: _disabled,
    transition,
    ...pick(props, ["multiple", "onChange"]),
  };

  return (
    <SelectContext.Provider value={provide}>
      <div
        style={{ width, height }}
        ref={wrapperRef}
        id={id}
        className={cx(cn, { [className]: className, disabled: _disabled, active: toggle })}>
        <label className={cx(cn.concat("__label"))} htmlFor={name}>
          {label}
        </label>
        <Render ref={anchorRef} onClick={() => !_disabled && setToggle(!toggle)}>
          {Summary}
        </Render>
        {Options}
        <Semantic
          innerRef={ref}
          name={name}
          options={Options.props.children}
          onChange={props.onChange as any}
        />
      </div>
    </SelectContext.Provider>
  );
}

const foward = forwardRef<HTMLSelectElement, N_Select.Props>(Select);
type ForwardSelect = typeof foward & {
  Summary: typeof Summary;
  Options: typeof Options;
  Item: typeof Item;
};

const ForwardSelect = foward as ForwardSelect;
ForwardSelect.Summary = Summary;
ForwardSelect.Options = Options;
ForwardSelect.Item = Item;

export default ForwardSelect;
