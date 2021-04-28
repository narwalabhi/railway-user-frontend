import {
  Button,
  Modal,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";

function FindTrain() {
  return (
    <>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Find Train</Modal.Title>
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
                  placeholder="Source Station"
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
                  placeholder="Destination Station"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <InputGroup size="sm" className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-sm">
                    Train No.
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="Train Number"
                />
              </InputGroup>
            </Col>
          </Row>
        </Modal.Body>
      </Modal.Dialog>
      ;
    </>
  );
}

export default FindTrain;
