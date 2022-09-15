import React from "react";
import { Select, Button, CheckBox } from "lib/module/lib";
import { Ex } from "client/layout";
import source from "./source";
import "./Custom.css";

export function Custom() {
  return (
    <Ex source={source}>
      <div style={{ display: "flex", justifyContent: "space-around", gap: 20 }}>
        <Select multiple id="custom-select-button">
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
                  <CheckBox checked={selected} />
                  <span>Jelly Bean</span>
                </div>
              )}
            </Select.Item>
            <Select.Item title="KitKat" value="2">
              {({ selected }) => (
                <div>
                  <CheckBox checked={selected} />
                  <span>KitKat</span>
                </div>
              )}
            </Select.Item>
            <Select.Item title="Lollipop" value="3">
              {({ selected }) => (
                <div>
                  <CheckBox checked={selected} />
                  <span>Lollipop</span>
                </div>
              )}
            </Select.Item>
          </Select.Options>
        </Select>
      </div>
    </Ex>
  );
}
