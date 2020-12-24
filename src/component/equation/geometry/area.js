import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import MathJax from "react-mathjax2";
import Logo from "../logo";
import Navbar from "./navbar";
//img
import Square from "../../assets/img/square.svg";
import Rectangle from "../../assets/img/rectangle.svg";
import Parallelgram from "../../assets/img/parallelgram.svg";
import Trapezoid from "../../assets/img/trapezoid.svg";
import Circle from "../../assets/img/circle.svg";
import Ellipse from "../../assets/img/ellipse.svg";
import Triangle from "../../assets/img/triangle.svg";
import Equilateral_Triangle from "../../assets/img/equilateral_triangle.svg";

function area() {
  const equation_1 = 'Area=a^{2}',
    equation_2 = 'Area=ab',
    equation_3 = 'Area=bh',
    equation_4 = 'Area=\\left(\\frac{1}{2}\\right)\\left(b1+b2\\right)h',
    equation_5 = 'Area=\\pi r^{2}',
    equation_6 = 'Area=\\pi\\left(t1\\times t2\\right)',
    equation_7 = 'Area=\\left(\\frac{1}{2}\\right)bh',
    equation_8 = 'Area=\\left(\\frac{\\sqrt{3}}{4}\\right)a^{2}';

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
              <Breadcrumb.Item active>Area</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Navbar />
          </Col>
          <Col sm={9}>
            <div>
              <p className="display-3" style={{ marginTop: "-22px" }}>Area</p>
              <p className="lead__equation text-justify">Square</p>
              <img className="img__page" src={Square} alt="" />
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_1}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">Rectangle</p>
              <img className="img__page" src={Rectangle} alt="" />
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_2}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">Parallelgram</p>
              <img className="img__page" src={Parallelgram} alt="" />
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_3}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">Trapezoid</p>
              <img className="img__page" src={Trapezoid} alt="" />
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_4}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">Circle</p>
              <img className="img__page" src={Circle} alt="" />
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_5}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">Ellipse</p>
              <img className="img__page" src={Ellipse} alt="" />
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_6}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">Triangle</p>
              <img className="img__page" src={Triangle} alt="" />
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_7}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">Equilateral Triangle</p>
              <img className="img__page" src={Equilateral_Triangle} alt="" />
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_8}</MathJax.Node>
                </MathJax.Context>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default area;