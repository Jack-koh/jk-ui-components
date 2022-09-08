import React, { useContext, useEffect, useRef } from "react";
import { SelectContext } from "./Select";
import { N_Select } from "lib/@types";
import { cn } from "./Select";
import { ArrowDown } from "lib/module/lib/Icons";
import { cx } from "lib/module/lib/functions";

function Summary(props: N_Select.Summary.Props) {
  const {
    state: { selected },
  } = useContext(SelectContext);
  const isMounted = useRef(false);

  const label = [...selected.values()].map((el) => el.title).join(", ");

  useEffect(() => {
    if (!isMounted.current) isMounted.current = true;
  }, []);

  return (
    <div role="button" tabIndex={0} className={cx(cn.concat("__button"))} title={label}>
      <div className={cx(cn.concat("__button__title"))}>
        {selected.size ? (
          label
        ) : isMounted.current ? (
          <span className={cx(cn.concat("__placeholder"))}>{props.placeholder}</span>
        ) : (
          ""
        )}
      </div>
      <ArrowDown className={cx(cn.concat("__icon"))} />
    </div>
  );
}

Summary.displayName = "JK_SELECT_SUMMARY";
const defaultProps: N_Select.Summary.DefaultProps = { placeholder: "선택값을 입력하세요" };
Summary.defaultProps = defaultProps;

export default Summary;
