import React from "react";
import { Modal, Button } from "lib/module/lib";
import { Ex } from "client/layout";
import source from "./source";

export function Layout() {
  return (
    <Ex source={source} st={{ display: "flex", justifyContent: "center" }}>
      <React.Fragment>
        <Modal
          content={({ closeHandler }) => {
            return (
              <Modal.Content>
                <Modal.Summary>Modal title</Modal.Summary>
                <p>
                  Id sunt cupidatat sit elit deserunt cupidatat anim ipsum ad.
                  <br /> Lorem quis enim in ipsum eiusmod officia
                </p>
                <br />
                <p>
                  voluptate et eiusmod nostrud cillum adipisicing nulla non.
                  <br /> Labore aliquip proident cupidatat do quis.
                </p>
                <Modal.Actions>
                  <Button
                    onClick={() => {
                      closeHandler();
                    }}>
                    Cancel
                  </Button>
                  <Button>Save</Button>
                </Modal.Actions>
              </Modal.Content>
            );
          }}>
          <Button st={{ backgroundColor: "transparent", color: "#007fff" }}>OPEN MODAL</Button>
        </Modal>
      </React.Fragment>
    </Ex>
  );
}
