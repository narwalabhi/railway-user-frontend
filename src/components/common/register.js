import React from "react";
import { Form, Button, Modal, Col, Row } from "react-bootstrap";

function RegisterModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Enter your details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First name" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label as="legend" column sm={2}>
                  Gender
                </Form.Label>
                <Row sm={10}>
                  <Col>
                    <Form.Check
                      type="radio"
                      label="Male"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios1"
                    />{" "}
                  </Col>
                  <Col>
                    <Form.Check
                      type="radio"
                      label="Female"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios2"
                    />{" "}
                  </Col>
                  <Col>
                    <Form.Check
                      type="radio"
                      label="Others"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios3"
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="number" placeholder="DOB" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Phone No</Form.Label>
                <Form.Control type="number" placeholder="Phone" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Text className="text-muted"></Form.Text>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RegisterModal;
