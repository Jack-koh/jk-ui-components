import React from "react";
import { Input } from "lib/module/lib";
import { Ex } from "client/layout";
import source from "./source";

export function Basic() {
  return (
    <Ex
      source={source}
      st={{ height: 200, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Input />
      <Input type="password" />
      <Input className="error" />
      <Input disabled />
    </Ex>
  );
}
