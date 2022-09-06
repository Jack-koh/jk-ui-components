import React, { useState, useReducer } from "react";
import produce from "immer";
import data from "./data.json";
import { Table } from "lib/module/lib";
import { N_Table } from "lib/@types";

type Data = {
  name: string;
  Calories: number;
  Fat: number;
  Carbs: number;
  Protein: number;
};

interface State {
  header: N_Table.Head.Data[];
  data: Data[];
  sort: Record<string, "DESC" | "ASC">;
}

type Actions = { type: "data"; payload: Data[] } | { type: "sort"; payload: N_Table.Sort };

const initialState: State = {
  header: [
    { title: "Dessert", property: "name", flex: 2, order: true },
    { title: "Calories", property: "Calories", flex: 2, order: true },
    { title: "Fat", property: "Fat", flex: 2, align: "center", order: true },
    { title: "Carbs", property: "Carbs", flex: 2, align: "center", order: true },
    { title: "Protein", property: "Protein", flex: 2 },
  ],
  data: data.tableData,
  sort: {},
};

const reducer = (state: State, actions: Actions) => {
  // prettier-ignore
  return produce(state, (draft) => {
    switch(actions.type) {
      case 'data': draft['data'] = actions.payload; break;
      case 'sort': draft['sort'] = actions.payload; break;
    }
  })
};

function TablePage() {
  const [state, setState] = useReducer(reducer, initialState);
  const { header, data } = state;

  const orderHandler = (sort: N_Table.Sort) => {
    const [key, value] = Object.entries(sort)[0] as [keyof Data, "DESC" | "ASC"];
    const data = [...state.data].sort((a, b) => {
      const desc = value === "DESC";
      if (a[key] > b[key]) return desc ? -1 : 1;
      if (a[key] < b[key]) return desc ? 1 : -1;
      return 0;
    });
    setState({ type: "data", payload: data });
    setState({ type: "sort", payload: sort });
  };

  return (
    <div style={{ padding: "10px 20px", width: "80%", height: "80%" }}>
      <Table>
        <Table.Head data={header} order={{ sort: state.sort, onChange: orderHandler }} />
        <Table.Body data={data}>
          {({ rowData, index }) => {
            return <Table.Row key={index} data={rowData} />;
          }}
        </Table.Body>
      </Table>
    </div>
  );
}

export default TablePage;
