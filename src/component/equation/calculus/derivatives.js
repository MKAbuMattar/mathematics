import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import MathJax from "react-mathjax2";
import Logo from "../logo";
import Navbar from "./navbar";

function derivatives() {

  const equation_1 = 'f\'\\left(x\\right)=\\lim_{h \\rightarrow c}\\left(\\frac{f\\left(x+h\\right)-f\\left(x\\right)}{h}\\right)',
    equation_2 = 'f\'(x)=y\'=\\frac{df}{dx}=\\frac{dy}{dx}=\\frac{d}{dx}\\left(f\\left(x\\right)\\right)=Df\\left(x\\right)',
    equation_3 = 'f\'\\left(a\\right)=\\left.y\'\\right|_{x=a}=\\left.\\frac{df}{dx}\\right|_{x=a}=\\left.\\frac{dy}{dx}\\right|_{x=a}=Df\\left(a\\right)',
    equation_4 = '\\left(cf\\right)\'=cf\'\\left(x\\right)',
    equation_5 = '\\left(f\\pm g\\right)\'=f\'\\left(x\\right)\\pm g\'\\left(x\\right)',
    equation_6 = '\\left(fg\\right)\'=f\'g+fg\'\\text{ }\\text{ }\\text{ }\\text{ }Product\\text{ }Rule',
    equation_7 = '\\left(\\frac{f}{g}\\right)\'=\\left(\\frac{f\'g-fg\'}{g^{2}}\\right)\\text{ }\\text{ }\\text{ }\\text{ }Quotient\\text{ }Rule',
    equation_8 = '\\frac{d}{dx}\\left(c\\right)=0',
    equation_9 = '\\frac{d}{dx}\\left(x^{n}\\right)=nx^{n-1}\\text{ }\\text{ }\\text{ }\\text{ }Power\\text{ }Rule',
    equation_10 = '\\frac{d}{dx}\\left(f\\left(g\\left(x\\right)\\right)\\right)=f\'\\left(g\\left(x\\right)\\right)g\'\\left(x\\right)\\text{ }\\text{ }\\text{ }\\text{ }\\text{ }Chain\\text{ }Rule',
    equation_11 = '\\frac{d}{dx}\\left(x\\right)=1',
    equation_12 = '\\frac{d}{dx}\\left(\\sin x\\right)=\\cos x',
    equation_13 = '\\frac{d}{dx}\\left(\\cos x\\right)=-\\sin x',
    equation_14 = '\\frac{d}{dx}\\left(\\tan x\\right)=\\sec^{2} x',
    equation_15 = '\\frac{d}{dx}\\left(\\sec x\\right)=\\sec x\\tan x',
    equation_16 = '\\frac{d}{dx}\\left(\\csc x\\right)=\\csc x\\cot x',
    equation_17 = '\\frac{d}{dx}\\left(\\cot x\\right)=-\\csc^{2} x',
    equation_18 = '\\frac{d}{dx}\\left(\\sin^{-1} x\\right)=\\frac{1}{\\sqrt{1-x^{2}}}',
    equation_19 = '\\frac{d}{dx}\\left(\\cos^{-1} x\\right)=-\\frac{1}{\\sqrt{1-x^{2}}}',
    equation_20 = '\\frac{d}{dx}\\left(\\tan^{-1} x\\right)=\\frac{1}{{1+x^{2}}}',
    equation_21 = '\\frac{d}{dx}\\left(a^{x}\\right)=a^{x}\\ln\\left(a\\right)',
    equation_22 = '\\frac{d}{dx}\\left(e^{x}\\right)=e^{x}',
    equation_23 = '\\frac{d}{dx}\\left(\\ln\\left(x\\right)\\right)=\\frac{1}{x}\\text{ }\\text{ }\\text{ }\\text{ },x>0',
    equation_24 = '\\frac{d}{dx}\\left(\\ln\\left|x\\right|\\right)=\\frac{1}{x}\\text{ }\\text{ }\\text{ }\\text{ },x\\neq0',
    equation_25 = '\\frac{d}{dx}\\left(\\log_{a}{\\left(x\\right)}\\right)=\\frac{1}{x\\ln{a}}\\text{ }\\text{ }\\text{ }\\text{ },x>0',
    equation_26 = '\\text{ }f\'\'\\left(x\\right)=f^{\\left(2\\right)}\\left(x\\right)=\\frac{d^{2}f}{dx^{2}}\\text{ }',
    equation_27 = '\\text{ }f\'\'\\left(x\\right)=\\left(f\'\\left(x\\right)\\right)\'\\text{ }',
    equation_28 = '\\text{ }f^{\\left(n\\right)}\\left(x\\right)=\\frac{d^{n}f}{dx^{n}}\\text{ }',
    equation_29 = '\\text{ }f^{\\left(n\\right)}\\left(x\\right)=\\left(f^{\\left(n-1\\right)}\\left(x\\right)\\right)\'\\text{ }';

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
              <Breadcrumb.Item active>Derivatives</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Navbar />
          </Col>
          <Col sm={9}>
            <div>
              <p className="display-3" style={{ marginTop: "-22px" }}>Derivatives</p>
              <p className="display-4 text-justify">Definition</p>
              <p className="lead text-justify">if y = f(x) then the derivative is defined to be</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_1}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">if y = f(x) then all of the following are equivalent notations for the derivative.</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_2}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">If y = f(x) all of the following are equivalent notations for derivative evaluated at x =a.</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_3}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="display-4 text-justify">Interpretation of Derivatives</p>
              <p className="lead text-justify">if y = f(x) then,</p>
              <p className="lead text-justify">1. m = f'(a) is the slope of the tangent line to y = f(x) at x = a and the equation of the tangent line at x = a is given by y = f(a)+f'(a)(x-a).</p>
              <p className="lead text-justify">2. f'(a) is the instantaneous rate of change of f(x) at x = a.</p>
              <p className="lead text-justify">3. If f(x) is the position of an object at time x then f'(a) is the velocity of the object at x = a.</p>
              <p className="display-4 text-justify">Basic Properties</p>
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
              <p className="display-4 text-justify">Common Derivatives</p>
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
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_21}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_22}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_23}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_24}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_25}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="display-4 text-justify">Higher Order Derivatives</p>
              <p className="lead text-justify">
                The second Derivative is denoted as
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_26}</MathJax.Node>
                </MathJax.Context>
                and is defined as
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_27}</MathJax.Node>
                </MathJax.Context>
                ,i.e. the derivative of the first derivative, f'(x). <br />
                The n<sup>th</sup> Derivative is denoted as
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_28}</MathJax.Node>
                </MathJax.Context>
                and is defined as
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_29}</MathJax.Node>
                </MathJax.Context>
                , i.e. the derivative of the (n-1)<sup>st</sup> derivative, f<sup>(n-1)</sup>(x).
              </p>
              <p className="display-4 text-justify">Others</p>
              <p className="lead text-justify">
                <strong>Critical Points</strong><br />
                x = c is a critical point of f(x) provied either <br />
                1. f'(c) = 0 <br />
                2. f'(c) doesn't exist.
                <string>Increasing/Decreasing</string><br />
                1. If f'(x) &gt; 0 for all x in an interval <em>I</em> then f (x) is increasing on the interval <em>I</em>. <br />
                2. If f'(x) &lt; 0 for all x in an interval <em>I</em> then f (x) is Decreasing on the interval <em>I</em>. <br />
                3. If f'(x) = 0 for all x in an interval <em>I</em> then f (x) is constant on the interval <em>I</em>. <br />
                <strong>Concave up/Concave down</strong><br />
                1. If f"(x) &gt; 0 for all x in an interval <em>I</em> then f (x) is concave up on the interval <em>I</em>. <br />
                1. If f"(x) &lt; 0 for all x in an interval <em>I</em> then f (x) is concave down on the interval <em>I</em>. <br />
                <strong>Infection Points</strong><br />
                x = c is inflection point of f(x) if the concavity changes at x = c.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default derivatives;