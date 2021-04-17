import React from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import Add from "./tripController/add";
import Delete from "./tripController/delete";
import Get from "./tripController/get";
import GetAll from "./tripController/getAll";
import GetSrcDes from "./tripController/getSrcDsc";

export default function station() {
  return (
    <>
      <Container>
        <br />
        <Tabs defaultActiveKey="get">
          <Tab eventKey="get" title="Get">
            <Get />
          </Tab>
          <Tab eventKey="getAll" title="Get All">
            <GetAll />
          </Tab>
          <Tab eventKey="getSrcDsc" title="Get Src & Dest">
            <GetSrcDes />
          </Tab>
          <Tab eventKey="add" title="Add">
            <Add />
          </Tab>
          <Tab eventKey="remove" title="Delete">
            <Delete />
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}
