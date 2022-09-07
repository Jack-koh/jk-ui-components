import React, { useState } from "react";
import { Select } from "lib/module/lib";
import { Ex } from "client/layout";
import source from "./source";

export function Controlled() {
  const [selected, setSelected] = useState("");
  const [selectedList, setSelectedList] = useState(["1"]);

  const handleSelect = (value) => {
    setSelected(value);
  };

  const handleSelectList = (value) => {
    setSelectedList(value);
  };

  console.log(selectedList);

  return (
    <Ex source={source}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Select
          name="controlled"
          onChange={(value) => {
            handleSelect(value);
          }}>
          <Select.Summary />
          <Select.Options>
            <Select.Item title="Paperclips (Box)" value="1" />
            <Select.Item title="Paper (Case)" value="2" />
            <Select.Item title="Waste Basket" value="3" />
          </Select.Options>
        </Select>

        <Select
          multiple
          onChange={(value) => {
            handleSelectList(value);
          }}>
          <Select.Summary />
          <Select.Options>
            <Select.Item title="Jelly Bean" value="1" selected />
            <Select.Item title="KitKat" value="2" />
            <Select.Item title="Lollipop" value="3" />
            <Select.Item title="Marshmallow" value="4" />
          </Select.Options>
        </Select>
      </div>
    </Ex>
  );
}
