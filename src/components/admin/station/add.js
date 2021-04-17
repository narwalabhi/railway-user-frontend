import React from "react";
import { Form, Container, Button, Row, Col } from "react-bootstrap";

export default function Add(props) {
  return (
    <Container>
      <Form>
        <Container>
          <br />
          <Row> </Row>
          <Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Station Name</Form.Label>
                <Form.Control type="text" placeholder="Enter station" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Code</Form.Label>
                <Form.Control type="text" placeholder="Station code" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Zone</Form.Label>
                <Form.Control type="text" placeholder="Zone code" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="State code" />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="success" type="submit">
            Add
          </Button>
        </Container>
      </Form>
    </Container>
  );
}
