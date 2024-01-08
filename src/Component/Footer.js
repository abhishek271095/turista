import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <Container className="bg-dark d-flex footer" fluid>
        <Container className="bg-dark text-light">
          <Row className="mt-5">
            <Col xs={12} md={3}>
              <h4> Who we are </h4>
              <ul className="list-unstyled pt-2 ">
                <li>
                  <i className="fas fa-phone p-2 text-info"></i> 123-23-4345
                </li>
                <li>
                  <i className="fas fa-envelope p-2 text-info"></i>
                  example@example.com
                </li>
                <li>
                  <i className="fas fa-map-marker-alt p-2 text-info"></i>Santa
                  Monica BLVD Los Angeles
                </li>
              </ul>
            </Col>
            <Col xs={12} md={3}>
              <h4> Join Our Newsletters </h4>

              <Col className="form-group">
                <label>
                  {" "}
                  <b>First Name </b>
                </label>
                <input
                  type="name"
                  name="name"
                  className="input-group rounded border border-light mt-2"
                />
                <label>
                  {" "}
                  <b>Last Name </b>
                </label>
                <input
                  type="name"
                  name="name"
                  className="input-group rounded border border-light mt-2"
                />
                <label>
                  {" "}
                  <b>Your Email</b>
                </label>
                <input
                  type="emil"
                  name="name"
                  className="input-group rounded border border-light mt-2"
                />
              </Col>
              <button className="btn btn-info  mt-4 w-50"> Subscribe </button>
            </Col>
            <Col xs={12} md={3}>
              <h4> Book a Vacation</h4>
              <ul className="list-unstyled pt-2">
                <li>
                  <i className="fas fa-chevron-right p-2 text-info"></i> Book
                  Online
                </li>
                <li>
                  <i className="fas fa-chevron-right p-2 text-info"></i>Get a
                  Price Quote
                </li>
                <li>
                  <i className="fas fa-chevron-right p-2 text-info"></i>View
                  Specials
                </li>
                <li>
                  <i className="fas fa-chevron-right p-2 text-info"></i>Find a
                  Travel Agent
                </li>
                <li>
                  <i className="fas fa-chevron-right p-2 text-info"></i>View
                  Locations
                </li>
                <li>
                  <i className="fas fa-chevron-right p-2 text-info"></i>
                  Vacation Deals
                </li>
              </ul>
            </Col>
            <Col xs={12} md={3}>
              <h4> We Accept </h4>
              <p>
                lorem ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <Col>
                <Row>
                  <Col>
                    <span>
                      <i
                        className="fab fa-cc-amex  "
                        style={{ fontSize: "50px" }}
                      ></i>
                    </span>
                    <span>
                      {" "}
                      <i
                        className="fab fa-cc-discover "
                        style={{ fontSize: "50px" }}
                      ></i>
                    </span>
                    <span>
                      {" "}
                      <i
                        className="fab fa-cc-mastercard "
                        style={{ fontSize: "50px" }}
                      ></i>
                    </span>
                    <span>
                      {" "}
                      <i
                        className="fab fa-cc-visa "
                        style={{ fontSize: "50px" }}
                      ></i>
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <i
                      className="fab fa-cc-amazon-pay  list-inline-item"
                      style={{ fontSize: "50px" }}
                    ></i>
                    <i
                      className="fab fa-cc-paypal  list-inline-item"
                      style={{ fontSize: "50px" }}
                    ></i>
                    <i
                      className="fab fa-cc-jcb  list-inline-item"
                      style={{ fontSize: "50px" }}
                    ></i>
                    <i
                      className="fab fa-cc-stripe list-inline-item"
                      style={{ fontSize: "50px" }}
                    ></i>
                  </Col>
                </Row>
              </Col>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col xs={12} md={6}>
              <p className="lead pt-2">copyright @ 2023. By:- Abhishek Yadav</p>
            </Col>
            <Col xs={12} md={6} className="d-flex justify-content-end">
              <span>
                <ul className="list-inline iconList d-flex p-2">
                  <li className="p-2">
                    <p> Connect Us:-</p>
                  </li>
                  <li className="p-2">
                    <i className="fab fa-facebook-f icon"></i>
                  </li>
                  <li className="p-2">
                    <i className="fab fa-twitter icon"></i>
                  </li>
                  <li className="p-2">
                    <i className="fab fa-linkedin-in icon"></i>
                  </li>
                  <li className="p-2">
                    <i className="fab fa-google-plus-g icon"></i>
                  </li>
                </ul>
              </span>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Footer;
