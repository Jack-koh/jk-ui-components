import React from "react";
import { Modal, Button } from "lib/module/lib";
import { Ex } from "client/layout";
import source from "./source";

export function Nested() {
  return (
    <Ex source={source} st={{ display: "flex", justifyContent: "center" }}>
      <React.Fragment>
        <Modal
          clickOutside
          content={() => {
            return (
              <Modal.Content st={{ padding: 30 }}>
                <div>
                  <p>Id sunt cupidatat sit elit deserunt cupidatat anim ipsum ad.</p>
                  <p>Lorem quis enim in ipsum eiusmod officia</p>

                  <Modal
                    content={({ closeHandler }) => {
                      return (
                        <Modal.Content st={{ padding: 30, width: 200 }}>
                          <div>
                            <p>Id sunt cupidatat sit elit deserunt cupidatat anim ipsum ad.</p>
                            <p>Lorem quis enim in ipsum eiusmod officia</p>
                            <br />
                            <Button onClick={closeHandler}>Close Child</Button>
                          </div>
                        </Modal.Content>
                      );
                    }}>
                    <Button
                      st={{ backgroundColor: "transparent", color: "#007fff", marginTop: 20 }}>
                      OPEN MODAL
                    </Button>
                  </Modal>
                </div>
              </Modal.Content>
            );
          }}>
          <Button st={{ backgroundColor: "transparent", color: "#007fff" }}>OPEN MODAL</Button>
        </Modal>
      </React.Fragment>
    </Ex>
  );
}
