import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import MathJax from "react-mathjax2";
import Logo from "../logo";
import Navbar from "./navbar";

function polynomials() {
  const equation_1 = 'x^{2}-y^{2}=\\left(x+y\\right)\\left(x-y\\right)',
    equation_2 = '\\left(x+a\\right)\\left(x+b\\right)=x^{2}+\\left(a+b\\right)x+ab',
    equation_3 = '\\left(a+y\\right)^{2}=x^{2}+2xy+y^{2}',
    equation_4 = '\\left(a-y\\right)^{2}=x^{2}-2xy+y^{2}',
    equation_5 = '\\left(a+y\\right)^{3}=x^{3}+3xy^{2}+3x^{2}y+y{3}',
    equation_6 = '\\left(a-y\\right)^{3}=x^{3}-3xy^{2}-3x^{2}y-y{3}',
    equation_7 = 'x^{3}+y^{3}=\\left(x+y\\right)\\left(x^{2}-xy+y^{2}\\right)',
    equation_8 = 'x^{3}-y^{3}=\\left(x-y\\right)\\left(x^{2}+xy+y^{2}\\right)',
    equation_9 = 'x^{2x}-y^{2x}=\\left(x^{n}-y^{n}\\right)\\left(x^{n}+y^{n}\\right)',
    equation_10 = 'if\\text{ }n \\text{ }is \\text{ }odd \\text{ }then',
    equation_11 = 'x^{n}-a^{n}=\\left(x-a\\right)\\left(x^{n-1}+ax^{n-2}+...+a^{n-1}\\right)',
    equation_12 = 'x^{n}+a^{n}=\\left(x+a\\right)\\left(x^{n-1}-ax^{n-2}+a^{2}x^{n-2}+...+a^{n-1}\\right)';

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
              <Breadcrumb.Item active>Polynomials</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Navbar />
          </Col>
          <Col sm={9}>
            <div>
              <p className="display-3" style={{ marginTop: "-22px" }}>Polynomials</p>
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
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default polynomials;