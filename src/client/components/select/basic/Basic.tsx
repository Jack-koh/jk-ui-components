import React from "react";
import { Select } from "lib/module/lib";
import { Ex } from "client/layout";
import source from "./source";

export function Basic() {
  return (
    <Ex
      source={source}
      st={{ display: "flex", justifyContent: "space-around", gap: 20, flexWrap: "wrap" }}>
      <Select label="Single">
        <Select.Summary />
        <Select.Options>
          <Select.Item title="apple" value="apple" />
          <Select.Item title="banana" value="banana" />
          <Select.Item title="carrot" value="carrot" />
          <Select.Item title="grape" value="grape" />
          <Select.Item title="peach" value="peach" />
        </Select.Options>
      </Select>

      <Select label="Default">
        <Select.Summary />
        <Select.Options>
          <Select.Item title="Harry Kane" value="0" selected />
          <Select.Item title="Oliver Hansen" value="1" />
          <Select.Item title="Van Henry" value="2" />
          <Select.Item title="April Tucker" value="3" />
          <Select.Item title="Ralph Hubbard" value="4" />
        </Select.Options>
      </Select>

      <Select label="Place holder">
        <Select.Summary placeholder="place holder" />
        <Select.Options>
          <Select.Item title="Ten" value="Ten" />
          <Select.Item title="Twenty" value="Twenty" />
          <Select.Item title="Thirty" value="Thirty" />
        </Select.Options>
      </Select>

      <Select label="Disabled" disabled>
        <Select.Summary placeholder="disabled" />
        <Select.Options>
          <Select.Item title="Ten" value="Ten" />
          <Select.Item title="Twenty" value="Twenty" />
          <Select.Item title="Thirty" value="Thirty" />
        </Select.Options>
      </Select>

      <Select label="Error" className="error">
        <Select.Summary />
        <Select.Options>
          <Select.Item title="Ten" value="Ten" />
          <Select.Item title="Twenty" value="Twenty" />
          <Select.Item title="Thirty" value="Thirty" />
        </Select.Options>
      </Select>
    </Ex>
  );
}
