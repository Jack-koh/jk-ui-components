import React from "react";
import Pages from "./Pages";
import Controller from "./Controller";
import { N_Pagination } from "lib/@types";

export const cn = "jk__pagination";

export function Pagination({ data, onChange }: N_Pagination.Props) {
  return (
    <div className={cn}>
      <Controller data={data} onChange={onChange}>
        <Pages data={data} onChange={onChange} />
      </Controller>
    </div>
  );
}

const defaultProps: N_Pagination.DefaultProps = {
  data: {
    info: { current: 0, total: 0 },
    format: { limit: 0, offset: 0 },
  },
  onChange() { /* prettier-ignore */},
};

Pagination.defaultProps = defaultProps;
