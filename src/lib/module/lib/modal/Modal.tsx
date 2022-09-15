import React from "react";
import { useControl } from "lib/module/lib/hook";
import { cx } from "lib/module/lib/functions";
import { Render } from "lib/module/lib/hoc";
import { CSSTransition } from "react-transition-group";
import { N_Modal } from "lib/@types";
import Portal from "./Portal";
import * as Layout from "./Layout";

export const cn = "jk__modal";

function Modal(props: N_Modal.Props) {
  const { children, disabled, transition } = props;
  const [toggle, setToggle] = useControl({
    state: props.toggle,
    dispatcher: props.onChange,
    default: false,
  });

  const portal = <Portal {...props} setToggle={setToggle} />;
  const origin = toggle && portal;
  const transitional = transition && (
    <CSSTransition in={toggle} unmountOnExit timeout={100}>
      {portal}
    </CSSTransition>
  );

  return (
    <>
      <Render
        className={cx(cn.concat("__button"))}
        onClick={() => {
          if (!disabled) setToggle(true);
        }}>
        {children}
      </Render>
      {transition ? transitional : origin}
    </>
  );
}

const defaultProps: N_Modal.DefaultProps = {
  transition: true,
  disabled: false,
  children: <></>,
  clickOutside: false,
  // eslint-disable-next-line
  content: (_args: { closeHandler: () => void }) => <></>,
};
Modal.defaultProps = defaultProps;

Modal.Summary = Layout.Summary;
Modal.Actions = Layout.Actions;
Modal.Content = Layout.Content;

export default Modal;
