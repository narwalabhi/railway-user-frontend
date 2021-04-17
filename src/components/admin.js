import React from "react";
import { Tabs, Tab, Container } from "react-bootstrap";
import Station from "./admin/station";
import Train from "./admin/train";
import TripController from "./admin/tripController";

function Admin(props) {
  if (props && props.user && props.user.role === "Admin")
    return (
      <>
        <Container>
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="station" title="Station">
              <Station />
            </Tab>
            <Tab eventKey="train" title="Train">
              <Train />
            </Tab>
            <Tab eventKey="controller" title="Trip Controller">
              <TripController />
            </Tab>
            <Tab eventKey="scheduler" title="Trip Scheduler"></Tab>
          </Tabs>
        </Container>
      </>
    );
  else return <></>;
}

export default Admin;
