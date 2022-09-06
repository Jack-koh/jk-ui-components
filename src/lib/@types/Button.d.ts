export declare namespace N_Button {
  type Type = "button" | "submit";

  type Parameter = {
    type?: Type;
    loading?: boolean | string;
    ripple?: boolean;
    id?: string;
    className?: string;
    disabled?: boolean;
    children?: React.ReactNode;
    onClick?: (e: React.MouseEvent) => void;
    st?: React.CSSProperties;
    loadingIcon?: JSX.Element;
  };

  type DefaultProps = Required<
    Pick<
      Parameter,
      | "type"
      | "className"
      | "loading"
      | "disabled"
      | "children"
      | "onClick"
      | "ripple"
      | "loadingIcon"
    >
  >;
  type Props = Parameter & DefaultProps;
}
