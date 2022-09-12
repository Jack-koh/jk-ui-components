export declare namespace N_Input {
  type Parameter = {
    st?: React.CSSProperties;
    className?: string;
    inputRef?: React.ForwardedRef<HTMLInputElement>;
  };

  type DefaultProps = Required<Pick<Parameter, "className">>;
  type InputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  type Props = InputProps & Parameter & DefaultProps;
}
