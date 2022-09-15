import React from "react";
import { Content } from "client/layout";
import { Radio } from "client/components";

function RadioPage() {
  return (
    <Content>
      <Content.Docs title="Radio">
        <Content.Docs.Article heading="Basic">
          <Radio.Basic />
        </Content.Docs.Article>
      </Content.Docs>
    </Content>
  );
}

export default RadioPage;
