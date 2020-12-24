import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import MathJax from "react-mathjax2";
import Logo from "../logo";
import Navbar from "./navbar";

function lateral_area() {
  const equation_1 = 'Lateral\\text{ }Area=Ph',
    equation_2 = 'Lateral\\text{ }Area=2\\pi rh',
    equation_3 = 'Lateral\\text{ }Area=\\left(\\frac{1}{2}\\right)Pl',
    equation_4 = 'Lateral\\text{ }Area=\\pi rl';

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
              <Breadcrumb.Item href="/mathematics/geometry/">Geometry</Breadcrumb.Item>
              <Breadcrumb.Item active>Lateral Area</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Navbar />
          </Col>
          <Col sm={9}>
            <div>
              <p className="display-3" style={{ marginTop: "-22px" }}>Lateral Area</p>
              <p className="lead__equation text-justify">Right Prism</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_1}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">Whare<br />P = Perimeter of the base<br />h = height of the prism</p>
              <p className="lead__equation text-justify">cylinder</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_2}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">Where<br />r = radius of the base<br />h = geight of the cylinder</p>
              <p className="lead__equation text-justify">Pyramid</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_3}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">Where<br />P = Perimeter of base<br />l = slant height</p>
              <p className="lead__equation text-justify">Cone</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_4}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">Where<br />r = radius of it's base<br />l = slant height of the cone</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default lateral_area;