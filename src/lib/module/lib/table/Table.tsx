import React, {
  Children,
  useReducer,
  useRef,
  createContext,
  useEffect,
  isValidElement,
} from "react";
import { Loading } from "../index";
import { N_Table } from "lib/@types";
import { cx } from "lib/module/lib/functions";
import * as Comp from "./Composition";
import produce from "immer";

export const cn = "jk__table";

export const TableContext = createContext<N_Table.Context>({
  state: { header: [], windowSize: 0 },
  order: undefined,
  resize: false,
  setState() { /* prettier-ignore */},
});

const initialState = { header: [], windowSize: window.innerWidth };
const reducer = (state: N_Table.State, action: N_Table.Actions) => {
  return produce(state, (draft) => {
    // prettier-ignore
    switch (action.type) {
      case 'header': draft['header'] = action.payload; break;
      case 'windowSize': draft['windowSize'] = action.payload; break;
    }
  });
};

function Table(props: N_Table.Props) {
  const Element = (() => {
    const result = { Head: <></>, Body: <></> };
    Children.forEach(props.children, (child) => {
      const warn = () =>
        console.warn("Head 와 Body 컴포넌트 외의 다른 컴포넌트는 표출되지 않습니다.");
      if (isValidElement(child) && typeof child.type !== "string") {
        const { displayName } = child.type as typeof child.type & {
          displayName?: string;
        };
        if (displayName === "JK__TABLE__HEAD") result.Head = child;
        else if (displayName === "JK__TABLE__BODY") result.Body = child;
        else warn();
      } else warn();
    });
    return result;
  })();

  const { id, loading, resize, st } = props;
  const headerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLUListElement>(null);
  const [state, setState] = useReducer(reducer, initialState);

  useEffect(() => {
    setState({ type: "header", payload: Element.Head.props.data });
  }, [Element.Head?.props.data]);

  useEffect(() => {
    const windowsize = () => setState({ type: "windowSize", payload: window.innerWidth });
    const header = headerRef.current;
    const body = bodyRef.current;

    if (body && header) {
      const grid = body.querySelector(".jk__table__body");
      const target = grid || body;
      target.addEventListener("scroll", (e) => {
        const { scrollLeft } = e.target as HTMLElement;
        header.scrollLeft = scrollLeft;
      });
    }

    window.addEventListener("resize", windowsize);
    return () => {
      window.removeEventListener("resize", windowsize);
    };
  }, []);

  return (
    <TableContext.Provider value={{ resize, state, setState, order: Element.Head.props.order }}>
      <div style={st} id={id} className={cx(cn)}>
        <div className={cx(cn.concat("__wrapper"))}>
          <div ref={headerRef} className={cx(cn.concat("__header__wrapper"))}>
            <ul className={cx(cn.concat("__head"))}>{Element.Head}</ul>
          </div>
          <div className={cx(cn.concat("__body__wrapper"))}>
            <div className={cx(cn.concat("__container"))}>
              {!!loading && <Loading />}
              <ul ref={bodyRef} className={cx(cn.concat("__body"))}>
                {Element.Body}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </TableContext.Provider>
  );
}

export default Table;

const defaultProps: N_Table.DefaultProps = {
  loading: false,
  className: "",
  resize: false,
};
Table.defaultProps = defaultProps;
Table.Head = Comp.Head;
Table.Th = Comp.Th;

Table.Body = Comp.Body;
Table.Row = Comp.Row;
Table.Tr = Comp.Tr;
Table.Td = Comp.Td;
