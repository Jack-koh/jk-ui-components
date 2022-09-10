import React, { useContext } from "react";
import { N_Select } from "lib/@types";
import { SelectContext } from "./Select";

type Props = {
  innerRef?: React.ForwardedRef<HTMLSelectElement>;
  name?: string;
  options: JSX.Element[];
  onChange: any;
};

function Semantic(props: Props) {
  const {
    multiple,
    state: { selected },
    value,
  } = useContext(SelectContext);
  return (
    <select
      value={value as N_Select.value & ReadonlyArray<string>}
      // hidden
      // aria-hidden
      // aria-readonly
      ref={props.innerRef}
      name={props.name}
      onChange={(e) => {
        console.log(e);
        props.onChange(e);
      }}
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

Semantic.defaultProps = { innerRef: undefined, name: undefined };

export default Semantic;
