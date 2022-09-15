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

  type Props = InputProps & Parameter;
}
