/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/function-component-definition */
/* eslint-disable no-shadow */
import React, { useState, useEffect, useRef, useContext } from "react";
import { keys, debounce } from "lodash";
import { ToolTip } from "../index";
import { N_Table } from "lib/@types";
import { cx } from "lib/module/lib/functions";
import { TableContext, cn } from "./Table";
import { NoData } from "../index";
import { resizeHandler } from "./resize";
import * as Icons from "lib/module/lib/Icons";

// Functions ##################################################
const align = (column: N_Table.Head.Data) => {
  let align: React.CSSProperties = {};
  if (column.align === "right") align = { justifyContent: "flex-end" };
  if (column.align === "center") align = { justifyContent: "center" };
  return align;
};

// Th Comp ##################################################
export function Order(props: N_Table.Th.Order.Props) {
  const { order, property } = props;

  const getSort = () => {
    if (order) {
      const { sort } = order;
      const orderKey = keys(sort)[0];
      const ordering = sort[orderKey];
      const desc = orderKey === property && ordering === "DESC";
      const asc = orderKey === property && ordering === "ASC";
      return { desc, asc };
    }
    return { desc: true, asc: false };
  };

  return <Icons.ArrowDown className={cx(cn.concat("__order__icon"), getSort())} />;
}

export function Th(props: N_Table.Th.Props) {
  const { children, column, isLast, index } = props;
  const { state, setState, resize, order } = useContext(TableContext);
  const { property, width, flex } = column;

  const orderHandler = () => {
    if (!order) console.warn("Warning: The order 'props' for 'ordering' is undefined");
    if (order && column.order) {
      const { sort, onChange } = order;
      const sortKey = keys(sort)[0];
      let assign: "DESC" | "ASC" = "DESC";
      assign = sort[sortKey] === "ASC" ? "DESC" : "ASC";
      if (property !== sortKey) assign = "DESC";
      onChange({ [property]: assign });
    }
  };

  return (
    <div
      style={{ width, flex: !width ? flex ?? 1 : undefined }}
      className={cx(cn.concat("__th"), { order: column.order })}>
      <div className={cx(cn.concat("__th__context"))} style={align(column)} onClick={orderHandler}>
        <div className={cx(cn.concat("__text"))}>{children}</div>
        {column.order && <Order order={order} property={property} />}
      </div>
      {!isLast && resize && (
        <div
          className={cx(cn.concat("__resizer__grap"))}
          onMouseDown={(e) => resizeHandler(index, e, state, setState)}
        />
      )}
    </div>
  );
}

export function Head(props: N_Table.Head.Props) {
  const { state } = useContext(TableContext);
  const { children } = props;
  const { header } = state;
  const filtered = header.map((el, i) => ({ ...el, oi: i })).filter((el) => !el.hidden);

  return (
    <>
      {filtered.map((column, i) => (
        <Th
          key={column.property}
          column={column}
          isLast={filtered.length - 1 === i}
          index={column.oi}>
          <>{children ? children({ column }) : column.title}</>
        </Th>
      ))}
    </>
  );
}

Head.displayName = "JK__TABLE__HEAD";

export function Body<T>(props: N_Table.Body.Props<T>) {
  const { data, children } = props;
  return (
    <>
      {data.map((rowData, index) =>
        children ? children({ index, rowData }) : <Row key={index} index={index} data={rowData} />,
      )}
      {!data.length && <NoData text="데이터가 존재하지 않습니다." />}
    </>
  );
}

Body.displayName = "JK__TABLE__BODY";

export function Row<T>(props: N_Table.Row.Props<T>): JSX.Element {
  const { st, className, children, data, ...rest } = props;
  return (
    <li {...rest} className={cx(cn.concat("__row"), { [className]: className })} style={st}>
      {children ? children.type({ ...children.props, data }) : <Tr data={data} />}
    </li>
  );
}

const rowDefaultProps: N_Table.Row.DefaultProps = { className: "", data: {} };
Row.defaultProps = rowDefaultProps;

export function Tr<T>(props: N_Table.Tr.Props<T>) {
  const { state } = useContext(TableContext);
  const { children, st, data } = props;
  const { header } = state;

  return (
    <div className={cx(cn.concat("__tr"))} style={st}>
      {header
        .filter((el) => !el.hidden)
        .map((column) => {
          const { property } = column;
          const value = data[property as keyof T] as unknown as string;

          return (
            <Td key={property} column={column} value={value}>
              {children ? children({ property, value }) : value ?? "-"}
            </Td>
          );
        })}
    </div>
  );
}

const trDefaultProps: N_Table.Tr.DefaultProps = { data: {} };
Tr.defaultProps = trDefaultProps;

export function Td(props: N_Table.Td.Props) {
  const { column, value, children } = props;
  const { state } = useContext(TableContext);
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<number>();
  const { width, flex, toolTip } = column;

  useEffect(() => {
    if (toolTip) {
      if (ref.current) {
        const { current } = ref;
        const timer = debounce(() => setSize(current.clientWidth), 0);
        if (current) timer();
        return () => timer.cancel();
      }
    }
  }, [ref.current, state.windowSize]);

  return (
    <div style={{ width, flex: !width ? flex ?? 1 : undefined }} className={cx(cn.concat("__td"))}>
      <div ref={ref} style={align(column)} className={cx(cn.concat("__td__context"))}>
        <ToolTip
          position="bottom left"
          content={value}
          ellipsis={size}
          disabled={!toolTip}
          maxWidth={400}>
          <div className={cx(cn.concat("__text__node"))}>{children}</div>
        </ToolTip>
      </div>
    </div>
  );
}
