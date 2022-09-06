import React from "react";
import { Content } from "client/layout";
import { Button } from "client/components";

function ButtonPage() {
  return (
    <Content>
      <Content.Docs title="Button">
        <Content.Docs.Article heading="Basic" description="기본 형태의 Button 입니다.">
          <Button.Basic />
        </Content.Docs.Article>

        <Content.Docs.Article heading="Loading" description="로딩 상태를 표현할수 있는 버튼입니다.">
          <Button.Loading />
        </Content.Docs.Article>
      </Content.Docs>
    </Content>
  );
}

export default ButtonPage;
