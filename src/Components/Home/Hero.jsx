import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Hero() {
  return (
    <div>
      <Container className="mt-5 pt-5">
        <Row className="align-items-end">
          <Col lg={6}>
            <img
              src="/Images/blue-1.webp"
              style={{ width: "500px", height: "500px" }}
              alt="blue-shape"
              className="img-fluid"
            />
          </Col>
          <Col lg={6}>
            <h1
              className="text-black"
              style={{ fontSize: "90px", lineHeight: "80px" }}
            >
              Luno Stool Blue
            </h1>
            <button className="btn w-100 bg-black text-white rounded-0 justify-content-between d-flex align-items-center">
              <p className="m-0">Shop Now</p>
              <p className="m-0">$ 1,200.00 USD</p>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
