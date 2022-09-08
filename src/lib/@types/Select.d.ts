import React from "react";

export declare namespace N_Select {
  type value = string | number | undefined | ReadonlyArray<string | number | undefined>;

  type onChange = (value: value) => void;
  type Parameter = {
    id?: string;
    label?: string;
    className?: string;
    onChange?: onChange;
    disabled?: { value: boolean; shouldKeepValue?: boolean } | boolean;
    transition?: boolean;
    children: React.ReactNode[];
    multiple?: boolean;
    name?: string;
    height?: number;
    width?: number;
    ref?: React.ForwardedRef<HTMLSelectElement>;
  };

  type Data = {
    title: string;
    value: string | number | undefined;
    selected?: boolean;
    disabled?: boolean;
  };

  type DefaultProps = Required<
    Pick<Parameter, "className" | "onChange" | "disabled" | "transition" | "multiple">
  >;
  type Props = Parameter & DefaultProps;

  namespace Summary {
    type Parameter = {
      placeholder?: string;
    };
    type DefaultProps = Required<Pick<Parameter, "placeholder">>;
    type Props = Parameter & DefaultProps;
  }

  namespace Options {
    type Parameter = {
      position?: "bottom" | "top";
      children?: JSX.Element[];
    };

    type DefaultProps = Required<Pick<Parameter, "position">>;
    type Props = Parameter & DefaultProps;
  }

  namespace Item {
    type Parameter = {
      index?: number;
      title?: string;
      value?: string | number | undefined;
      options?: Data[];
      setOptions?: React.Dispatch<Data[]>;
      selected?: boolean;
      children?: ((data: Data) => JSX.Element) | JSX.Element;
      className?: string;
    };

    type DefaultProps = Required<
      Pick<
        Parameter,
        "title" | "value" | "index" | "selected" | "options" | "setOptions" | "className"
      >
    >;
    type Props = Parameter & DefaultProps;
  }
}
