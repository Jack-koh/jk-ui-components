import React from "react";
import { Content } from "client/layout";
import { Modal } from "client/components";

function ModalPage() {
  return (
    <Content>
      <Content.Docs title="Modal">
        <Content.Docs.Article heading="Basic">
          <Modal.Basic />
        </Content.Docs.Article>

        <Content.Docs.Article heading="Nested modal">
          <Modal.Nested />
        </Content.Docs.Article>

        <Content.Docs.Article heading="Layout">
          <Modal.Layout />
        </Content.Docs.Article>
      </Content.Docs>
    </Content>
  );
}

export default ModalPage;
