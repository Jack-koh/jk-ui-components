import React from "react";
import { Input } from "client/components";
import { Content } from "client/layout";

function InputPage() {
  return (
    <Content>
      <Content.Docs title="Input">
        <Content.Docs.Article heading="Basic">
          <Input.Basic />
        </Content.Docs.Article>
      </Content.Docs>
    </Content>
  );
}

export default InputPage;
