import React, { useEffect } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

function home() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm style={{ marginTop: "30px" }}>
            <p className="display_4_link"><a className="link" href="/basics">Basics </a></p>
            <Nav>
              <Nav.Link href="/basics/powers">Powers</Nav.Link>
              <Nav.Link href="/basics/radicals">Radicals</Nav.Link>
              <Nav.Link href="/basics/logarithms">Logarithms</Nav.Link>
              <Nav.Link href="/basics/quadratic_equations">Quadratic Equations</Nav.Link>
              <Nav.Link href="/basics/polynomials">Polynomials</Nav.Link>
              <Nav.Link href="/basics/progression">Progression</Nav.Link>
              <Nav.Link href="/basics/complex_number">Complex Number</Nav.Link>
              <Nav.Link href="/basics/vectors">Vectors</Nav.Link>
              <Nav.Link href="/basics/probability">Probability</Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col sm style={{ marginTop: "30px" }}>
            <p className="display_4_link"><a className="link" href="/geometry/">Geometry </a></p>
            <Nav>
              <Nav.Link href="/geometry/area">Area</Nav.Link>
              <Nav.Link href="/geometry/perimeter">Perimeter</Nav.Link>
              <Nav.Link href="/geometry/surface_area">Surface Area</Nav.Link>
              <Nav.Link href="/geometry/volume">Volume</Nav.Link>
              <Nav.Link href="/geometry/lateral_area">Lateral Area</Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col sm style={{ marginTop: "30px" }}>
            <p className="display_4_link"><a className="link" href="/coordinate_geomery">Coordinate Geomery </a></p>
            <Nav>
              <Nav.Link href="/coordinate_geomery/coordinate_geomery_basics">Coordinate Geomery Basics</Nav.Link>
              <Nav.Link href="/coordinate_geomery/circle">Circle</Nav.Link>
              <Nav.Link href="/coordinate_geomery/parabola">Parabola</Nav.Link>
              <Nav.Link href="/coordinate_geomery/ellipse">Ellipse</Nav.Link>
              <Nav.Link href="/coordinate_geomery/hyperbola">Hyperbola</Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col sm style={{ marginTop: "30px" }}>
            <p className="display_4_link"><a className="link" href="/trignometry">Trignometry </a></p>
            <Nav>
              <Nav.Link href="/trignometry/trignometry_basics">Trignometry Basics</Nav.Link>
              <Nav.Link href="/trignometry/trignometry_graphs">Trignometry Graphs</Nav.Link>
              <Nav.Link href="/trignometry/higher_angles">Higher Angles</Nav.Link>
              <Nav.Link href="/trignometry/laws_of_yrigonometry">Laws of Trigonometry</Nav.Link>
              <Nav.Link href="/trignometry/inverse_trignometry">Inverse Trignometry</Nav.Link>
              <Nav.Link href="/trignometry/hyperbolic">Hyperbolic</Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col sm style={{ marginTop: "30px" }}>
            <p className="display_4_link"><a className="link" href="/calculus">Calculus </a></p>
            <Nav>
              <Nav.Link href="/calculus/limits">Limits</Nav.Link>
              <Nav.Link href="/calculus/derivatives">Derivatives</Nav.Link>
              <Nav.Link href="/calculus/intgration">Intgration</Nav.Link>
              <Nav.Link href="/calculus/laplace_transform">Laplace Transform</Nav.Link>
              <Nav.Link href="/calculus/differential_equations">Differential Equations</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default home;
