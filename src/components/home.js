import homeImage from "../assets/railroad.png";
import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import SearchTrain from "./common/searchTrain";

function Home() {
  return (
    <>
      <Jumbotron
        style={{
          backgroundImage: `url(${homeImage})`,
          backgroundRepeat: `no-repeat`,
          width: `100%`,
          backgroundSize: `cover`,
          height: `30rem`,
        }}
        className="blur"
        fluid
      >
        <Container>
          <SearchTrain />
        </Container>
      </Jumbotron>
    </>
  );
}

export default Home;
