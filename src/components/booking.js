import React, { useState } from "react";
import {} from "react-bootstrap";
import { Form, Container, Button, Row, Col, InputGroup } from "react-bootstrap";

function Booking() {
  const [passenger, setPassenger] = useState([]);

  function addPassenger(event) {
    event.preventDefault();
    const formData = new FormData(event.target),
      formDataObj = Object.fromEntries(formData.entries());
    console.log(formData, formDataObj);
  }
  return (
    <>
      <Container>
        <Form style={{ "margin-bottom": "60px" }}>
          <Container>
            <br />
            <Row>
              <Col>
                <Form.Group value="formBasicEmail">
                  <Form.Label>From</Form.Label>
                  <Form.Control type="text" placeholder="Source" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group value="formBasicPassword">
                  <Form.Label>To</Form.Label>
                  <Form.Control type="text" placeholder="Destination" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              {" "}
              <Col>
                <Form.Group value="formBasicEmail">
                  <Form.Label>Train Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Train Name" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group value="formBasicPassword">
                  <Form.Label>Train Number</Form.Label>
                  <Form.Control type="number" placeholder="XXXXX" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group value="formBasicEmail">
                  <Form.Label>Source Time</Form.Label>
                  <Form.Control type="time" placeholder="Source Time" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group value="formBasicPassword">
                  <Form.Label>Destination Time</Form.Label>
                  <Form.Control type="time" placeholder="Destination Time" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group value="formBasicPassword">
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="date" placeholder="Destination Time" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group value="ControlSelect1">
                  <Form.Label>Class</Form.Label>
                  <Form.Control as="select">
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                  </Form.Control>
                </Form.Group>
                <Form size="sm" className="mb-3"></Form>
              </Col>
            </Row>
            <Form>
              <Row>
                {" "}
                <Col>
                  <Form.Group value="passengerName">
                    <Form.Label>Passenger Name</Form.Label>
                    <Form.Control type="text" placeholder="Passenger Name" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group value="gender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control as="select">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </Form.Control>
                  </Form.Group>
                  <Form size="sm" className="mb-3"></Form>
                </Col>
                <Col>
                  <Form.Group value="age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="XX" />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
            <Form>
              <Row>
                {" "}
                <Col>
                  <Form.Group value="passengerName">
                    <Form.Label>Passenger Name</Form.Label>
                    <Form.Control type="text" placeholder="Passenger Name" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group value="gender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control as="select">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </Form.Control>
                  </Form.Group>
                  <Form size="sm" className="mb-3"></Form>
                </Col>
                <Col>
                  <Form.Group value="age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="XX" />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
            <Form>
              <Row>
                {" "}
                <Col>
                  <Form.Group value="passengerName">
                    <Form.Label>Passenger Name</Form.Label>
                    <Form.Control type="text" placeholder="Passenger Name" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group value="gender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control as="select">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </Form.Control>
                  </Form.Group>
                  <Form size="sm" className="mb-3"></Form>
                </Col>
                <Col>
                  <Form.Group value="age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="XX" />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
            <Form>
              <Row>
                {" "}
                <Col>
                  <Form.Group value="passengerName">
                    <Form.Label>Passenger Name</Form.Label>
                    <Form.Control type="text" placeholder="Passenger Name" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group value="gender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control as="select">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </Form.Control>
                  </Form.Group>
                  <Form size="sm" className="mb-3"></Form>
                </Col>
                <Col>
                  <Form.Group value="age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="XX" />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
            <Form>
              <Row>
                {" "}
                <Col>
                  <Form.Group value="passengerName">
                    <Form.Label>Passenger Name</Form.Label>
                    <Form.Control type="text" placeholder="Passenger Name" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group value="gender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control as="select">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </Form.Control>
                  </Form.Group>
                  <Form size="sm" className="mb-3"></Form>
                </Col>
                <Col>
                  <Form.Group value="age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="XX" />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
            <Button variant="success" type="submit">
              Book
            </Button>
          </Container>
        </Form>
      </Container>
    </>
  );
}

export default Booking;
