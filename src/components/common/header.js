import React from "react";
import {
  Navbar,
  Form,
  Button,
  Nav,
  Col,
  ButtonGroup,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import LoginModal from "./login";
import RegisterModal from "./register";

function Header({ user, userState }) {
  const [modalShow, setModalShow] = React.useState(false);
  const [registerModalShow, setRegisterModalShow] = React.useState(false);

  const button = (
    <Form inline>
      <Col>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Log In
        </Button>
        <LoginModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          userState={userState}
        />
      </Col>
      <Button variant="primary" onClick={() => setRegisterModalShow(true)}>
        Register
      </Button>
      <RegisterModal
        show={registerModalShow}
        onHide={() => setRegisterModalShow(false)}
      />
    </Form>
  );

  const loggedIn = (
    <Form inline>
      <Col>
        <DropdownButton
          variant="secondary"
          id="dropdown-basic-button"
          title="Hi, Harsh Pradhan"
        >
          <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Account</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Trips</Dropdown.Item>
        </DropdownButton>
      </Col>
      <Button
        variant="primary"
        onClick={() => {
          userState({});
          setModalShow(false);
        }}
      >
        Log Out
      </Button>
    </Form>
  );

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home"> INDIAN RAILS</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="booking">Book</Nav.Link>
          <Nav.Link href="find-train">Find Train</Nav.Link>
          {/* <Nav.Link href="about-us">About Us</Nav.Link>
          <Nav.Link href="contact">Contact</Nav.Link> */}
        </Nav>
        {user && user.role && loggedIn}
        {user && !user.role && button}
      </Navbar>
    </>
  );
}

export default Header;
