const source = {
  jsx: `import React from "react";
import { Select, Button, CheckBox } from "lib/module/lib";
import source from "./source";
import "./Custom.css";

export function Custom() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around", gap: 20 }}>
      <Select multiple name="custom" id="custom-select-button">
        <Select.Summary placeholder="Button style" />
        <Select.Options>
          <Select.Item title="Paperclips (Box)" value="1">
            <Button>Paperclips (Box)</Button>
          </Select.Item>
          <Select.Item title="Paper (Case)" value="2">
            <Button>Paper (Case)</Button>
          </Select.Item>
          <Select.Item title="Waste Basket" value="3">
            <Button>Waste Basket</Button>
          </Select.Item>
        </Select.Options>
      </Select>

      <Select multiple id="custom-select-checkbox">
        <Select.Summary placeholder="Checkbox style" />
        <Select.Options>
          <Select.Item title="Jelly Bean" value="1">
            {({ selected }) => (
              <div>
                <CheckBox checked={selected ? 1 : 0} />
                <span>Jelly Bean</span>
              </div>
            )}
          </Select.Item>
          <Select.Item title="KitKat" value="2">
            {({ selected }) => (
              <div>
                <CheckBox checked={selected ? 1 : 0} />
                <span>KitKat</span>
              </div>
            )}
          </Select.Item>
          <Select.Item title="Lollipop" value="3">
            {({ selected }) => (
              <div>
                <CheckBox checked={selected ? 1 : 0} />
                <span>Lollipop</span>
              </div>
            )}
          </Select.Item>
        </Select.Options>
      </Select>
    </div>
  );
}`,
  css: `#custom-select-button .jk__select__button {
  background-color: #edf7ed;
  border-color: #d4ffd4;
}

#custom-select-button.active .jk__select__button {
  border-color: #133615;
}

#custom-select-button .jk__select__item {
  padding: 0;
}

#custom-select-button .jk__select__options {
  top: 50px;
  box-shadow: none;
  border: 1px solid #133615;
}

#custom-select-button .jk__select__item .jk__button {
  width: 100%;
  height: 100%;
  border-radius: 0;
  background-color: #edf7ed;
  color: #1e4620;
}

#custom-select-button .jk__select__item.selected .jk__button {
  background-color: #d4ffd4;
  color: #133615;
  font-weight: 700;
}

#custom-select-checkbox .jk__select__item > div {
  display: flex;
  align-items: center;
  gap: 20px;
}`,
};

export default source;
