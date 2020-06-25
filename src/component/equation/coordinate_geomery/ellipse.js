import React from "react";
import { Container, Row, Col, Breadcrumb, Table } from "react-bootstrap";
import MathJax from "react-mathjax2";
import Logo from "../logo";
import Navbar from "./navbar";

function ellipse() {
  const equation_1 = '\\frac{x^{2}}{a^{2}}+\\frac{y^{2}}{b^{2}}=1\\text{ }\\text{ }\\text{ }\\left(a^{2}>b^{2}\\right)',
    equation_2 = '\\frac{x^{2}}{a^{2}}+\\frac{y^{2}}{b^{2}}=1\\text{ }\\text{ }\\text{ }\\left(b^{2}>a^{2}\\right)',
    equation_3 = 'e=\\frac{\\sqrt{\\left(a^{2}-b^{2}\\right)}}{a}',
    equation_4 = 'e=\\frac{\\sqrt{\\left(b^{2}-a^{2}\\right)}}{a}',
    equation_5 = '\\left(i\\right)\\text{ }\\frac{\\left(xx_{1}\\right)}{a^{2}}+\\frac{\\left(yy_{1}\\right)}{b^{2}}=1\\text{ }\\text{ }\\text{ }\\left[at\\text{ }P\\left(x_{1},y_{1}\\right)\\right]',
    equation_6 = '\\left(ii\\right)\\text{ }y=mx\\pm\\sqrt{a^{2}m^{2}+b^{2}}\\text{ }\\text{ }\\left[Having\\text{ }slope\\text{ }m\\right]',
    equation_7 = '\\frac{\\left(a^{2}x\\right)}{x_{1}}-\\frac{\\left(b^{2}y\\right)}{y_{1}}=a^{2}-b^{2}\\text{ }\\text{ }\\text{ }\\left[at\\text{ }P\\left(x_{1},y_{1}\\right)\\right]',
    equation_8 = 'S=\\left|a-ex_{1}\\right|',
    equation_9 = 'S\'=\\left|a+ex_{1}\\right|';

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
              <Breadcrumb.Item href="/coordinate_geomery/">Coordinate Geomery</Breadcrumb.Item>
              <Breadcrumb.Item active>Ellipse</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Navbar />
          </Col>
          <Col sm={9}>
            <div>
              <p className="display-3" style={{ marginTop: "-22px" }}>Ellipse</p>
              <p className="display-5 text-justify">Types of Ellipse</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_1}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_2}</MathJax.Node>
                </MathJax.Context>
              </p>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Ellipse</th>
                    <th>Type 1 (a&gt;b)</th>
                    <th>Type 2 (b&gt;a)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Center</th>
                    <td>(0,0)</td>
                    <td>(0,0)</td>
                  </tr>
                  <tr>
                    <th>Vertices</th>
                    <td>A(a,0) A'(-a,0) B(0,b) B'(0,-b)</td>
                    <td>B(0,b) B'(0,-b) A(a,0) A'(-a,0)</td>
                  </tr>
                  <tr>
                    <th>Foci</th>
                    <td>S=(ae,0) S"(-ae,0)</td>
                    <td>S=(be,0) S"(-be,0)</td>
                  </tr>

                  <tr>
                    <th>Distance Between Foci</th>
                    <td>2ea</td>
                    <td>2be</td>
                  </tr>
                  <tr>
                    <th>Length of Axis</th>
                    <td>Major = 2a, Minor = 2b</td>
                    <td>Major = 2b, Minor = 2a</td>
                  </tr>
                  <tr>
                    <th>Equation of Axis</th>
                    <td>Major: y=0, Minor: x=0</td>
                    <td>Major: x=0, Minor: y=0</td>
                  </tr>

                  <tr>
                    <th>Relation Between a,b,c</th>
                    <td>b<sup>2</sup> = a<sup>2</sup>(1-e<sup>2</sup>)</td>
                    <td>a<sup>2</sup> = b<sup>2</sup>(1-e<sup>2</sup>)</td>
                  </tr>
                  <tr>
                    <th>Eccentericity</th>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_3}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_4}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <p className="display-5 text-justify">Tangent to Ellipse</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_5}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_6}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="display-5 text-justify">Normal to Ellipse</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_7}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="display-5 text-justify">Focal Distance</p>
              <p className="lead text-justify">Focal distance is the distance between a point on the ellipse and the focus. Since ellipse has 2 foci hence ther are 2 focal distance for one point. Focal distances of point P(x<sub>1</sub>,y<sun>1</sun> is given by)</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_8}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_9}</MathJax.Node>
                </MathJax.Context>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default ellipse;