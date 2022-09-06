/* eslint-disable no-param-reassign */
import React, { Dispatch } from "react";
import { cloneDeep } from "lodash";
import { N_Table } from "lib/@types";

const resize = (
  index: number,
  e: MouseEvent,
  target: HTMLElement,
  state: N_Table.State,
  setState: Dispatch<N_Table.Actions>,
): void => {
  document.body.classList.add("table__resizing");
  const next = target.nextElementSibling as HTMLElement;

  if (target) {
    const t_rect = target.getBoundingClientRect();
    const n_rect = next.getBoundingClientRect();
    const min = 60;
    const sum = t_rect.width + n_rect.width;
    const size = e.clientX - t_rect.left;

    if (min <= size && sum - size > 60) {
      target.style.width = `${size}px`;
      next.style.width = `${sum - size}px`;

      const header = cloneDeep(state.header);
      header[index].width = size;
      let nextHeader;
      for (let i = index + 1; i < header.length; i += 1) {
        if (!header[i].hidden) {
          nextHeader = header[i];
          break;
        }
      }

      if (nextHeader) {
        nextHeader.width = sum - size;
        delete nextHeader.flex;
      }
      delete header[index].flex;

      setState({ type: "windowSize", payload: window.innerWidth });
      setState({ type: "header", payload: header });
    }
  }
};

export const resizeHandler = (
  index: number,
  ev: React.SyntheticEvent,
  state: N_Table.State,
  setState: Dispatch<N_Table.Actions>,
) => {
  const t = ev.target as HTMLElement;
  const p = t.parentNode as HTMLElement;
  const resizer = (e: MouseEvent) => resize(index, e, p, state, setState);
  const stopResize = (): void => {
    document.body.removeAttribute("class");
    window.removeEventListener("mousemove", resizer, false);
    window.removeEventListener("mouseup", stopResize, false);
  };
  window.addEventListener("mousemove", resizer, false);
  window.addEventListener("mouseup", stopResize, false);
};
