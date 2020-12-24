import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import MathJax from "react-mathjax2";
import Logo from "../logo";
import Navbar from "./navbar";

function probability() {
  const equation_1 = '0\\leq P\\left(A\\right)\\leq 1',
    equation_2 = 'P\\left(A^{C}\\right)+P\\left(A\\right)=1',
    equation_3 = 'P\\left(A\\cup B\\right)=P\\left(\\right)+P\\left(B\\right)-P\\left(A\\cap B\\right)',
    equation_4 = 'P\\left(A\\cap B\\right)=0',
    equation_5 = 'P\\left(A\\cap B\\right)=P\\left(A\\right).P\\left(B\\right)',
    equation_6 = 'P\\left(A\\mid B\\right)=\\frac{P\\left(A\\cap B\\right)}{P\\left(B\\right)}',
    equation_7 = 'P\\left(A\\mid B\\right)=P\\left(B\\mid A\\right).\\frac{P\\left(A\\right)}{P\\left(B\\right)}';

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
              <Breadcrumb.Item href="/mathematics/basics/">Basics</Breadcrumb.Item>
              <Breadcrumb.Item active>Probability</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Navbar />
          </Col>
          <Col sm={9}>
            <div>
              <p className="display-2" style={{ marginTop: "-22px" }}>Probability</p>
              <p className="display-4">Basics</p>
              <p className="lead text-justify">Probability of an event A is<br />P(A)=(number of favourable outcomes)<br />(total number of all outcomes)</p>
              <p className="display-4">Probability Range</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_1}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="display-4">Rule of Complementary Events</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_2}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="display-4">Rule of Addition</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_3}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="display-4">Disjoint Events</p>
              <p className="lead text-justify">Events A and B are Fisjoint if</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_4}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="display-4">Independent Events</p>
              <p className="lead text-justify">Events A and B are independent if</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_5}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="display-4">Conditional Probability</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_6}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="display-4">Bayes Formuala</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_7}</MathJax.Node>
                </MathJax.Context>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default probability;