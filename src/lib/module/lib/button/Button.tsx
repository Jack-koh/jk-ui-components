import React, { useRef } from "react";
import { cx } from "lib/module/lib/functions";
import { Proccessing } from "lib/module/lib/Icons";
import { N_Button } from "lib/@types";
import { rippleHandler } from "./functions";

export const cn = "jk__button";

function Button(props: N_Button.Props) {
  const rippleRef = useRef<HTMLDivElement>(null);
  const { id, type, st, ripple, disabled, onClick, className, loading, children, loadingIcon } =
    props;

  const onClickHandler = (e: React.MouseEvent) => {
    onClick(e);
    if (ripple && rippleRef.current) rippleHandler(e, rippleRef.current);
  };

  return (
    <button
      id={id}
      style={st}
      type={type}
      disabled={disabled}
      onClick={onClickHandler}
      className={cx(cn, { [className]: !!className, disabled })}>
      {loading === true && <span className={cn.concat("__loading")}>{loadingIcon}</span>}
      <div className={cx(cn.concat("__context"), { invisible: loading === true })}>
        {typeof loading === "string" ? loading : children}
      </div>
      <div ref={rippleRef} className={cn.concat("__ripple")}></div>
    </button>
  );
}

const defaultProps: N_Button.DefaultProps = {
  type: "button",
  ripple: true,
  className: "",
  loading: false,
  disabled: false,
  children: "Button",
  loadingIcon: <Proccessing />,
  onClick() { /* prettier-ignore */ },
};
Button.defaultProps = defaultProps;

export default Button;
