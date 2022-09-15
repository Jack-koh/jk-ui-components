import React, { useState } from "react";
import json from "./data.json";
import { Table } from "lib/module/lib";
import { Ex } from "client/layout";
import { N_Table } from "lib/@types";
import { orderBy } from "lodash";
import source from "./source";

type Data = {
  Dessert: string;
  Calories: number;
  Fat: number;
  Carbs: number;
  Protein: number;
};

const header = [
  { title: "Dessert", property: "Dessert", flex: 2, order: true },
  { title: "Calories", property: "Calories", flex: 2, order: true },
  { title: "Fat", property: "Fat", flex: 2, align: "center", order: true },
  { title: "Carbs", property: "Carbs", flex: 2, align: "center", order: true },
  { title: "Protein", property: "Protein", flex: 2, order: true },
];

export function Order() {
  const [data, setData] = useState<Data[]>(json.tableData);
  const [sort, setSort] = useState<N_Table.Sort>({ Dessert: "desc" });

  const orderHandler = (sort: N_Table.Sort) => {
    const [key, value] = Object.entries(sort)[0];
    setData(orderBy(data, key, value));
    setSort(sort);
  };

  return (
    <Ex source={source} theme="gray" st={{ height: 300 }}>
      <React.Fragment>
        <Table>
          <Table.Head data={header} order={{ sort, onChange: orderHandler }} />
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
      </React.Fragment>
    </Ex>
  );
}
