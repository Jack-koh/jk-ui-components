export declare namespace N_Input {
  type Parameter = {
    st?: React.CSSProperties;
    className?: string;
  };

  type Props = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > &
    Parameter;
}
