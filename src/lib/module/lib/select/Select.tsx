/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useState, isValidElement, createContext, Dispatch } from "react";
import { useClickOutSide } from "lib/module/lib/hook";

import type { N_Select } from "lib/@types";
import { cx } from "lib/module/lib/functions";
import { Render } from "lib/module/lib/hoc";
import Options from "./options/Options";
import Summary from "./Summary";
import Item from "./Item";

export const cn = "jk__select";

type Context = {
  multiple: boolean;
  disabled: boolean;
  toggle: boolean;
  anchor: HTMLDivElement | null;
  transition: boolean;
  selected: Map<number, N_Select.Data<unknown>>;
  setSelected: Dispatch<Map<number, N_Select.Data<unknown>>>;
  setToggle: (toggle: boolean) => void;
  onChange: N_Select.onChange;
};

const initialContext: Context = {
  multiple: false,
  disabled: false,
  toggle: false,
  anchor: null,
  transition: true,
  selected: new Map(),
  setSelected() { /* prettier-ignore */},
  onChange(_item: N_Select.Data<unknown>[], _index?: number) { /* prettier-ignore */},
  setToggle(_toggle: boolean) { /* prettier-ignore */ },
};

export const SelectContext = createContext(initialContext);

function Select(props: N_Select.Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState<Map<number, N_Select.Data<unknown>>>(new Map());

  useClickOutSide({
    toggle,
    target: wrapperRef.current,
    closeHandler: () => setToggle(false),
  });

  const Element = (() => {
    const result = { Summary: <></>, Options: <></> };
    React.Children.forEach(props.children, (child) => {
      const warn = () =>
        console.warn("Summary 와 Options 컴포넌트 외의 다른 컴포넌트는 표출되지 않습니다.");
      if (isValidElement(child) && typeof child.type !== "string") {
        const { displayName } = child.type as typeof child.type & {
          displayName?: string;
        };
        if (displayName === "JK_SELECT_SUMMARY") result.Summary = child;
        else if (displayName === "JK_SELECT_OPTIONS") {
          result.Options = child;
        } else warn();
      } else warn();
    });
    return result;
  })();

  // const field = wrapperRef.current?.getElementsByTagName("select")[0];
  const data = Element.Options.props.children
    ? Element.Options.props.children.map((el: React.ReactElement) => el.props)
    : Element.Options.props.options.map((el: N_Select.Data<unknown>) => el.value);

  const VALUE: any = props.multiple
    ? ([...selected].map((el) => el[1].value) as any[])
    : selected.size
    ? ([...selected.values()][0].value as any)
    : "";

  return (
    <SelectContext.Provider
      value={{
        toggle,
        setToggle,
        multiple: props.multiple,
        disabled: props.disabled,
        selected,
        setSelected,
        anchor: anchorRef.current,
        onChange: props.onChange,
        transition: props.transition,
      }}>
      <div
        ref={wrapperRef}
        id={props.id}
        className={cx(cn, {
          [props.className]: props.className,
          disabled: props.disabled,
          active: toggle,
        })}>
        <select
          value={VALUE}
          hidden
          aria-hidden
          aria-readonly
          ref={props.ref}
          name={props.name}
          onChange={() => { /* prettier-ignore */}}
          multiple={props.multiple}>
          {!selected.size && <option value={undefined}>선택안함</option>}
          {data.map((el: any) => {
            return (
              <option key={`${el.label} ${el.value}`} value={el.value}>
                {el.label}
              </option>
            );
          })}
        </select>
        <Render ref={anchorRef}>{Element.Summary}</Render>
        {Element.Options}
        {/* <Validator.Error error={error} top={rest.styles?.height ?? 40} /> */}
      </div>
    </SelectContext.Provider>
  );
}

Select.Summary = Summary;
Select.Options = Options;
Select.Item = Item;
const defaultProps: N_Select.DefaultProps = {
  disabled: false,
  className: "",
  transition: true,
  multiple: false,
  // eslint-disable-next-line
  onChange(_item: N_Select.Data<unknown>[], _index?: number) {/* prettier-ignore */},
};
Select.defaultProps = defaultProps;

export default Select;
