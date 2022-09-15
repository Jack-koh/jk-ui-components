/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from "react";
import { Render } from "lib/module/lib/hoc";
import { createPortal } from "react-dom";
import { N_Modal } from "lib/@types";
import { cn } from "./Modal";
import { cx } from "../functions";

const Portal = (props: N_Modal.Portal.Props) => {
  const { clickOutside, content, setToggle } = props;
  const body = document.querySelector("body") as HTMLBodyElement;

  const escapeHandler = (e: KeyboardEvent): void => {
    if (e.key === "Escape") props.setToggle(false);
  };

  useEffect(() => {
    document.addEventListener("keyup", escapeHandler);
    return () => {
      document.removeEventListener("keyup", escapeHandler);
    };
  }, []);

  return createPortal(
    <div className={cn}>
      <Render className={cx(cn.concat("__content"))}>
        {content({ closeHandler: () => setToggle(false) })}
      </Render>
      <div
        className={cn.concat("__bg__screen")}
        onClick={() => {
          if (clickOutside) setToggle(false);
        }}
      />
    </div>,
    body,
  );
};

export default Portal;
