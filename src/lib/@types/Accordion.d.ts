import React from "react";

export declare namespace N_Accordion {
  type Parameter = {
    st?: React.CSSProperties;
    disabled?: boolean;
    children?: React.ReactNode;
    id?: string;
    className?: string;
    transition?: boolean;
    rowToggle?: boolean;
    expanded?: boolean;
    onChange?: (expanded: boolean) => void;
  };

  type DefaultProps = Required<
    Pick<Parameter, "disabled" | "children" | "className" | "transition" | "rowToggle">
  >;

  type Props = Parameter & DefaultProps;

  namespace Summary {
    type Parameter = {
      children?: React.ReactNode;
      expandIcon?: JSX.Element;
      id?: string;
      className?: string;
      st?: React.CSSProperties;
    };

    type DefaultProps = Required<Pick<Parameter, "children" | "expandIcon" | "className">>;
    type Props = Parameter & DefaultProps;
  }

  namespace Collapse {
    type Parameter = {
      children?: React.ReactNode;
      id?: string;
      className?: string;
      st?: React.CSSProperties;
    };

    type DefaultProps = Required<Pick<Parameter, "children" | "className">>;
    type Props = Parameter & DefaultProps;
  }
}
