import axios from "axios";
import React, { useState } from "react";
import { Link, Redirect } from 'react-router-dom';
import {
  Button,
  Container,
  Modal,
  Row,
  Col,
  InputGroup,
  FormControl,
  Form,
} from "react-bootstrap";

function SearchTrain() {
 
  const [values, setValues] = useState({
    from: "",
    to: "",
    class: "",
    date: new Date(),
  });

  

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("values",JSON.stringify(values));
    // search();
    // props.history.push('/search-result');
    <Redirect to='/search-result'/>
  };

  const handleDateChange = (date) => {
    console.log(date.target.value);
    setValues((prev) => {
      return { ...prev, date: date.target.value };
    });
  };

  const handleClassCahange = (event) => {
    console.log(event.target.value);
    setValues((prev) => {
      return { ...prev, class: event.target.value };
    });
  };

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Modal.Dialog>
                <Modal.Header>
                  <Modal.Title>Search Train</Modal.Title>
                  <Link to={'/search-result'}>
                  <Button variant="secondary" type="submit">
                    Search
                  </Button>
                  </Link>
                </Modal.Header>
                <Modal.Body>
                  <Row>
                    <Col>
                      <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="inputGroup-sizing-sm">
                            From
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          aria-describedby="inputGroup-sizing-sm"
                          placeholder="From"
                          value={values.from}
                          onChange={(event) => {
                            setValues((prev) => {
                              console.log(event.target.value);
                              return { ...prev, from: event.target.value };
                            });
                          }}
                        />
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="inputGroup-sizing-sm">
                            To
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          aria-describedby="inputGroup-sizing-sm"
                          placeholder="To"
                          value={values.to}
                          onChange={(event) => {
                            setValues((prev) => {
                              console.log(event.target.value);
                              return { ...prev, to: event.target.value };
                            });
                          }}
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="inputGroup-sizing-sm">
                            Date
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          type="date"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                          onChange={handleDateChange}
                        />
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="inputGroup-sizing-sm">
                            Class
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                          size="sm"
                          as="select"
                          value={values.class}
                          onChange={handleClassCahange}
                        >
                          <option value="">--</option>
                          <option value="FAC">1 AC</option>
                          <option value="SAC">2 AC</option>
                          <option value="TAC">3 AC</option>
                          <option value="FC">FC</option>
                          <option value="CC">CC</option>
                          <option value="SL">SL</option>
                        </Form.Control>
                      </InputGroup>
                      <Form size="sm" className="mb-3"></Form>
                    </Col>
                  </Row>
                </Modal.Body>
              </Modal.Dialog>
            </Col>
          </Row>
        </form>
      </Container>
    </>
  );
}

export default SearchTrain;
