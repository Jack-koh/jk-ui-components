import React, { useState } from "react";
import json from "./data.json";
import { Table, Pagination } from "lib/module/lib";
import { Ex } from "client/layout";
import source from "./source";

type Data = {
  Dessert: string;
  Calories: number;
  Fat: number;
  Carbs: number;
  Protein: number;
};

type Paging = {
  info: { current: number; total: number };
  format: { limit: number; offset: number };
};

const header = [
  { title: "Dessert", property: "Dessert", flex: 2 },
  { title: "Calories", property: "Calories", flex: 2 },
  { title: "Fat", property: "Fat", flex: 2, align: "center" },
  { title: "Carbs", property: "Carbs", flex: 2, align: "center" },
  { title: "Protein", property: "Protein", flex: 2 },
];

const initialData = json.tableData.slice(0, 20);

export function Paging() {
  const [data, setData] = useState<Data[]>(initialData);
  const [paging, setPaging] = useState<Paging>({
    info: { current: 1, total: Math.ceil(json.tableData.length / 20) },
    format: { limit: 20, offset: 0 },
  });

  const pagingHandler = (paging: Paging) => {
    const { limit, offset } = paging.format;
    return json.tableData.slice(offset, limit + offset);
  };

  return (
    <Ex source={source} theme="gray" st={{ height: 350 }}>
      <React.Fragment>
        <Table st={{ height: "calc(100% - 50px)" }}>
          <Table.Head data={header} />
          <Table.Body data={data}>
            {({ rowData }) => {
              return (
                <Table.Row key={rowData.Dessert}>
                  <Table.Tr data={rowData} />
                </Table.Row>
              );
            }}
          </Table.Body>
        </Table>
        <Pagination
          data={paging}
          onChange={(data) => {
            setData(pagingHandler(data));
            setPaging(data);
          }}
        />
      </React.Fragment>
    </Ex>
  );
}
