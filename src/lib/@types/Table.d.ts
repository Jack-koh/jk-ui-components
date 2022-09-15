import React, { Dispatch } from "react";
import { N_CheckBox } from "lib/@types";

export declare namespace N_Table {
  type Sort = Record<string, "desc" | "asc">;
  type Order = {
    sort: Sort;
    onChange: (sort: Sort) => void;
  };

  type Header = {
    title: string;
    property: string;
    order?: boolean;
    toolTip?: boolean;
    align?: string;
    width?: number;
    flex?: number;
    hidden?: boolean;
  };

  interface Context {
    state: { header: Header[]; windowSize: number };
    setState: Dispatch<Actions>;
    resize?: boolean;
    order?: Order;
  }

  interface State {
    header: Header[];
    windowSize: number;
  }

  type Actions = { type: "header"; payload: Header[] } | { type: "windowSize"; payload: number };

  // ===================== Table ========================
  type Parameter = {
    loading?: boolean;
    id?: string;
    className?: string;
    children: React.ReactNode;
    resize?: boolean;
    order?: Order;
    st?: React.CSSProperties;
  };

  type DefaultProps = Required<Pick<Parameter<unknown>, "loading" | "className" | "resize">>;
  type Props = Parameter & DefaultProps;

  // ===================== HEAD ========================
  namespace Head {
    interface Data {
      title: string;
      property: string;
      order?: boolean;
      toolTip?: boolean;
      align?: string;
      width?: number;
      flex?: number;
      hidden?: boolean;
    }

    type Props = {
      data: Data[];
      order?: Order;
      children?: (payload: { column: Header }) => JSX.Element | string;
      checkbox?: N_CheckBox.Props;
    };
  }

  // ===================== TH ========================
  namespace Th {
    type Props = {
      children: JSX.Element | string;
      column: Header;
      index: number; // hidden 숨기기전 원래 index
      isLast: boolean;
    };

    namespace Order {
      type Props = { property: string; order?: Order };
    }
  }

  // ===================== BODY ========================
  namespace Body {
    type Props<T> = {
      data: T[];
      children?: (payload: { rowData: T; index: number }) => React.ReactNode;
    };
  }

  // ===================== TD ========================
  namespace Td {
    type Props<T> = {
      column: Header;
      value: T;
      children: React.ReactNode;
    };
  }

  namespace Row {
    type Parameter = {
      className?: string;
      children: JSX.Element;
      st?: React.CSSProperties;
    };

    type Props = Parameter &
      React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
  }

  namespace Tr {
    type Parameter<T> = {
      className?: string;
      checkbox?: N_CheckBox.Props;
      data: T;
      st?: React.CSSProperties;
      children?: (payload: { property: string; value: T[keyof T] }) => React.ReactNode;
    };

    type DefaultProps = Required<Pick<Parameter<Record<string, string>>, "data">>;
    type Props<T> = Parameter<T> & Partial<React.MouseEventHandler>;
  }
}
