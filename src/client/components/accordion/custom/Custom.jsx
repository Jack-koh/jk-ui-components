import React from "react";
import { Accordion } from "lib/module/lib";
import { Ex } from "client/layout";
import source from "./source";
import "./Custom.css";

export function Custom() {
  return (
    <Ex source={source}>
      <React.Fragment>
        <Accordion id="custom-accordion-example-01">
          <Accordion.Summary className="custom-summary">
            <span className="title">Title area</span>
            <span className="description">Description</span>
          </Accordion.Summary>
          <Accordion.Collapse className="custom-collapse">
            Fugiat cillum anim est ipsum veniam nulla labore ad est. Officia nisi exercitation est
            magna consectetur. Ex aute ut est elit eu in ipsum laboris reprehenderit elit qui culpa.
          </Accordion.Collapse>
        </Accordion>
      </React.Fragment>
    </Ex>
  );
}
