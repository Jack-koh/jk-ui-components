import React, { useState } from "react";
import { Accordion } from "lib/module/lib";
import { cx } from "lib/module/lib/functions";
import { Javascript, Css, Code } from "lib/module/lib/Icons";
import { CodeMirror } from "client/common";

import "./Example.scss";

type Props = {
  children: React.ReactNode;
  source: { jsx?: string; css?: string };
  theme?: "light" | "dark" | "gray";
};

function Ex(props: Props) {
  const { jsx, css } = props.source;
  const [expanded, setExpanded] = useState(false);
  const [view, setView] = useState("js");

  const showJs = () => expanded && setView("js");
  const showCss = () => expanded && setView("css");

  return (
    <div className={`ui-example ${props.theme}`}>
      <div className="example-content">{props.children}</div>
      <Accordion className="utils" expanded={expanded}>
        <Accordion.Summary>
          <div className={cx("tabs", { show: !!expanded })}>
            <Javascript
              className={cx({ active: view === "js" })}
              role="button"
              tabIndex={0}
              onClick={showJs}
              onKeyPress={showJs}
            />
            {css && (
              <Css
                className={cx({ active: view === "css" })}
                role="button"
                tabIndex={0}
                onKeyPress={showCss}
                onClick={showCss}
              />
            )}
          </div>
          <Code className="code-icon" onClick={() => setExpanded(!expanded)} />
        </Accordion.Summary>
        <Accordion.Collapse st={{ maxHeight: 900 }}>
          {view === "js" && <CodeMirror value={jsx} />}
          {view === "css" && <CodeMirror mode="css" value={css} />}
        </Accordion.Collapse>
      </Accordion>
    </div>
  );
}

Ex.defaultProps = { source: { jsx: "", scss: "" }, theme: "light" };

export default Ex;
