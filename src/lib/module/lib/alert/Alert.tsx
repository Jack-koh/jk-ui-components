import React, { createContext, useContext, useEffect, useRef } from "react";
import { Render } from "lib/module/lib/hoc";
import { cx } from "lib/module/lib/functions";
import { CSSTransition } from "react-transition-group";
import { N_Alert } from "lib/@types";
import Provider from "./Provider";
import Portal from "./portal/Portal";

export const cn = "jk__alert";

export const Context = createContext<N_Alert.Context>({
  alert: [],
  set() { /* prettier-ignore */ },
  remove() { /* prettier-ignore */ },
  clear() { /* prettier-ignore */ },
});
export const AlertContext = () => useContext(Context);

function Alert(props: N_Alert.Props) {
  const { transition, children } = props;
  const ref = useRef<HTMLDivElement>(null);
  const { alert, clear } = useContext(Context);

  useEffect(() => {
    if (alert.length) clear();
  }, []);

  return (
    <>
      <Render ref={ref} className={cx(cn.concat("__anchor"))}>
        {children}
      </Render>

      <CSSTransition
        in={!!ref.current && !!alert.length}
        mountOnEnter
        unmountOnExit
        timeout={transition ? 300 : 0}>
        <Portal {...props} anchor={children ? ref.current : null} />
      </CSSTransition>
    </>
  );
}
const defautProps: N_Alert.DefaultProps = {
  position: "bottom right",
  gap: 12,
  transition: true,
  className: "",
};
Alert.defaultProps = defautProps;
Alert.Provider = Provider;
Alert.Consumer = Context.Consumer;
Alert.Context = AlertContext;

export default Alert;
