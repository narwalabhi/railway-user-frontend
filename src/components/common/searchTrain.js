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
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Modal.Dialog>
              <Modal.Header>
                <Modal.Title>Search Train</Modal.Title>
                <Button variant="secondary">Search</Button>
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
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
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
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
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
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
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
                      <Form.Control size="sm" as="select">
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                      </Form.Control>
                    </InputGroup>
                    <Form size="sm" className="mb-3"></Form>
                  </Col>
                </Row>
              </Modal.Body>
            </Modal.Dialog>
          </Col>
        </Row>
      </Container>
      ;
    </>
  );
}

export default SearchTrain;
