const source = {
  jsx: `import * as React from 'react'
import { Accordion } from "lib/module/lib";
import "./Custom.scss";
    
export default function CustomAccordion() {

  return (
    <React.Fragment>
      <Accordion id="custom-accordion-example-01">
        <Accordion.Summary className="custom-summary">
          <span className="title">Title area</span>
          <span className="description">Description</span>
        </Accordion.Summary>
        <Accordion.Collapse className="custom-collapse">
          Fugiat cillum anim est ipsum veniam nulla labore ad est. Officia nisi exercitation est
          magna consectetur. Ex aute ut est elit eu in ipsum laboris reprehenderit elit qui
          culpa.
        </Accordion.Collapse>
      </Accordion>
    </React.Fragment>
  }
)`,
  css: `#custom-accordion-example-01 {
  border-radius: 0;
  box-shadow: none;
  background-color: rgba(0, 0, 0, 0.03);
}

#custom-accordion-example-01 .custom-summary {
  flex-direction: row-reverse;
  border: 1px solid rgba(0, 0, 0, 0.12);
}

#custom-accordion-example-01 .custom-summary .jk__accordion__summary__content {
  width: 100%;
  padding-left: 8px;
  display: flex;
}

#custom-accordion-example-01 .custom-summary .jk__accordion__summary__content span.title {
  flex: 1;
  font-size: 16;
  font-weight: 700;
}

#custom-accordion-example-01 .custom-summary .jk__accordion__summary__content span.description {
  flex: 3;
}

#custom-accordion-example-01 .custom-collapse {
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-top: none;
}`,
};

export default source;
