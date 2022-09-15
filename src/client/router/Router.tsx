import React from "react";
import * as Layout from "client/layout";
import { useRoutes } from "react-router-dom";
import * as Docs from "client/pages";

const Router: React.FC = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout.App />,
      children: [
        {
          path: "components",
          element: <Layout.Main />,
          children: [
            { index: true, element: <Docs.Documentation /> },
            { path: "react-accordion", element: <Docs.Accordion /> },
            { path: "react-button", element: <Docs.Button /> },
            { path: "react-checkBox", element: <Docs.CheckBox /> },
            { path: "react-toast", element: <Docs.Toast /> },
            { path: "react-input", element: <Docs.Input /> },
            { path: "react-modal", element: <Docs.Modal /> },
            { path: "react-pagination", element: <div>pagination</div> },
            { path: "react-popover", element: <Docs.Popover /> },
            { path: "react-radio", element: <Docs.Radio /> },
            { path: "react-select", element: <Docs.Select /> },
            { path: "react-table", element: <Docs.Table /> },

            { path: "react-textArea", element: <div>textArea</div> },
            { path: "react-toolTip", element: <div>toolTip</div> },
            { path: "react-switch", element: <div>switch</div> },
            { path: "react-dropZone", element: <div>dropZone</div> },
            { path: "react-slider", element: <div>slider</div> },
            { path: "react-resizer", element: <div>resizer</div> },

            { path: "react-autoComplete", element: <div>autoComplete</div> },
            { path: "react-loading", element: <div>loading</div> },
            { path: "react-noData", element: <div>noData</div> },
            { path: "react-search", element: <div>search</div> },
          ],
        },
      ],
    },
  ]);
};

export default Router;
