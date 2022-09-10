export declare namespace N_CheckBox {
  type Parameter = {
    label?: React.ReactNode;
    id?: string;
    className?: string;
    disabled?: boolean;
    st?: React.CSSProperties;
    defaultValue?: boolean;
    checked?: boolean;
    indeterminate?: boolean;
    onChange?: (check: boolean) => void;
    name?: string;
    ref?: React.ForwardedRef<HTMLInputElement>;
  };

  type DefaultProps = Required<
    Pick<Parameter, "className" | "disabled" | "indeterminate" | "defaultValue">
  >;
  type Props = Parameter & DefaultProps;
}
