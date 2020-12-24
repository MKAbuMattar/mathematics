import React from "react";
import { Container, Row, Col, Breadcrumb, Table } from "react-bootstrap";
import MathJax from "react-mathjax2";
import Logo from "../logo";
import Navbar from "./navbar";

function parabola() {
  const equation_1 = '\\left(i\\right)\\text{ }yy_{1}=2a\\left(x+x_{1}\\right)\\text{ }\\left[at\\text{ }point\\text{ }P{x_{1},y_{1}}\\right]',
    equation_2 = '\\left(ii\\right)\\text{ }y=mx+\\frac{a}{m}\\text{ }\\left[Having\\text{ }slope=m\\right]',
    equation_3 = '\\left(i\\right)\\text{ }\\left(y-y_{1}\\right)=\\left(\\frac{-y_{1}}{2a}\\right)\\left(x-x_{1}\\right)',
    equation_4 = '\\left(ii\\right)\\text{ }y=mx-2am-am^{3}',
    equation_5 = '\\tan\\theta=\\left|\\frac{\\sqrt{\\left(y_{1}^{2}-4ax_{1}\\right)}}{\\left(x_{1}+a\\right)}\\right|';

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
              <Breadcrumb.Item href="/mathematics/coordinate_geomery/">Coordinate Geomery</Breadcrumb.Item>
              <Breadcrumb.Item active>Parabola</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Navbar />
          </Col>
          <Col sm={9}>
            <div>
              <p className="display-3" style={{ marginTop: "-22px" }}>Parabola</p>
              <p className="display-5 text-justify">Type of Parabola</p>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Parabola</th>
                    <th>y<sup>2</sup>=4ax</th>
                    <th>y<sup>2</sup>=-4ax</th>
                    <th>x<sup>2</sup>=4ay</th>
                    <th>x<sup>2</sup>=-4ay</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Vertex</th>
                    <td>(0,0)</td>
                    <td>(0,0)</td>
                    <td>(0,0)</td>
                    <td>(0,0)</td>
                  </tr>
                  <tr>
                    <th>Focus</th>
                    <td>(a,0)</td>
                    <td>(-a,0)</td>
                    <td>(0,a)</td>
                    <td>(0,-a)</td>
                  </tr>
                  <tr>
                    <th>Axis</th>
                    <td>y=0</td>
                    <td>y=0</td>
                    <td>x=0</td>
                    <td>x=0</td>
                  </tr>
                  <tr>
                    <th>Dirctix</th>
                    <td>x=-a</td>
                    <td>x=a</td>
                    <td>y=-a</td>
                    <td>y=a</td>
                  </tr>
                  <tr>
                    <th>Length of Latus Recutum (LR)</th>
                    <td>4a</td>
                    <td>4a</td>
                    <td>4a</td>
                    <td>4a</td>
                  </tr>
                  <tr>
                    <th>End Point of LR</th>
                    <td>(a,2a)&(a,-2a)</td>
                    <td>(-a,2a)&(-a,-2a)</td>
                    <td>(2a,a)&(-2a,a)</td>
                    <td>(2a,-a)&(-2a,-a)</td>
                  </tr>
                </tbody>
              </Table>
              <p className="display-5 text-justify">Tangent To Parabola y<sup>2</sup>=4ax</p>
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
              <p className="display-5 text-justify">Normal To Parabola y<sup>2</sup>=4ax</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_3}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_4}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="display-5 text-justify">Focal Distance</p>
              <p className="lead text-justify">It is the distance of any point an the parabola to the focus if P(x<sub>1</sub>,y<sub>1</sub>) lies on y<sup>2</sup>=4ax then focal distance = x<sub>1</sub>+a</p>
              <p className="display-5 text-justify">Angle Between Two Tangents From P(x<sub>1</sub>,y<sub>1</sub>) to Parabola y<sup>2</sup>=4ax is</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_5}</MathJax.Node>
                </MathJax.Context>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default parabola;