import React from "react";
import { Form, Container, Button, Row, Col } from "react-bootstrap";

export default function Add(props) {
  return (
    <Container>
      <Form>
        <Container>
          <br />
          <Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>From</Form.Label>
                <Form.Control type="text" placeholder="Source" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>To</Form.Label>
                <Form.Control type="text" placeholder="Destination" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            {" "}
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Train Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Train Name" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Train Number</Form.Label>
                <Form.Control type="number" placeholder="XXXXX" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Source Time</Form.Label>
                <Form.Control type="time" placeholder="Source Time" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Destination Time</Form.Label>
                <Form.Control type="time" placeholder="Destination Time" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Train Distance</Form.Label>
                <Form.Control type="number" placeholder="Train distance" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Hours</Form.Label>
                <Form.Control type="text" placeholder="Hour" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Minutes</Form.Label>
                <Form.Control type="text" placeholder="Minutes" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>1AC</Form.Label>
                <Form.Control type="number" placeholder="0" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>2AC</Form.Label>
                <Form.Control type="number" placeholder="0" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>3AC</Form.Label>
                <Form.Control type="number" placeholder="0" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>CC</Form.Label>
                <Form.Control type="number" placeholder="0" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>SS</Form.Label>
                <Form.Control type="number" placeholder="0" />
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
