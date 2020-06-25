import React from "react";
import { Container, Row, Col, Breadcrumb, Table } from "react-bootstrap";
import MathJax from "react-mathjax2";
import Logo from "../logo";
import Navbar from "./navbar";

function hyperbola() {
  const equation_1 = '\\frac{x^{2}}{a^{2}}-\\frac{x^{2}}{b^{2}}=1',
    equation_2 = '\\frac{y^{2}}{b^{2}}-\\frac{x^{2}}{a^{2}}=1',
    equation_3 = 'b^{2}=a^{2}\\left(e^{2}-1\\right)',
    equation_4 = 'a^{2}=b^{2}\\left(e^{2}-1\\right)',
    equation_5 = 'e=\\frac{\\sqrt{a^{2}+b^{2}}}{a}',
    equation_6 = 'e=\\frac{\\sqrt{b^{2}+a^{2}}}{b}',
    equation_7 = 'S=\\left(\\pm ae,0\\right)',
    equation_8 = 'S=\\left(0,\\pm be\\right)',
    equation_9 = '\\left(i\\right)\\text{ }\\text{ }\\frac{\\left(xx_{1}\\right)}{a^{2}}-\\frac{\\left(yy_{1}\\right)}{b^{2}}=1\\text{ }\\text{ }\\left[at\\text{ }P\\left(x_{1},y_{1}\\right)\\right]',
    equation_10 = '\\left(ii\\right)\\text{ }\\text{ }y=mx\\pm\\sqrt{a^{2}m^{2}-b^{2}}\\text{ }\\text{ }\\text{ }\\text{ }\\left[When\\text{ }slope = m\\right]',
    equation_11 = '\\frac{\\left(a^{2}x\\right)}{x_{1}}+\\frac{b^{2}y}{y_{1}}=a^{2}+b^{2}',
    equation_12 = 'if\\text{ }P=\\left(x_{1},y_{1}\\right)\\text{ }then,',
    equation_13 = 'SP=\\left|ex_{1}-a\\right|',
    equation_14 = 'S\'P=\\left|ex_{1}-a\\right|';

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
              <Breadcrumb.Item active>Hyperbola</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Navbar />
          </Col>
          <Col sm={9}>
            <div>
              <p className="display-3" style={{ marginTop: "-22px" }}>Hyperbola</p>
              <p className="display-5 text-justify">Types of Hyperbola</p>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Hyperbola</th>
                    <th>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_1}</MathJax.Node>
                      </MathJax.Context>
                    </th>
                    <th>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_2}</MathJax.Node>
                      </MathJax.Context>
                    </th>
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
                    <td>A(a,0) A'(a,0)</td>
                    <td>B(0,b) B'(0,-b)</td>
                  </tr>
                  <tr>
                    <th>Length of Axis</th>
                    <td>Transverse = 2a, Conjugate = 2b</td>
                    <td>Transverse = 2b, Conjugate = 2a</td>
                  </tr><tr>
                    <th>Equation of Axis</th>
                    <td>Transverse axis: y = 0, Conjugate axis: x = 0</td>
                    <td>Transverse axis: x = 0, Conjugate axis: y = 0</td>
                  </tr>
                  <tr>
                    <th>Relation between a,b and e</th>
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
                  <tr>
                    <th>Eccentricity</th>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_5}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_6}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                  </tr>
                  <tr>
                    <th>Foci</th>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_7}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_8}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                  </tr>
                  <tr>
                    <th>Distance Between Foci</th>
                    <td>2ea</td>
                    <td>2be</td>
                  </tr>
                </tbody>
              </Table>
              <p className="display-5 text-justify">Tangent to Hyperbola</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_9}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_10}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="display-5 text-justify">Normal to Hyperbola</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_11}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="display-5 text-justify">Focal Distance</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_12}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_13}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_14}</MathJax.Node>
                </MathJax.Context>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default hyperbola;