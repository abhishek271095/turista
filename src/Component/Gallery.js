import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import "./Gallery.css";
const Gallery = () => {
  return (
    <Container fluid className="bg-light">
      <h3 className="text-center p-5 text-dark">Gallery</h3>

      <Container className="">
        <Row className="">
          <Col className="effectBox">
            <Image src="Banner/gall1.jpg" fluid />
          </Col>

          <Col className="effectBox">
            <Image src="Banner/gall2.jpg" fluid />
          </Col>

          <Col className="effectBox">
            <Image src="Banner/gall3.jpg" fluid />
          </Col>

          <Col className="effectBox">
            <Image src="Banner/gall4.jpg" fluid />
          </Col>
        </Row>

        <Row className="mt-2 ">
          <Col xs={12} md={3} className="effectBox">
            <Image src="Banner/gall5.jpg" rounded fluid />
          </Col>

          <Col xs={12} md={3} className="effectBox">
            <Image src="Banner/gall6.jpg" rounded fluid />
          </Col>

          <Col xs={12} md={3} className="effectBox">
            <Image src="Banner/gall7.jpg" rounded fluid />
          </Col>

          <Col xs={12} md={3} className="effectBox">
            <Image src="Banner/gall8.jpg" rounded fluid />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default Gallery;
