import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import MathJax from "react-mathjax2";
import Logo from "../logo";
import Navbar from "./navbar";

function quadratic_equations() {
  const equation_1 = 'ax^{2}+bx+c=0 \\text{ }\\left(and\\text{ }a\\neq 0\\right)\\text{ }then',
    equation_2 = 'x=\\frac{-b\\pm\\sqrt{b^{2}-4ac}}{24}',
    equation_3 = 'if\\text{ }b^{2}-4ac>0\\text{ }then\\text{ }two\\text{ }real\\text{ }solution',
    equation_4 = 'if\\text{ }b^{2}-4ac=0\\text{ }then\\text{ }reqeated\\text{ }real\\text{ }solution',
    equation_5 = 'if\text{ }b^{2}-4ac<0\text{ }then\text{ }two\text{ }complex\text{ }solution';

  return (
    <div style={{ marginTop: "90px" }}>
      <Container fluid="md">
        <Row>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item href="/">
                <Logo />
                Mathematics
                </Breadcrumb.Item>
              <Breadcrumb.Item href="/basics/">Basics</Breadcrumb.Item>
              <Breadcrumb.Item active>Quadratic Equations</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Navbar />
          </Col>
          <Col sm={9}>
            <div>
              <p className="display-3" style={{ marginTop: "-22px" }}>Quadratic Equations</p>
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
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default quadratic_equations;