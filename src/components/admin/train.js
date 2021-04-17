import React from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import Add from "./train/add";
import Remove from "./train/delete";
import Get from "./train/get";

export default function Train() {
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
