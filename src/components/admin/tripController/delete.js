import React from "react";
import { Form, Container, Button, Row, Col } from "react-bootstrap";

export default function Delete(props) {
  return (
    <Container>
      <Form>
        <Container>
          <br />
          <Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Trip Id</Form.Label>
                <Form.Control type="text" placeholder="Trip Id" />
              </Form.Group>
            </Col>
            <Col />
          </Row>
          <Button variant="danger" type="submit">
            Delete
          </Button>
        </Container>
      </Form>
    </Container>
  );
}
