import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import MathJax from "react-mathjax2";
import Logo from "../logo";
import Navbar from "./navbar";
import laws_of_trig from "../../assets/img/lows_of_trigonometry.svg";

function laws_of_Trigonometry() {

  const equation_1 = '\\frac{sin\\left(A\\right)}{a}=\\frac{sin\\left(B\\right)}{b}=\\frac{sin\\left(C\\right)}{c}',
    equation_2 = 'a^{2}=b^{2}+c^{2}-2bc\\text{ }\\cos\\left(A\\right)',
    equation_3 = 'b^{2}=a^{2}+c^{2}-2ac\\text{ }\\cos\\left(B\\right)',
    equation_4 = 'c^{2}=a^{2}+b^{2}-2ab\\text{ }\\cos\\left(C\\right)',
    equation_5 = '\\frac{\\left(a-b\\right)}{\\left(a+b\\right)}=\\frac{\\tan\\left(\\frac{1}{2}\\right)\\left(A-B\\right)}{\\tan\\left(\\frac{1}{2}\\right)\\left(A+B\\right)}',
    equation_6 = '\\frac{\\left(b-c\\right)}{\\left(b+c\\right)}=\\frac{\\tan\\left(\\frac{1}{2}\\right)\\left(B-C\\right)}{\\tan\\left(\\frac{1}{2}\\right)\\left(B+C\\right)}',
    equation_7 = '\\frac{\\left(a-c\\right)}{\\left(a+c\\right)}=\\frac{\\tan\\left(\\frac{1}{2}\\right)\\left(A-C\\right)}{\\tan\\left(\\frac{1}{2}\\right)\\left(A+C\\right)}',
    equation_8 = '\\frac{a+b}{c}=\\frac{\\cos\\left(\\frac{1}{2}\\right)\\left(A-C\\right)}{\\sin\\left(\\frac{1}{2}\\right)\\left(C\\right)}';

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
              <Breadcrumb.Item active>Laws of Trigonometry</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Navbar />
          </Col>
          <Col sm={9}>
            <div>
              <p className="display-3" style={{ marginTop: "-22px" }}>Laws of Trigonometry</p>
              <img className="img__page" src={laws_of_trig} alt="" />
              <p className="lead">Note<br />1. A, B and C are angles.<br /> a, b and c are the length of the sides opposite to A, B and C respectively.</p>
              <p className="display-4 text-justify">Law of Sines</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_1}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="display-4 text-justify">Low of Cosines</p>
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
              <p className="display-4 text-justify">Low of Tangents</p>
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
              <p className="display-4 text-justify">MollWeid's Formula</p>
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

export default laws_of_Trigonometry;