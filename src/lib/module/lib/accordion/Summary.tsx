import React, { useContext } from "react";
import { cx } from "lib/module/lib/functions";
import { ArrowDown } from "lib/module/lib/Icons";
import { AccordionContext, cn } from "lib/module/lib/accordion/Accordion";
import { N_Accordion } from "lib/@types";

function Summary(props: N_Accordion.Summary.Props) {
  const { id, children, className, st } = props;
  const { disabled, expanded, rowToggle, onChange } = useContext(AccordionContext);

  const onChangeHandler = () => {
    onChange(!expanded);
  };

  const a11y = {
    role: "button",
    tabIndex: 0,
    onKeyPress: onChangeHandler,
    onClick: onChangeHandler,
  };

  return (
    <div
      id={id}
      style={st}
      {...(rowToggle && a11y)}
      className={cx(cn.concat("__summary"), {
        [className]: className,
        button: !disabled && rowToggle,
      })}>
      <div className={cx(cn.concat("__summary__content"))}>{children}</div>
      <ArrowDown
        {...(!rowToggle && a11y)}
        className={cx(cn.concat("__icon"), { button: !disabled && !rowToggle })}
      />
    </div>
  );
}

const defaultProps: N_Accordion.Summary.DefaultProps = {
  children: <></>,
  expandIcon: <ArrowDown />,
  className: "",
};
Summary.defaultProps = defaultProps;
Summary.displayName = "JK_ACCORDION_SUMMARY";

export default Summary;
