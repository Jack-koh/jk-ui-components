import React from "react";
import { Content } from "client/layout";
import { Accordion } from "client/components";

function AccordionPage() {
  return (
    <Content>
      <Content.Docs title="Accordion">
        <Content.Docs.Article heading="Basic" description="기본 형태의 Accordion 입니다.">
          <Accordion.Basic />
        </Content.Docs.Article>

        <Content.Docs.Article
          heading="Controlled"
          description="사용하고자 하는 값들을 바인딩 하여 Accordion 을 제어 할수 있습니다.">
          <Accordion.Controlled />
        </Content.Docs.Article>

        <Content.Docs.Article
          heading="Custom"
          description="css 를 이용하여 원하는 형태의 스타일을 적용할수 있습니다. ">
          <Accordion.Custom />
        </Content.Docs.Article>
      </Content.Docs>
    </Content>
  );
}

export default AccordionPage;
