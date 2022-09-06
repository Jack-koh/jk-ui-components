import React from "react";
import { Content } from "client/layout";
import { Alert } from "client/components";

function AlertPage() {
  return (
    <Content>
      <Content.Docs title="Alert">
        <Content.Docs.Article
          heading="Anchor Position"
          description="원하는 위치에 Alert를 위치시킵니다.">
          <Alert.Basic />
        </Content.Docs.Article>

        <Content.Docs.Article
          heading="Anchor Position"
          description="Alert 컴포넌트의 자식요소를 기준으로 여러가지 position 옵션을 조합해 위치를 조정할수 있습니다.">
          <Alert.Anchor />
        </Content.Docs.Article>

        <Content.Docs.Article
          heading="Status"
          description="context set 함수의 status option 을 통해 alert에 상태를 전달할수 있습니다.">
          <Alert.Status />
        </Content.Docs.Article>

        <Content.Docs.Article
          heading="Custom"
          description="자신이 원하는 위치에 Alert 를 위치시킬수 있으며 css 를 이용해 원하는 스타일을 적용시킬수도 있습니다.">
          <Alert.Custom />
        </Content.Docs.Article>
      </Content.Docs>
    </Content>
  );
}

export default AlertPage;
