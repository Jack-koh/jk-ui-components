import { N_Select } from "lib/@types";
import React, { useContext } from "react";
import { SelectContext } from "./Select";

type Props = { ref?: React.ForwardedRef<HTMLSelectElement>; name?: string; options: JSX.Element[] };

function Semantic(props: Props) {
  const {
    multiple,
    state: { selected },
    value,
  } = useContext(SelectContext);
  return (
    <select
      value={value as N_Select.value & ReadonlyArray<string>}
      hidden
      aria-hidden
      aria-readonly
      ref={props.ref}
      name={props.name}
      onChange={() => { /* prettier-ignore */ }}
      multiple={multiple}>
      {!selected.size && <option value={undefined} />}
      {props.options.map((el, i: number) => {
        return (
          <option key={i} value={el.props.value}>
            {el.props.title}
          </option>
        );
      })}
    </select>
  );
}

Semantic.defaultProps = { ref: undefined, name: undefined };

export default Semantic;
