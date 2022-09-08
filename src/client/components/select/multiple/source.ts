const source = {
  jsx: `import React from "react";
import { Select } from "lib/module/lib";
import source from "./source";

export function Multiple() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around", gap: 20 }}>
      <Select name="multiple" multiple>
        <Select.Summary placeholder="place holder" />
        <Select.Options>
          <Select.Item title="Frozen yoghurt" value="Frozen yoghurt" />
          <Select.Item title="Ice cream sandwich" value="Ice cream sandwich" />
          <Select.Item title="Eclair" value="Eclair" />
          <Select.Item title="Cupcake" value="Cupcake" />
          <Select.Item title="Gingerbread" value="Gingerbread" />
        </Select.Options>
      </Select>

      <Select multiple>
        <Select.Summary />
        <Select.Options>
          <Select.Item title="India" value="India" selected />
          <Select.Item title="China" value="China" selected />
          <Select.Item title="Italy" value="Italy" />
          <Select.Item title="United States'" value="United States'" />
          <Select.Item title="Canada" value="Canada" />
        </Select.Options>
      </Select>
    </div>
  );
}`,
};

export default source;
