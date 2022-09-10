import React from "react";

type Props = {
  name?: string;
  checked: boolean;
  ref: React.ForwardedRef<HTMLInputElement>;
};

function Semaintic(props: Props) {
  return (
    <input
      type="checkbox"
      hidden
      aria-hidden
      aria-readonly
      name={props.name}
      ref={props.ref}
      checked={props.checked}
      onChange={() => { /* prettier-ignore */ }}
    />
  );
}

Semaintic.defaultProps = {
  name: undefined,
  ref: undefined,
};

export default Semaintic;
