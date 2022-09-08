import React, { isValidElement } from "react";

export const getElement = (children: React.ReactNode[]) => {
  const result = { Summary: <></>, Options: <></> };
  const warn = () =>
    console.warn("Summary 와 Options 컴포넌트 외의 다른 컴포넌트는 표출되지 않습니다.");

  React.Children.forEach(children, (child) => {
    if (isValidElement(child) && typeof child.type !== "string") {
      const { displayName } = child.type as typeof child.type & { displayName?: string };
      if (displayName === "JK_SELECT_SUMMARY") result.Summary = child;
      else if (displayName === "JK_SELECT_OPTIONS") {
        result.Options = child;
      } else warn();
    } else warn();
  });
  return result;
};
