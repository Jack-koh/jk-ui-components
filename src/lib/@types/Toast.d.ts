import { Position } from "lib/@types";

export declare namespace N_Toast {
  type Parameter = {
    children?: JSX.Element;
    position?: Position;
    gap?: number;
    transition?: boolean;
    className?: string;
  };

  type DefaultProps = Required<Pick<Parameter, "position" | "gap" | "transition" | "className">>;
  type Props = Parameter & DefaultProps;

  type Status = "info" | "warning" | "success" | "error";
  type Alert = {
    text: string | JSX.Element | null;
    status?: string;
    id: number;
  };

  type Context = {
    alert: Alert[];
    set: (payload: { text: string | JSX.Element; status?: N_Toast.Status }) => void;
    remove: (payload: number) => void;
    clear: () => void;
  };

  // Provider Component
  namespace Provider {
    type Props = { children: React.ReactNode };
    type Payload = { text: string | JSX.Element; status?: N_Toast.Status };
  }

  // Text Component
  namespace Text {
    type Props = { item: Alert };
  }

  // Portal Component
  namespace Portal {
    type Props = N_Toast.Props & { anchor: HTMLDivElement | null };
  }
}
