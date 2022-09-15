import React from "react";
import { cn } from "./Pagination";
import { cx } from "lib/module/lib/functions";
import { N_Pagination } from "lib/@types";

function Pages({ data, onChange }: N_Pagination.Props) {
  const { limit } = data.format;
  const { total, current } = data.info;
  const pageChaper = Math.floor(current / 10) * 10;
  const chapter: number[] = [...Array(total)].slice(pageChaper, pageChaper + 10);

  return (
    <div className={cx(cn.concat("__items"))}>
      {chapter.map((_, i) => {
        const index = i + pageChaper;
        const pagingHandler = () => {
          const offset = index * limit;
          onChange({
            info: { ...data.info, current: offset / limit + 1 },
            format: { ...data.format, offset },
          });
        };

        return (
          <div
            key={index}
            tabIndex={0}
            role="button"
            className={cx(cn.concat("__item"), { active: current - 1 === index })}
            onKeyDown={pagingHandler}
            onClick={pagingHandler}>
            {index + 1}
          </div>
        );
      })}
    </div>
  );
}

export default Pages;
