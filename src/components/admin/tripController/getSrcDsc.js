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
                <Form.Label>Source </Form.Label>
                <Form.Control type="text" placeholder="Source" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Destination </Form.Label>
                <Form.Control type="text" placeholder="Destination" />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="success" type="submit">
            Get
          </Button>
        </Container>
      </Form>
    </Container>
  );
}
