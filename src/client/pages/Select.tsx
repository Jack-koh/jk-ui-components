import React from "react";

import { Select } from "client/components";
import { Content } from "client/layout";

function SelectPage() {
  return (
    <Content>
      <Content.Docs title="Select">
        <Content.Docs.Article heading="Basic" description="기본 형태의 Select 입니다.">
          <Select.Basic />
        </Content.Docs.Article>

        <Content.Docs.Article heading="Multiple" description="여러개의 값들을 선택할수 있습니다.">
          <Select.Multiple />
        </Content.Docs.Article>

        <Content.Docs.Article
          heading="Controlled"
          description="선택한 값들을 onChange 함수를 통해 받아볼수 있습니다.">
          <Select.Controlled />
        </Content.Docs.Article>

        <Content.Docs.Article
          heading="Custom"
          description="select element를 원하는 스타일로 만들수 있습니다.">
          <Select.Custom />
        </Content.Docs.Article>
      </Content.Docs>
    </Content>
  );
}

export default SelectPage;
