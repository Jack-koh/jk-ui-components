import { debounce } from "lodash";
import { cn } from "./Button";

const removeChildren = (target: HTMLDivElement) => {
  const children = target.querySelectorAll(".jk__button__ripple__circle");
  if (children.length) target.innerHTML = "";
};
const timer = debounce(removeChildren, 2000);

export const rippleHandler = async (e: React.MouseEvent, target: HTMLDivElement) => {
  timer.cancel();
  const ripple = document.createElement("span");
  ripple.classList.add(cn.concat("__ripple__circle"));

  if (target.parentElement) {
    const button = target.parentElement;
    const rect: DOMRect = button.getBoundingClientRect();

    target.appendChild(ripple);
    const d = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = d + "px";
    ripple.style.left = e.clientX - rect.left - d / 2 + "px";
    ripple.style.top = e.clientY - rect.top - d / 2 + "px";
    ripple.classList.add("active");
  }
  timer(target);
};
