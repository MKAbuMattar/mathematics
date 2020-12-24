import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import MathJax from "react-mathjax2";
import Logo from "../logo";
import Navbar from "./navbar";

function hyperbolic() {

  const equation_1 = '\\sinh\\left(x\\right)=\\frac{\\left(e^{x}-e^{-x}\\right)}{2}',
    equation_2 = 'csch\\left(x\\right)=\\frac{1}{\\sinh\\left(x\\right)}=\\frac{2}{\\left(e^{x}-e^{-x}\\right)}',
    equation_3 = '\\cosh\\left(x\\right)=\\frac{\\left(e^{x}-e^{-x}\\right)}{2}',
    equation_4 = 'sech\\left(x\\right)=\\frac{1}{\\cosh\\left(x\\right)}=\\frac{2}{\\left(e^{x}-e^{-x}\\right)}',
    equation_5 = '\\tanh\\left(x\\right)=\\frac{\\sinh\\left(x\\right)}{\\cosh\\left(x\\right)}=\\frac{\\left(e^{x}-e^{-x}\\right)}{\\left(e^{x}+e^{-x}\\right)}',
    equation_6 = '\\coth\\left(x\\right)=\\frac{1}{\\tanh\\left(x\\right)}=\\frac{\\left(e^{x}+e^{-x}\\right)}{\\left(e^{x}-e^{-x}\\right)}',
    equation_7 = '\\cosh^{2}\\left(x\\right)-\\sinh^{2}\\left(x\\right)=1',
    equation_8 = '\\tanh^{2}\\left(x\\right)-sech^{2}\\left(x\\right)=1',
    equation_9 = '\\coth^{2}\\left(x\\right)-csch^{2}\\left(x\\right)=1',
    equation_10 = 'arcsinh\\left(z\\right)=\\ln\\left(z+\\sqrt{z^{2}+1}\\right)',
    equation_11 = 'arccosh\\left(z\\right)=\\ln\\left(z\\pm\\sqrt{z^{2}-1}\\right)',
    equation_12 = 'arctanh\\left(z\\right)=\\frac{1}{2\\ln\\left(\\frac{1+z}{1-z}\\right)}',
    equation_13 = 'arccsch\\left(z\\right)=\\ln\\left(\\frac{\\left(1+\\left(\\sqrt{1+z^{2}}\\right)\\right)}{z}\\right)',
    equation_14 = 'arcsech\\left(z\\right)=\\ln\\left(\\frac{\\left(1\\pm\\left(\\sqrt{1-z^{2}}\\right)\\right)}{z}\\right)',
    equation_15 = 'arccoth\\left(z\\right)=\\frac{1}{2\\ln\\left(\\frac{z+1}{z-1}\\right)}',
    equation_16 = '\\sinh\\left(z\\right)=-i\\text{ }\\sin\\left(iz\\right)',
    equation_17 = 'csch\\left(z\\right)=i\\text{ }\\csc\\left(iz\\right)',
    equation_18 = '\\cosh\\left(z\\right)=\\cos\\left(iz\\right)',
    equation_19 = 'sech\\left(z\\right)=\\sec\\left(iz\\right)',
    equation_20 = '\\tanh\\left(z\\right)=-i\\text{ }\\tan\\left(iz\\right)';

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
              <Breadcrumb.Item href="/mathematics/trignometry/">Trignometry</Breadcrumb.Item>
              <Breadcrumb.Item active>Hyperbolic</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Navbar />
          </Col>
          <Col sm={9}>
            <div>
              <p className="display-3" style={{ marginTop: "-22px" }}>Hyperbolic</p>
              <p className="display-4 text-justify">Hyperbolic Definitions</p>
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
              <p className="display-4 text-justify">Sum and Difference</p>
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
              <p className="display-4 text-justify">Inverse Hyperbolic Defintions</p>
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
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_15}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="display-4 text-justify">Relations to Trigo Functions</p>
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
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_18}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_19}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_20}</MathJax.Node>
                </MathJax.Context>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default hyperbolic;