import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Highlight = () => {
  return (
    <Container fluid className="">
      <Container>
        <h3 className="text-center p-5"> Highlights</h3>
        <Row>
          <Col className=" mb-5 m-2 text-center high_bx">
            <i
              class="fas fa-plane spin p-5 mt-5"
              style={{ fontSize: "70px" }}
            ></i>

            <h4 className="pt-4"> HOW TO REACH </h4>
            <p>
              Andaman is connected with India through sea and air routes only.
              The airport is located at Port Blair and there are direct flights
              from Kolkata, Chennai and Vishakhapatnam. Air India, Jet Airways,
              Go Air and Spice Jet airlines offer their services here.
            </p>
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
          </Col>
          <Col className="mb-5 m-2 text-center high_bx">
            <i
              class="fas fa-file-signature spin p-5 mt-5"
              style={{ fontSize: "70px" }}
            ></i>

            <h4 className="pt-4"> TRAVEL TIP </h4>
            <p>
              It is filled with white sandy beaches, fun-filled activities,
              wildlife reserves and scrumptious local cuisines.
            </p>
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default Highlight;
