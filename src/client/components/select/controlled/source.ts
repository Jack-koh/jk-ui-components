const source = {
  jsx: `import React, { useState } from "react";
import { Select, Button } from "lib/module/lib";
import source from "./source";

export function Controlled() {
  const [selected, setSelected] = useState("");
  const [selectedList, setSelectedList] = useState(["1"]);
  const [keepValueDisabled, setKeepValueDisabled] = useState(false);
  const [resetValueDisabled, setResetValueDisabled] = useState(false);

  const handleSelect = (value) => {
    setSelected(value);
  };

  const handleSelectList = (value) => {
    setSelectedList(value);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around", gap: 20, flexWrap: "wrap" }}>
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

      <Select label="Reset value" disabled={{ value: keepValueDisabled, shouldKeepValue: true }}>
        <Select.Summary placeholder="initial value" />
        <Select.Options>
          <Select.Item title="Ten" value="Ten" selected />
          <Select.Item title="Twenty" value="Twenty" />
          <Select.Item title="Thirty" value="Thirty" />
        </Select.Options>
      </Select>

      <div style={{ width: 300, alignSelf: "flex-end" }}>
        <Button st={{ height: 40 }} onClick={() => setKeepValueDisabled(!keepValueDisabled)}>
          Keep value toggle
        </Button>
      </div>

      <Select label="Keep value" disabled={resetValueDisabled}>
        <Select.Summary placeholder="initial value" />
        <Select.Options>
          <Select.Item title="Ten" value="Ten" selected />
          <Select.Item title="Twenty" value="Twenty" />
          <Select.Item title="Thirty" value="Thirty" />
        </Select.Options>
      </Select>

      <div style={{ width: 300, alignSelf: "flex-end" }}>
        <Button st={{ height: 40 }} onClick={() => setResetValueDisabled(!resetValueDisabled)}>
          Reset value toggle
        </Button>
      </div>
    </div>
  );
}`,
};

export default source;
