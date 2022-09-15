import React from "react";
import { Content } from "client/layout";
import { Table } from "client/components";

function TablePage() {
  return (
    <Content>
      <Content.Docs title="Table">
        <Content.Docs.Article heading="Basic">
          <Table.Basic />
        </Content.Docs.Article>

        <Content.Docs.Article heading="Order">
          <Table.Order />
        </Content.Docs.Article>

        <Content.Docs.Article heading="Pagination">
          <Table.Paging />
        </Content.Docs.Article>

        <Content.Docs.Article heading="CheckBox">
          <Table.CheckBoxTable />
        </Content.Docs.Article>

        <Content.Docs.Article heading="Row expand">
          <Table.RowExpand />
        </Content.Docs.Article>
      </Content.Docs>
    </Content>
  );
}

export default TablePage;
