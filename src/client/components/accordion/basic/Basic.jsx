import React from "react";
import { Accordion } from "lib/module/lib";
import { Ex } from "client/layout";
import source from "./source";

export function Basic() {
  return (
    <Ex source={source} theme="gray">
      <React.Fragment>
        <Accordion>
          <Accordion.Summary>Accordion</Accordion.Summary>
          <Accordion.Collapse>
            Fugiat cillum anim est ipsum veniam nulla labore ad est. Officia nisi exercitation est
            magna consectetur. Ex aute ut est elit eu in ipsum laboris reprehenderit elit qui culpa.
          </Accordion.Collapse>
        </Accordion>

        <Accordion rowToggle>
          <Accordion.Summary>Row Selection Accordion</Accordion.Summary>
          <Accordion.Collapse>
            Voluptate fugiat in reprehenderit consequat adipisicing qui proident enim. Aute occaecat
            ullamco in magna dolor occaecat laborum voluptate nisi in sit. Ad id incididunt nostrud
            voluptate consectetur aliquip. Tempor culpa aute sunt nulla irure cupidatat magna. Elit
            enim duis deserunt pariatur eu. Anim sit occaecat voluptate nisi. Laboris cillum Lorem
            quis proident cillum irure irure id occaecat culpa incididunt tempor.
          </Accordion.Collapse>
        </Accordion>

        <Accordion disabled>
          <Accordion.Summary>Disabled Accordion</Accordion.Summary>
          <Accordion.Collapse>
            Exercitation amet velit ut quis sunt duis fugiat cillum consectetur magna esse in.
            Proident elit veniam dolore ad voluptate elit deserunt proident nulla in esse
            reprehenderit. Minim nostrud eu nulla sit non et pariatur irure ex. Laboris exercitation
            qui enim sint aliqua veniam officia anim tempor cupidatat.
          </Accordion.Collapse>
        </Accordion>
      </React.Fragment>
    </Ex>
  );
}
