import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import MathJax from "react-mathjax2";
import Logo from "../logo";
import Navbar from "./navbar";

function complex_number() {
  const equation_1 = 'i=\\sqrt{-1}',
    equation_2 = 'i^{2}=-1',
    equation_3 = '\\sqrt{-a}=i\\sqrt{a}\\text{ }\\text{ }\\text{ }\\left(if\\text{ }a\\geq 0\\right)',
    equation_4 = '\\left(a+ib\\right)+\\left(c+id\\right)=\\left(a+c\\right)+\\left(b+d\\right)i',
    equation_5 = '\\left(a+ib\\right)-\\left(c+id\\right)=\\left(a-c\\right)+\\left(b-d\\right)i',
    equation_6 = '\\left(a+ib\\right)\\left(c+id\\right)=\\left(ac+bd\\right)+\\left(ab+bc\\right)i',
    equation_7 = '\\left(a+ib\\right)\\left(c-ib\\right)=a^{2}+b^{2}',
    equation_8 = '\\left|a+ib\\right|=\\sqrt{a^{2}+b^{4}}\\text{ }\\text{ }\\text{ }\\left(Complex\\text{ }Modulus\\right)',
    equation_9 = '\\overline{a+ib}=a+ib\\text{ }\\text{ }\\text{ }\\left(Complex\\text{ }Conjugate\\right)',
    equation_10 = '\\left(\\overline{a+ib}\\right)\\left(a+ib\\right)=\\left|a+ib\\right|^{2}';

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
              <Breadcrumb.Item href="/basics">Basics</Breadcrumb.Item>
              <Breadcrumb.Item active>Complex Number</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Navbar />
          </Col>
          <Col sm={9}>
            <div>
              <p className="display-3" style={{ marginTop: "-22px" }}>Complex Number</p>
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

export default complex_number;