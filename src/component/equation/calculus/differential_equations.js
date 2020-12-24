import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import MathJax from "react-mathjax2";
import Logo from "../logo";
import Navbar from "./navbar";

function differential_equations() {

  const equation_1 = '\\text{ }\\left(\\frac{dy}{dx},\\frac{d^{2}y}{dx^{2}}\\right)\\text{ }',
    equation_2 = '\\text{ }\\left(dx,dy\\right)\\text{ }',
    equation_3 = '\\text{ }\\left(\\frac{d^{2}y}{dx^{2}}\\right)^{3}+\\left(\\frac{dy}{dx}\\right)=0\\text{ }\\text{ }is\\text{ }2',
    equation_4 = '\\text{ }\\left(\\frac{dy}{dx}\\right)^{5}+y\\left(\\frac{d^{2}y}{dx^{2}}\\right)=0\\text{ }\\text{ }is\\text{ }3',
    equation_5 = '\\text{ }f_{x}dx+f_{2}\\left(y\\right)dy=0\\text{ }',
    equation_6 = '\\text{ }\\int f_{1}xdx+\\int f_{2}\\left(y\\right)dy=c\\text{ }',
    equation_7 = '\\text{ }x+y=u\\text{ }or\\text{ }y=vx\\text{ }',
    equation_8 = '\\text{ }u=Ae^{nx}+Be^{-nx}\\text{ }',
    equation_9 = '\\text{ }\\left(\\frac{d^{2}y}{dx^{2}}\\right)=n^{2}y\\text{ }',
    equation_10 = '\\text{ }y = Ae^{nx}+Be^{mx}\\text{ }',
    equation_11 = '\\text{ }\\left(\\frac{d^{2}y}{dx^{2}}\\right)-\\left(m+n\\right)\\left(\\frac{dy}{dx}\\right)+mny=0\\text{ }',
    equation_12 = '\\left(i\\right)\\text{ }y=A\\sin\\left(nx+B\\right)',
    equation_13 = '\\left(ii\\right)\\text{ }y=A\\cos\\left(nx+B\\right)',
    equation_14 = '\\left(iii\\right)\\text{ }y=A\\sin\\left(nx+B\\right)+B\\cos\\left(nx\\right)',
    equation_15 = '\\left(\\frac{d^{2}y}{dx^{2}}\\right)=-n^{2}y';

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
              <Breadcrumb.Item href="/mathematics/calculus/">Calculus</Breadcrumb.Item>
              <Breadcrumb.Item active>Differential Equations</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Navbar />
          </Col>
          <Col sm={9}>
            <div>
              <p className="display-3" style={{ marginTop: "-22px" }}>Differential Equations</p>
              <p className="lead text-justify">
                An equation containing derivatives
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_1}</MathJax.Node>
                </MathJax.Context>
                or differentials
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_2}</MathJax.Node>
                </MathJax.Context>
                is called a differential equation.
              </p>
              <p className="lead text-justify">
                Order of differential equation is the order of highest order differential coefficient appearing in it. <br />
                Example
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_3}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">
                Degree is the highest power of highest order derivatives.<br />
                Example
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_4}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">
                To eliminate n arbitrary constants for formation of a differential equation, we have to differentiate n times
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_5}</MathJax.Node>
                </MathJax.Context>
                The solution of above differential equation is:
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_6}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">
                You can also use the substitution
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_7}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">When
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_8}</MathJax.Node>
                </MathJax.Context>
                Then
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_9}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">When
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_10}</MathJax.Node>
                </MathJax.Context>
                Then
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_11}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">When
              <br />
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_12}</MathJax.Node>
                </MathJax.Context>
                <br />
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_13}</MathJax.Node>
                </MathJax.Context>
                <br />
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_14}</MathJax.Node>
                </MathJax.Context>
                <br />Then<br />
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_15}</MathJax.Node>
                </MathJax.Context>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default differential_equations;