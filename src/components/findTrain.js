import homeImage from "../assets/railroad.png";
import React from "react";
import { Jumbotron, Container, Carousel } from "react-bootstrap";
import SearchTrain from "./common/searchTrain";
import FindTrain from "./common/findTrain";

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
          <Carousel slide={false}>
            <Carousel.Item>
              <FindTrain />
            </Carousel.Item>
            <Carousel.Item>
              <SearchTrain />
            </Carousel.Item>
          </Carousel>
        </Container>
      </Jumbotron>
    </>
  );
}

export default Home;
