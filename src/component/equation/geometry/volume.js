import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import MathJax from "react-mathjax2";
import Logo from "../logo";
import Navbar from "./navbar";
//img
import Cube from "../../assets/img/cube.svg";
import Rectangular_Prism from "../../assets/img/rectangular_prism.svg";
import Irregular_Prism from "../../assets/img/irregular_prism.svg";
import Cylinder from "../../assets/img/cylinder.svg";
import Pyramid from "../../assets/img/pyramid.svg";
import Cone from "../../assets/img/cone.svg";
import Sphere from "../../assets/img/circle.svg";
import Ellipsoid from "../../assets/img/ellipsoid.svg";

function volume() {
  const equation_1 = 'Volume=a^{3}',
    equation_2 = 'Volume=a\\times b\\times c',
    equation_3 = 'Volume=\\left(Area\\text{ }of\\text{ }B\\right)\\times h',
    equation_4 = 'Volume=\\pi r^{2}h',
    equation_5 = 'Volume=\\left(\\frac{1}{3}\\right)bh',
    equation_6 = 'Volume=\\left(\\frac{1}{3}\\right)\\pi r^{2}h',
    equation_7 = 'Volume=\\left(\\frac{4}{3}\\right)\\pi r^{3}',
    equation_8 = 'Volume=\\left(\\frac{4}{3}\\right)\\pi\\left(r1\\times r2\\times r3\\right)';

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
              <Breadcrumb.Item active>Volume</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Navbar />
          </Col>
          <Col sm={9}>
            <div>
              <p className="display-3" style={{ marginTop: "-22px" }}>Volume</p>
              <p className="lead__equation text-justify">Cube</p>
              <img className="img__page" src={Cube} alt="" />
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_1}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">Rectangular Prism</p>
              <img className="img__page" src={Rectangular_Prism} alt="" />
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_2}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">Irregular Prism</p>
              <img className="img__page" src={Irregular_Prism} alt="" />
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_3}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">Cylinder</p>
              <img className="img__page" src={Cylinder} alt="" />
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_4}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">Pyramid</p>
              <img className="img__page" src={Pyramid} alt="" />
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_5}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">whare b = area of square</p>
              <p className="lead__equation text-justify">Cone</p>
              <img className="img__page" src={Cone} alt="" />
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_6}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">Sphere</p>
              <img className="img__page" src={Sphere} alt="" />
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_7}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">Ellipsoid</p>
              <img className="img__page" src={Ellipsoid} alt="" />
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

export default volume;