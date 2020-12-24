import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import MathJax from "react-mathjax2";
import Logo from "../logo";
import Navbar from "./navbar";

function circle() {
  const equation_1 = 'x^{2}+y^{2}=a^{2}\\text{ }\\left(a=radius\\right)',
    equation_2 = '\\left(x-h\\right)^{2}+\\left(y-k\\right)^{2}=r^{}\\text{ }\\left(r=radius,\\text{ }\\left(h,k\\right)=center\\right)',
    equation_3 = 'x^{2}+y^{2}+2gx+2fy+c=0',
    equation_4 = 'Center = \\left(-g,-f\\right)',
    equation_5 = 'Radius = \\sqrt{g^{2}+f^{2}-c}',
    equation_6 = '\\left(y-y_{1}\\right)\\left(y-y_{2}\\right)+\\left(x-x_{1}\\right)\\left(x-x_{2}\\right)=0',
    equation_7 = 'xx_{1}+yy_{1}=a^{2}',
    equation_8 = '\\frac{y}{y_{1}}=\\frac{x}{x_{1}}',
    equation_9 = 'xx_{1}+yy_{1}+g\\left(x+x_{1}\\right)+f\\left(y+y_{1}\\right)+c=0',
    equation_10 = '\\left(\\frac{y-y_{1}}{x-x_{1}}\\right)=\\left(\\frac{y_{1}-f}{x_{1}-g}\\right)',
    equation_11 = 'c^{2}=a^{2}\\left(m^{2}+1\\right)',
    equation_12 = 'Point\\text{ }of\\text{ }contact = \\left(\\frac{-a^{2}m}{c},\\frac{a^{2}}{c}\\right)',
    equation_13 = 'x=a.\\cos\\theta',
    equation_14 = 'u=a.\\sin\\theta',
    equation_15 = 'x=h+r.\\cos\\theta',
    equation_16 = 'x=h+r.\\sin\\theta',
    equation_17 = '\\left[Center=(h,k)\\text{ }and\\text{ }radius=r\\right]',
    equation_18 = 'y.\\sin\\theta+x.\\cos\\theta=a',
    equation_19 = '\\frac{x}{\\cos\\theta}=\\frac{y}{\\sin\\theta}';

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
              <Breadcrumb.Item active>Circle</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Navbar />
          </Col>
          <Col sm={9}>
            <div>
              <p className="display-3" style={{ marginTop: "-22px" }}>Circle</p>
              <p className="display-5 text-justify">Standerd Equation</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_1}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="display-5 text-justify">Center-Radius Form</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_2}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="display-5 text-justify">General Equation of a Circle</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_3}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="display-5 text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_4}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="display-5 text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_5}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="display-5 text-justify">Diameter Form</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_6}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="display-5 text-justify">Tangent at P(x<sub>1</sub>,y<sub>1</sub>) of a Standard Circle</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_7}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="display-5 text-justify">Normal at P(x<sub>1</sub>,y<sub>1</sub>) of a Standard Circle</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_8}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="display-5 text-justify">Tangent at P(x<sub>1</sub>,y<sub>1</sub>) of a General Circle</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_9}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="display-5 text-justify">Normal at P(x<sub>1</sub>,y<sub>1</sub>) of a General Circle</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_10}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="display-5 text-justify">Condition For a Line To Be a Tangent</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_11}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_12}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="display-5 text-justify">Parametic Equation of Standard Circle</p>
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
              <p className="display-5 text-justify">Parametic Equation of General Circle</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_15}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_16}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_17}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="display-5 text-justify">Tangent To a Standard Circle at Point P(a.cosθ, a.sinθ)</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_18}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="display-5 text-justify">Normal To a Standard Circle at Point P(a.cosθ, a.sinθ)</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_19}</MathJax.Node>
                </MathJax.Context>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default circle;