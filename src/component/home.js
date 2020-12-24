import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

function home() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm style={{ marginTop: "30px" }}>
            <p className="display_4_link"><a className="link" href="/mathematics/basics">Basics </a></p>
            <Nav>
              <Nav.Link href="/mathematics/basics/powers">Powers</Nav.Link>
              <Nav.Link href="/mathematics/basics/radicals">Radicals</Nav.Link>
              <Nav.Link href="/mathematics/basics/logarithms">Logarithms</Nav.Link>
              <Nav.Link href="/mathematics/basics/quadratic_equations">Quadratic Equations</Nav.Link>
              <Nav.Link href="/mathematics/basics/polynomials">Polynomials</Nav.Link>
              <Nav.Link href="/mathematics/basics/progression">Progression</Nav.Link>
              <Nav.Link href="/mathematics/basics/complex_number">Complex Number</Nav.Link>
              <Nav.Link href="/mathematics/basics/vectors">Vectors</Nav.Link>
              <Nav.Link href="/mathematics/basics/probability">Probability</Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col sm style={{ marginTop: "30px" }}>
            <p className="display_4_link"><a className="link" href="/mathematics/geometry/">Geometry </a></p>
            <Nav>
              <Nav.Link href="/mathematics/geometry/area">Area</Nav.Link>
              <Nav.Link href="/mathematics/geometry/perimeter">Perimeter</Nav.Link>
              <Nav.Link href="/mathematics/geometry/surface_area">Surface Area</Nav.Link>
              <Nav.Link href="/mathematics/geometry/volume">Volume</Nav.Link>
              <Nav.Link href="/mathematics/geometry/lateral_area">Lateral Area</Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col sm style={{ marginTop: "30px" }}>
            <p className="display_4_link"><a className="link" href="/mathematics/coordinate_geomery">Coordinate Geomery </a></p>
            <Nav>
              <Nav.Link href="/mathematics/coordinate_geomery/coordinate_geomery_basics">Coordinate Geomery Basics</Nav.Link>
              <Nav.Link href="/mathematics/coordinate_geomery/circle">Circle</Nav.Link>
              <Nav.Link href="/mathematics/coordinate_geomery/parabola">Parabola</Nav.Link>
              <Nav.Link href="/mathematics/coordinate_geomery/ellipse">Ellipse</Nav.Link>
              <Nav.Link href="/mathematics/coordinate_geomery/hyperbola">Hyperbola</Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col sm style={{ marginTop: "30px" }}>
            <p className="display_4_link"><a className="link" href="/trignometry">Trignometry </a></p>
            <Nav>
              <Nav.Link href="/mathematics/trignometry/trignometry_basics">Trignometry Basics</Nav.Link>
              <Nav.Link href="/mathematics/trignometry/trignometry_graphs">Trignometry Graphs</Nav.Link>
              <Nav.Link href="/mathematics/trignometry/higher_angles">Higher Angles</Nav.Link>
              <Nav.Link href="/mathematics/trignometry/laws_of_yrigonometry">Laws of Trigonometry</Nav.Link>
              <Nav.Link href="/mathematics/trignometry/inverse_trignometry">Inverse Trignometry</Nav.Link>
              <Nav.Link href="/mathematics/trignometry/hyperbolic">Hyperbolic</Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col sm style={{ marginTop: "30px" }}>
            <p className="display_4_link"><a className="link" href="/calculus">Calculus </a></p>
            <Nav>
              <Nav.Link href="/mathematics/calculus/limits">Limits</Nav.Link>
              <Nav.Link href="/mathematics/calculus/derivatives">Derivatives</Nav.Link>
              <Nav.Link href="/mathematics/calculus/intgration">Intgration</Nav.Link>
              <Nav.Link href="/mathematics/calculus/laplace_transform">Laplace Transform</Nav.Link>
              <Nav.Link href="/mathematics/calculus/differential_equations">Differential Equations</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default home;
