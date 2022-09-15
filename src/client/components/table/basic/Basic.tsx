import React from "react";
import json from "./data.json";
import { Table } from "lib/module/lib";
import { Ex } from "client/layout";
import source from "./source";

const data = json.tableData;
const header = [
  { title: "Dessert", property: "Dessert", flex: 2 },
  { title: "Calories", property: "Calories", flex: 2 },
  { title: "Fat", property: "Fat", flex: 2, align: "center" },
  { title: "Carbs", property: "Carbs", flex: 2, align: "center" },
  { title: "Protein", property: "Protein", flex: 2 },
];

export function Basic() {
  return (
    <Ex source={source} theme="gray" st={{ height: 300 }}>
      <React.Fragment>
        <Table>
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
      </React.Fragment>
    </Ex>
  );
}
