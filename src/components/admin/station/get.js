import React from "react";
import { Form, Container, Button, Row, Col } from "react-bootstrap";

export default function Get(props) {
  return (
    <Container>
      <Form>
        <Container>
          <br />
          <Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Station Id</Form.Label>
                <Form.Control type="text" placeholder="Station Id" />
              </Form.Group>
            </Col>
            <Col />
          </Row>
          <Button variant="primary" type="submit">
            Get
          </Button>
        </Container>
      </Form>
    </Container>
  );
}
