import React from "react";
import { Content } from "client/layout";
import { CheckBox } from "client/components";

function CheckBoxPage() {
  return (
    <Content>
      <Content.Docs title="CheckBox">
        <Content.Docs.Article heading="Basic" description="기본 형태의 CheckBox 입니다.">
          <CheckBox.Basic />
        </Content.Docs.Article>

        <Content.Docs.Article heading="Label" description="CheckBox에게 label을 제공할수 있습니다.">
          <CheckBox.Label />
        </Content.Docs.Article>

        <Content.Docs.Article heading="Uncontrolled" description="Uncontrolled">
          <CheckBox.Label />
        </Content.Docs.Article>

        <Content.Docs.Article heading="Controlled" description="Controlled">
          <CheckBox.Label />
        </Content.Docs.Article>
      </Content.Docs>
    </Content>
  );
}

export default CheckBoxPage;
