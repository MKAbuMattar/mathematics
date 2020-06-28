import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import MathJax from "react-mathjax2";
import Logo from "../logo";
import Navbar from "./navbar";

function higher_angles() {
  const equation_1 = '\\sin\\left(2\\theta\\right)=2\\sin\\text{ }\\theta\\text{ }\\cos\\text{ }\\theta=\\frac{2\\tan\\theta}{\\left(1+\\tan^{2}\\theta\\right)}',
    equation_2 = '\\cos\\left(2\\theta\\right)=\\cos^{2}\\theta-\\sin^{2}\\theta=1-2\\sin^{2}\\theta=2\\cos^{2}\\theta-1',
    equation_3 = '\\tan\\left(2\\theta\\right)=\\frac{2\\tan\\theta}{1-\\tan^{2}\\theta}',
    equation_4 = '\\sin\\left(3\\theta\\right)=3\\sin\\theta-4sin^{3}\\theta',
    equation_5 = '\\cos\\left(3\\theta\\right)=4\\cos^{3}\\theta-3\\cos\\theta',
    equation_6 = '\\tan\\left(3\\theta\\right)=\\frac{3\\tan\\theta-tan^{3}\\theta}{1-3\\tan^{2}\\theta}',
    equation_7 = '1+\\cos2\\theta=2\\cos^{2}\\theta',
    equation_8 = '1-\\cos2\\theta=2\\sin^{2}\\theta',
    equation_9 = '1+\\sin2\\theta=\\left[\\cos\\theta+\\sin\\theta\\right]^{2}',
    equation_10 = '1-\\sin2\\theta=\\left[\\cos\\theta-\\sin\\theta\\right]^{2}';

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
              <Breadcrumb.Item href="/trignometry/">Trignometry</Breadcrumb.Item>
              <Breadcrumb.Item active>Higher Angles</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Navbar />
          </Col>
          <Col sm={9}>
            <div>
              <p className="display-3" style={{ marginTop: "-22px" }}>Higher Angles</p>
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
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_7}</MathJax.Node>
                </MathJax.Context>
              </p>
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
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_10}</MathJax.Node>
                </MathJax.Context>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default higher_angles;