export declare namespace N_CheckBox {
  type Parameter = {
    label?: React.ReactNode;
    id?: string;
    className?: string;
    disabled?: boolean;
    st?: React.CSSProperties;
    checked?: boolean;
    indeterminate?: boolean;
    name?: string;
    inputRef?: React.ForwardedRef<HTMLInputElement>;
  };

  type InputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;

  type DefaultProps = Required<Pick<Parameter, "className" | "disabled" | "indeterminate">>;
  type Props = InputProps & Parameter & DefaultProps;
}
