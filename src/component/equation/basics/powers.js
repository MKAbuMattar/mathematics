import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import MathJax from "react-mathjax2";
import Logo from "../logo";
import Navbar from "./navbar";

function powers() {
  const equation_1 = 'a^{n}\\times a^{m}=a^{n+m}',
    equation_2 = '\\left(a^{n}\\right)^{m}=a^{n\\times m}',
    equation_3 = 'a^{-n}=\\frac{1}{a^{n}}',
    equation_4 = '\\left(a\\times b\\right)^{n} = \\left(a\\right)^{n}\\times\\left( b\\right)^{n}',
    equation_5 = '\\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^{n}=\\frac{b^{n}}{a^{n}}',
    equation_6 = '\\frac{a^{n}}{a^{m}}=a^{n-m}=\\frac{{1}}{{a^{m-n}}}',
    equation_7 = '\\left(\\frac{a}{b}\\right)^{n}=\\frac{a^{n}}{b^{n}}',
    equation_8 = 'a^{0}=1 \\text{ }\\left(if\\text{ }a\\neq 0\\right)',
    equation_9 = 'a^{\\frac{a}{m}}=\\left(a^{\\frac{1}{m}}\\right)^{n}=\\left(a^{n}\\right)^{\\frac{1}{m}}';

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
              <Breadcrumb.Item href="/basics/">Basics</Breadcrumb.Item>
              <Breadcrumb.Item active>Powers</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Navbar />
          </Col>
          <Col sm={9}>
            <div>
              <p className="display-3" style={{ marginTop: "-22px" }}>Powers</p>
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
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default powers;