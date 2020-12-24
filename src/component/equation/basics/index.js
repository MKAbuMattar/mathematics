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
              <Breadcrumb.Item href="/mathematics/">
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
              <p className="display-5"><a className="link" href="/mathematics/basics/powers">Powers </a></p>
              <p className="lead text-justify"></p>
              <p className="display-5"><a className="link" href="/mathematics/basics/radicals">Radicals </a></p>
              <p className="lead text-justify"></p>
              <p className="display-5"><a className="link" href="/mathematics/basics/logarithms">Logarithms </a></p>
              <p className="lead text-justify"></p>
              <p className="display-5"><a className="link" href="/mathematics/basics/quadratic_equations">Quadratic Equations </a></p>
              <p className="lead text-justify"></p>
              <p className="display-5"><a className="link" href="/mathematics/basics/polynomials">Polynomials</a></p>
              <p className="lead text-justify"></p>
              <p className="display-5"><a className="link" href="/mathematics/basics/progression">Progression </a></p>
              <p className="display-5"><a className="link" href="/mathematics/basics/complex_number">Complex Number </a></p>
              <p className="lead text-justify"></p>
              <p className="display-5"><a className="link" href="/mathematics/basics/vectors">Vectors </a></p>
              <p className="lead text-justify"></p>
              <p className="display-5"><a className="link" href="/mathematics/basics/probability">Probability </a></p>
              <p className="lead text-justify"></p>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default basics;