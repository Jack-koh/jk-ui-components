import React, { useContext } from "react";
import { cx } from "lib/module/lib/functions";
import { omit } from "lodash";
import { SelectContext } from "./Select";
import { isElement } from "lib/module/lib/functions";
import { N_Select } from "lib/@types";
import { cn } from "./Select";

function Item(props: N_Select.Item.Props) {
  const {
    multiple,
    state: { selected },
    setState: { setSelected, setToggle },
    onChange,
  } = useContext(SelectContext);
  const { title, value, index, children, className } = props;

  if (index === -1) throw new Error("index 세팅이 되지 않음");

  const singleHandler = () => {
    if (selected.size) {
      const key = [...selected.keys()][0];
      const data = selected.get(key);
      if (data) selected.delete(key);
    }

    setSelected(new Map([[index, { title, value, selected: true }]]));
    setToggle(false);
    if (onChange) onChange(value);
  };

  const multipleHandler = () => {
    const modify = !props.selected;
    modify ? selected.set(index, { title, value, selected: modify }) : selected.delete(index);
    setSelected(new Map(selected));
    if (onChange) onChange([...selected].map((el) => el[1].value));
  };

  const onClickHandler = () => {
    if (!multiple) singleHandler();
    if (multiple) multipleHandler();
  };

  const isJSX = children && isElement(children);
  const isFunc = children && typeof children === "function";

  return (
    <div
      {...omit(props, ["value", "label", "selected", "options", "setOptions"])}
      data-value={value}
      role="button"
      tabIndex={0}
      className={cx(cn.concat("__item"), { selected: props.selected, [className]: className })}
      onKeyPress={onClickHandler}
      onClick={onClickHandler}>
      <>
        {isJSX && children}
        {isFunc && children({ title, value, selected: props.selected })}
        {!children && title}
      </>
    </div>
  );
}
Item.displayName = "JK_SELECT_ITEM";
const defaultProps: N_Select.Item.DefaultProps = {
  index: -1,
  className: "",
  title: "",
  value: "",
  selected: false,
  options: [],
  setOptions() {/* prettier-ignore */},
};
Item.defaultProps = defaultProps;

export default Item;
