import React from "react";
import { Content } from "client/layout";
import { Popover } from "client/components";

function PopoverPage() {
  return (
    <Content>
      <Content.Docs title="Popover">
        <Content.Docs.Article heading="Basic">
          <Popover.Basic />
        </Content.Docs.Article>

        <Content.Docs.Article heading="Position">
          <Popover.Position />
        </Content.Docs.Article>

        <Content.Docs.Article heading="Nested">
          <Popover.Nested />
        </Content.Docs.Article>

        <Content.Docs.Article heading="Layout">
          <Popover.Layout />
        </Content.Docs.Article>
      </Content.Docs>
    </Content>
  );
}

export default PopoverPage;
