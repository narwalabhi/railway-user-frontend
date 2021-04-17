import React from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import Add from "./station/add";
import Remove from "./station/delete";
import Get from "./station/get";

export default function station() {
  return (
    <>
      <Container>
        <br />
        <Tabs defaultActiveKey="get">
          <Tab eventKey="get" title="Get">
            <Get />
          </Tab>
          <Tab eventKey="add" title="Add">
            <Add />
          </Tab>
          <Tab eventKey="remove" title="Remove">
            <Remove />
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}
