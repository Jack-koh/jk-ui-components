import React, { useEffect, useRef, useContext } from "react";
import { ChildMap } from "lib/module/lib/hoc";
import { SelectContext } from "../Select";
import { CSSTransition } from "react-transition-group";
import type { N_Select } from "lib/@types";
import positionHandler from "./positionHandler";

function Options<T>(props: N_Select.Options.Props) {
  const { multiple, toggle, anchor, disabled, transition, selected, setSelected } =
    useContext(SelectContext);
  const { children, position } = props;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && anchor)
      positionHandler({ position, target: anchor, selectRoot: ref.current });
  }, [ref]);

  useEffect(() => {
    const s = (children?.map((el) => el.props) ?? [])
      .filter((el) => el.selected)
      .map((el, i) => ({ data: el, index: i }));
    if (!multiple && s.length > 1) {
      throw new Error(`
          single 선택일 경우 초기 선택값은 1개만 올수 있습니다. \n
          잘못된 사용 ↓
          {..., selected: true},
          {..., selected: true}
        `);
    }
    s.forEach((item) => selected.set(item.index, item.data));
    setSelected(new Map(selected));
  }, []);

  return (
    <CSSTransition
      in={!!(toggle && !disabled && anchor)}
      unmountOnExit
      timeout={transition ? 100 : 0}>
      <div ref={ref} className="jk__select__options">
        {children &&
          ChildMap(children, (child, index) => {
            if (child.type.displayName !== "JK_SELECT_ITEM")
              throw new Error(
                "Failed children type: The props 'children' should be Select.Item component., but its component is not Select.Item",
              );
            const props = {
              ...child.props,
              key: `${child.props.label} ${index}`,
              selected: selected.get(index)?.selected,
              index,
              // options,
              // setOptions,
            };
            return React.cloneElement(child, props);
          })}
      </div>
    </CSSTransition>
  );
}

Options.displayName = "JK_SELECT_OPTIONS";
const defaultProps: N_Select.Options.DefaultProps = { position: "bottom" };
Options.defaultProps = defaultProps;

export default Options;
