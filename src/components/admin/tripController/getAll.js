import React from "react";
import { Form, Container, Button } from "react-bootstrap";

export default function Get(props) {
  return (
    <Container>
      <Form>
        <Container>
          <br />
          <Button variant="success" type="submit">
            Get All
          </Button>
        </Container>
      </Form>
    </Container>
  );
}
