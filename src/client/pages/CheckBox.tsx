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

        <Content.Docs.Article heading="Label" description="CheckBox에게 Label을 제공할수 있습니다.">
          <CheckBox.Label />
        </Content.Docs.Article>

        <Content.Docs.Article
          heading="Controlled"
          description="사용하고자 하는 값들을 바인딩 하여 CheckBox를 제어 할수 있습니다.">
          <CheckBox.Controlled />
        </Content.Docs.Article>
      </Content.Docs>
    </Content>
  );
}

export default CheckBoxPage;
