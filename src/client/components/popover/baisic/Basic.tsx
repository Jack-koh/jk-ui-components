import React from "react";
import { Popover, Button } from "lib/module/lib";
import { Ex } from "client/layout";
import source from "./source";

export function Basic() {
  return (
    <Ex source={source} st={{ display: "flex", justifyContent: "center", gap: 20 }}>
      <React.Fragment>
        <Popover
          content={() => {
            return <p>The content of the Basic Popover.</p>;
          }}>
          <Button>OPEN</Button>
        </Popover>

        <Popover
          clickOutside
          content={() => {
            return (
              <p>
                Ut et anim eu sit nulla do veniam do enim dolor velit in. Quis ullamco irure eiusmod
                <br />
                mollit cupidatat tempor sunt est amet. Culpa qui sunt in ipsum ipsum non elit enim
                <br />
                voluptate aliquip id id exercitation nisi. Amet fugiat et adipisicing elit nisi
                <br />
                ullamco.
              </p>
            );
          }}>
          <Button>Click outside</Button>
        </Popover>

        <Popover
          clickInside
          content={() => {
            return (
              <p>
                Fugiat duis exercitation anim qui ipsum culpa nisi minim labore quis qui culpa
                <br />
                officia esse. Esse eu tempor velit ipsum est ipsum aliqua cillum sunt non excepteur
                <br />
                cupidatat amet. Ut pariatur ullamco esse velit elit.
                <br />
              </p>
            );
          }}>
          <Button>Click inside</Button>
        </Popover>
      </React.Fragment>
    </Ex>
  );
}
