import React from "react";
import { cx } from "lib/module/lib/functions";
import { cn } from "./Pagination";
import { N_Pagination } from "lib/@types";

type Props = {
  children: JSX.Element;
} & N_Pagination.Props;

function Controller({ children, data, onChange }: Props) {
  const { offset, limit } = data.format;
  const { total, current } = data.info;

  const pagingHandler = (offset: number) => {
    onChange({
      info: { ...data.info, current: offset / limit + 1 },
      format: { ...data.format, offset },
    });
  };

  return (
    <div className={cx(cn.concat("__buttons"))}>
      <button className={cx(cn.concat("__left__arrow__start"))} onClick={() => pagingHandler(0)}>
        <i />
      </button>
      <button
        className={cx(cn.concat("__left__arrow"))}
        onClick={(): void => {
          const offset = (current - 2) * limit;
          pagingHandler(offset < 0 ? 0 : offset);
        }}>
        <i />
      </button>
      {children}
      <button
        className={cx(cn.concat("__right__arrow"))}
        onClick={() => {
          pagingHandler(offset / limit + 1 < total ? offset + limit : offset);
        }}>
        <i />
      </button>
      <button
        className={cx(cn.concat("__right__arrow__end"))}
        onClick={() => pagingHandler((total - 1) * limit)}>
        <i />
      </button>
    </div>
  );
}

export default Controller;
