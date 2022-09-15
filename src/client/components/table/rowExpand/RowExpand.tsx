import React from "react";
import json from "./data.json";
import { Table, Accordion } from "lib/module/lib";
import { Ex } from "client/layout";
import source from "./source";
import "./RowExpand.css";

const data = json.tableData;
const header = [
  { title: "Dessert", property: "Dessert", flex: 2 },
  { title: "Calories", property: "Calories", flex: 2 },
  { title: "Fat", property: "Fat", flex: 2, align: "center" },
  { title: "Carbs", property: "Carbs", flex: 2, align: "center" },
  { title: "Protein", property: "Protein", flex: 2 },
];

export function RowExpand() {
  return (
    <Ex source={source} theme="gray" st={{ height: 300 }}>
      <React.Fragment>
        <Table id="row-expand-table">
          <Table.Head data={header} />
          <Table.Body data={data}>
            {({ rowData }) => {
              return (
                <Table.Row key={rowData.Dessert}>
                  <Accordion>
                    <Accordion.Summary st={{ height: 36, padding: 0 }}>
                      <Table.Tr data={rowData} st={{ height: 36 }} />
                    </Accordion.Summary>
                    <Accordion.Collapse>
                      Fugiat cillum anim est ipsum veniam nulla labore ad est. Officia nisi
                      exercitation est magna consectetur. Ex aute ut est elit eu in ipsum laboris
                      reprehenderit elit qui culpa.
                    </Accordion.Collapse>
                  </Accordion>
                </Table.Row>
              );
            }}
          </Table.Body>
        </Table>
      </React.Fragment>
    </Ex>
  );
}
