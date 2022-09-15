import React, { useState } from "react";
import json from "./data.json";
import { Table } from "lib/module/lib";
import { Ex } from "client/layout";
import source from "./source";

type Data = {
  Dessert: string;
  Calories: number;
  Fat: number;
  Carbs: number;
  Protein: number;
};

const data = json.tableData;
const header = [
  { title: "Dessert", property: "Dessert", flex: 2 },
  { title: "Calories", property: "Calories", flex: 2 },
  { title: "Fat", property: "Fat", flex: 2, align: "center" },
  { title: "Carbs", property: "Carbs", flex: 2, align: "center" },
  { title: "Protein", property: "Protein", flex: 2 },
];

export function CheckBoxTable() {
  const [selected, setSelected] = useState<Data[]>([]);

  return (
    <Ex source={source} theme="gray" st={{ height: 300 }}>
      <React.Fragment>
        <Table>
          <Table.Head
            data={header}
            checkbox={{
              indeterminate: selected.length > 0 && selected.length < data.length,
              onChange: (e) => {
                const { checked } = e.target;
                setSelected(checked ? data : []);
              },
            }}
          />
          <Table.Body data={data}>
            {({ rowData }) => {
              return (
                <Table.Row key={rowData.Dessert}>
                  <Table.Tr
                    data={rowData}
                    checkbox={{
                      checked: !!selected.find((el) => el.Dessert === rowData.Dessert),
                      onChange: (e) => {
                        const { checked } = e.target;
                        if (checked) setSelected([...selected, rowData]);
                        else setSelected(selected.filter((el) => el.Dessert !== rowData.Dessert));
                      },
                    }}
                  />
                </Table.Row>
              );
            }}
          </Table.Body>
        </Table>
      </React.Fragment>
    </Ex>
  );
}
