import React from "react";
import { Modal, Button } from "lib/module/lib";
import { Ex } from "client/layout";
import source from "./source";

export function Basic() {
  return (
    <Ex source={source} st={{ display: "flex", justifyContent: "center", gap: 20 }}>
      <React.Fragment>
        <Modal
          clickOutside
          content={() => {
            return (
              <Modal.Content st={{ padding: 30 }}>
                <div>
                  <p>Id sunt cupidatat sit elit deserunt cupidatat anim ipsum ad.</p>
                  <p>Lorem quis enim in ipsum eiusmod officia</p>
                </div>
              </Modal.Content>
            );
          }}>
          <Button st={{ backgroundColor: "transparent", color: "#007fff" }}>OPEN MODAL</Button>
        </Modal>

        <Modal
          clickOutside
          transition={false}
          content={() => {
            return (
              <Modal.Content st={{ padding: 30 }}>
                <div>
                  <p>Id sunt cupidatat sit elit deserunt cupidatat anim ipsum ad.</p>
                  <p>Lorem quis enim in ipsum eiusmod officia</p>
                </div>
              </Modal.Content>
            );
          }}>
          <Button st={{ backgroundColor: "transparent", color: "#007fff" }}>OFF TRANSITION</Button>
        </Modal>
      </React.Fragment>
    </Ex>
  );
}
