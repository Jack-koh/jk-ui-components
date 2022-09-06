import { useState, useEffect, useRef } from "react";

// controlled 와 uncontrolled 상태를 분석해서 사용할 상태와 함수를 리턴
type TUseContorl<T> = {
  state?: T;
  dispatcher?: (state: T) => void;
  default?: T;
};
export const useControl = <T>(props: TUseContorl<T>): [T, (state: T) => void] => {
  const state = props.state as NonNullable<T>;
  const d = props.default as NonNullable<T>;
  const unControlled = useState<T>(state ?? d);

  return [
    props.state ?? unControlled[0],
    (arg: T) => {
      if (!props.state || !props.dispatcher) unControlled[1](arg);
      if (props.dispatcher) props.dispatcher(arg);
    },
  ];
};

interface props {
  toggle: boolean;
  target: Element | (Element | null)[] | null;
  closeHandler: () => void;
}

export const useClickOutSide = (props: props): void => {
  const { toggle, target, closeHandler } = props;

  useEffect(() => {
    const clickOutsideHandler = (e: MouseEvent) => {
      const list = [target, Array.from(document.getElementsByClassName("jk__modal"))].flat();
      const et = e.target as Node;
      if (target) {
        for (const t of list) if (t && t.contains(et)) return;
      }
      closeHandler();
    };

    if (toggle) document.addEventListener("mousedown", clickOutsideHandler);
    return (): void => {
      document.removeEventListener("mousedown", clickOutsideHandler);
    };
  }, [target, toggle]);
};

export const useMount = (f: () => void, dep: unknown[]): void => {
  const isFirstRun = useRef(false);

  useEffect(() => {
    if (isFirstRun.current) f();
    if (!isFirstRun.current) isFirstRun.current = true;
  }, dep);
};
