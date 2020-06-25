import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import Logo from "../logo";

function basics() {
  return (
    <div>
      <Container fluid="md">
        <Row>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item href="/">
                <Logo />
                Mathematics
                </Breadcrumb.Item>
              <Breadcrumb.Item active>Basics</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <div>
              <p className="display-3" style={{ marginTop: "-22px" }}>Basics</p>
              <p className="display-5"><a className="link" href="/basics/powers">Powers </a></p>
              <p className="lead text-justify"></p>
              <p className="display-5"><a className="link" href="/basics/radicals">Radicals </a></p>
              <p className="lead text-justify"></p>
              <p className="display-5"><a className="link" href="/basics/logarithms">Logarithms </a></p>
              <p className="lead text-justify"></p>
              <p className="display-5"><a className="link" href="/basics/quadratic_equations">Quadratic Equations </a></p>
              <p className="lead text-justify"></p>
              <p className="display-5"><a className="link" href="/basics/polynomials">Polynomials</a></p>
              <p className="lead text-justify"></p>
              <p className="display-5"><a className="link" href="/basics/progression">Progression </a></p>
              <p className="display-5"><a className="link" href="/basics/complex_number">Complex Number </a></p>
              <p className="lead text-justify"></p>
              <p className="display-5"><a className="link" href="/basics/vectors">Vectors </a></p>
              <p className="lead text-justify"></p>
              <p className="display-5"><a className="link" href="/basics/probability">Probability </a></p>
              <p className="lead text-justify"></p>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default basics;