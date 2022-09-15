import React, { useState } from "react";
import { Input } from "lib/module/lib";
import { Ex } from "client/layout";
import source from "./source";

export function Controlled() {
  const [value, setValue] = useState("");
  return (
    <Ex
      source={source}
      st={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        gap: 10,
      }}>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <p style={{ width: 300 }}>
        <span>value: </span>
        <span>{value}</span>
      </p>
    </Ex>
  );
}
