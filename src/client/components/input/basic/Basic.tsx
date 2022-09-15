import React from "react";
import { Input } from "lib/module/lib";
import { Ex } from "client/layout";
import source from "./source";

export function Basic() {
  return (
    <Ex
      source={source}
      st={{ display: "flex", justifyContent: "space-around", gap: 20, flexWrap: "wrap" }}>
      <Input placeholder="placeholder" label="Placeholder" />
      <Input type="password" label="Password" />
      <Input className="error" label="Error" />
      <Input disabled label="Disabled" />
    </Ex>
  );
}
