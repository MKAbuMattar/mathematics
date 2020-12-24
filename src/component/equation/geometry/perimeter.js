import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import MathJax from "react-mathjax2";
import Logo from "../logo";
import Navbar from "./navbar";
//img
import Square from "../../assets/img/square.svg";
import Rectangle from "../../assets/img/rectangle.svg";
import Parallelgram from "../../assets/img/parallelgram.svg";
import Circle from "../../assets/img/circle.svg";
import Triangle from "../../assets/img/triangle.svg";

function perimeter() {
  const equation_1 = 'Perimeter=4a',
    equation_2 = 'Perimeter=2\\left(a+b\\right)',
    equation_3 = 'Perimeter=2a+2b',
    equation_4 = 'Perimeter=a+b+c',
    equation_5 = 'Perimeter=2\\pi r',
    equation_6 = 'Perimeter=Sum\\text{ }of\\text{ }the\\text{ }sides';

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
              <Breadcrumb.Item active>Perimeter</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Navbar />
          </Col>
          <Col sm={9}>
            <div>
              <p className="display-3" style={{ marginTop: "-22px" }}>Perimeter</p>
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
              <p className="lead__equation text-justify">Circle</p>
              <img className="img__page" src={Circle} alt="" />
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_5}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">Triangle</p>
              <img className="img__page" src={Triangle} alt="" />
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_4}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">Any Regular Pilygon</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_6}</MathJax.Node>
                </MathJax.Context>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default perimeter;