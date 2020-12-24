import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import MathJax from "react-mathjax2";
import Logo from "../logo";
import Navbar from "./navbar";

function coordinate_geomery() {
  const equation_1 = '\\sqrt{\\left(x_{2}-x_{2}\\right)^{2}+\\left(y_{1}-y_{2}\\right)^{2}}',
    equation_2 = '\\left(\\frac{m_{1}x_{2}+m_{2}x_{1}}{m_{1}+m_{2}},\\frac{m_{1}y_{2}+m_{2}y_{1}}{m_{1}+m_{2}}\\right)',
    equation_3 = '\\left(\\frac{x_{1}+x_{2}}{2},\\frac{y_{1}+y_{2}}{2}\\right)',
    equation_4 = '\\triangle=\\left(\\frac{1}{2}\\right)\\left|x_{1}\\left(y_{2}-y_{3}\\right)+x_{2}\\left(y_{3}-y_{1}\\right)+x_{3}\\left(y_{1}-y_{2}\\right)\\right|',
    equation_5 = 'x=a',
    equation_6 = 'm=\\tan\\theta',
    equation_7 = 'ie\\text{ }m_{1}=m_{2}',
    equation_8 = 'ie.\\text{ }m_{1}\\times m_{2}=-1',
    equation_9 = 'y=mx',
    equation_10 = '\\left(y-y_{1}\\right)=m\\left(x-x_{1}\\right)',
    equation_11 = '\\left(y-y_{1}\\right)=\\left(\\frac{y_{2}-y_{1}}{x_{2}-x_{1}}\\right)\\left(x-x_{1}\\right)',
    equation_12 = '\\frac{x}{a}+\\frac{y}{b}=1';

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
              <Breadcrumb.Item active>Coordinate Geomery Basics</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Navbar />
          </Col>
          <Col sm={9}>
            <div>
              <p className="display-3" style={{ marginTop: "-22px" }}>Coordinate Geomery Basics</p>
              <p className="lead text-justify">Distance between P(x<sub>1</sub>,y<sub>1</sub>) and Q(x<sub>2</sub>,y<sub>2</sub>)</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_1}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">The coordin ates of point R(x,y) which divides the straght line joinig two given point(x<sub>1</sub>,y<sub>1</sub>) and (x<sub>2</sub>,y<sub>2</sub>) internally in the ratio m<sub>1</sub>:m<sub>2</sub> is</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_2}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">Mid-Point Formula the coordinates of the mid-point of R(x,y) of the line joining the two given points P(x<sub>1</sub>,y<sub>1</sub>) and Q(x<sub>2</sub>,y<sub>2</sub>) is</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_3}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">Area of a triangle whose vertices are (x<sub>1</sub>,y<sub>1</sub>), (x<sub>2</sub>,y<sub>2</sub>) and (x<sub>3</sub>,y<sub>3</sub>) is</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_4}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">The equation of a steraight line parallel to y axis and at a distance 'a' from it is</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_5}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">Slope or Gradient of a line,</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_6}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">Slopes of parallel line are equal</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_7}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">The product of the slopes of two perpendicuar lines is equal to -1</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_8}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">Equation of a line passing through the origin making angle with positive direcrion of x-axis is</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_9}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">Equation of a straight line passing through point (x<sub>1</sub>,y<sub>1</sub>) and having slope m is</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_10}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">Equation of a straight line passing through point (x<sub>1</sub>,y<sub>1</sub>) and (x<sub>2</sub>,y<sub>2</sub>) is</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_11}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">the equation of a straight line which cuts off intercepts a and b on the x and y axis respectively is</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_12}</MathJax.Node>
                </MathJax.Context>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default coordinate_geomery;