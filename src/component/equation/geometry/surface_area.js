import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import MathJax from "react-mathjax2";
import Logo from "../logo";
import Navbar from "./navbar";
//img
import Cube from "../../assets/img/cube.svg";
import Rectangular_Prism from "../../assets/img/rectangular_prism.svg";
import Irregular_Prism from "../../assets/img/irregular_prism.svg";
import Sphere from "../../assets/img/circle.svg";
import Cylinder from "../../assets/img/cylinder.svg";

function surface_area() {
  const equation_1 = 'SA=6a^{2}',
    equation_2 = 'SA=2ab+2bc+2ac',
    equation_3 = 'SA=\\left(Perimeter\\text{ }of\\text{ }B\\right)\\times L+2\\times\\left(Area\\text{ }of\\text{ }B\\right)',
    equation_4 = 'SA=4\\pi r^{2}',
    equation_5 = 'SA=2\\pi r\\left(r+h\\right)';

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
              <Breadcrumb.Item href="/geometry/">Geometry</Breadcrumb.Item>
              <Breadcrumb.Item active>Surface Area</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Navbar />
          </Col>
          <Col sm={9}>
            <div>
              <p className="display-3" style={{ marginTop: "-22px" }}>Surface Area</p>
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
              <p className="lead__equation text-justify">Sphere</p>
              <img className="img__page" src={Sphere} alt="" />
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_4}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">Cylinder</p>
              <img className="img__page" src={Cylinder} alt="" />
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

export default surface_area;