export declare namespace N_Pagination {
  type Data = {
    info: { current: number; total: number };
    format: { limit: number; offset: number };
  };

  type Parameter = {
    data: Data;
    onChange: (pagination: Pagination) => void;
  };

  type DefaultProps = Required<Pick<Parameter, "data" | "onChange">>;

  type Props = Parameter & DefaultProps;
}
