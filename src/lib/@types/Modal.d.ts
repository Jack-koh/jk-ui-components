export declare namespace N_Modal {
  type Parameter = {
    toggle?: boolean;
    onChange?: () => void;
    disabled?: boolean;
    transition?: boolean;
    children?: JSX.Element;
    content?: Content;
    clickOutside?: boolean;
  };

  type DefaultProps = Required<
    Pick<Parameter, "transition" | "disabled" | "children" | "content" | "clickOutside">
  >;
  type Props = Parameter & DefaultProps;
  type Content = (props: { closeHandler: () => void }) => JSX.Element;

  namespace Portal {
    type Props = { setToggle: (toggle: boolean) => void } & Props;
  }

  namespace Summary {
    type Parameter = {
      children?: React.ReactNode;
      className?: string;
      id?: string;
      st?: React.CSSProperties;
    };
    type DefaultProps = Required<Pick<Parameter, "children" | "className">>;
    type Props = Parameter & DefaultProps;
  }

  namespace Actions {
    type Parameter = {
      children?: React.ReactNode;
      className?: string;
      id?: string;
      st?: React.CSSProperties;
    };
    type DefaultProps = Required<Pick<Parameter, "children" | "className">>;
    type Props = Parameter & DefaultProps;
  }

  namespace Content {
    type Parameter = {
      children?: React.ReactNode;
      className?: string;
      id?: string;
      st?: React.CSSProperties;
    };
    type DefaultProps = Required<Pick<Parameter, "children" | "className">>;
    type Props = Parameter & DefaultProps;
  }
}
