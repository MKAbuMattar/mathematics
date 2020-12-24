import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import MathJax from "react-mathjax2";
import Logo from "../logo";
import Navbar from "./navbar";

function limits() {

  const equation_1 = '\\lim_{x \\rightarrow a}\\left[cf\\left(x\\right)\\right]=c\\lim_{x \\rightarrow a}f\\left(x\\right)',
    equation_2 = '\\lim_{x \\rightarrow a}\\left[f\\left(x\\right)\\pm g\\left(x\\right)\\right]=\\lim_{x \\rightarrow a}f\\left(x\\right)\\pm\\lim_{x \\rightarrow a}g\\left(x\\right)',
    equation_3 = '\\lim_{x \\rightarrow a}\\left[f\\left(x\\right) g\\left(x\\right)\\right]=\\lim_{x \\rightarrow a}f\\left(x\\right) \\lim_{x \\rightarrow a}g\\left(x\\right)',
    equation_4 = '\\lim_{x \\rightarrow a}\\left[\\frac{f\\left(x\\right)}{g\\left(x\\right)}\\right]=\\frac{\\lim_{x \\rightarrow a}f\\left(x\\right)}{\\lim_{x \\rightarrow a}g\\left(x\\right)}\\text{ }\\text{ }\\text{ }provided\\text{ }\\lim_{x \\rightarrow a}g\\left(x\\right)\\neq0',
    equation_5 = '\\lim_{x \\rightarrow a}\\left[f\\left(x\\right)\\right]^{2}=\\left[\\lim_{x \\rightarrow a}f\\left(x\\right)\\right]^{2}',
    equation_6 = '\\lim_{x \\rightarrow a}\\left[\\sqrt[n]{f\\left(x\\right)}\\right]=\\sqrt[n]{\\left[\\lim_{x \\rightarrow a}f\\left(x\\right)\\right]}',
    equation_7 = '\\text{ }\\pm\\infty',
    equation_8 = '\\lim_{x \\rightarrow \\infty}e^{x}=\\infty\\text{ & }\\lim_{x \\rightarrow-\\infty}e^{x}=0',
    equation_9 = '\\lim_{x \\rightarrow \\infty}\\ln^{x}=\\infty\\text{ & }\\lim_{x \\rightarrow 0^{+}}\\ln^{x}=-\\infty',
    equation_10 = 'if\\text{ }r>0\\text{ }then\\text{ }\\lim_{a \\rightarrow \\infty}\\frac{b}{x^{r}}=0',
    equation_11 = 'if\\text{ }r>0\\text{ }and\\text{ }x^{r}\\text{ }is\\text{ }real\\text{ }for\\text{ }negative\\text{ }x\\text{ }then\\text{ }\\lim_{a \\rightarrow \\infty}\\frac{b}{x^{r}}=0',
    equation_12 = 'n\\text{ }even:\\lim_{a\\rightarrow\\pm\\infty}x^{n}=\\infty',
    equation_13 = 'n\\text{ }odd:\\lim_{a\\rightarrow\\infty}x^{n}=\\infty\\text{ & }\\lim_{a\\rightarrow-\\infty}x^{n}=-\\infty',
    equation_14 = 'n\\text{ }even:\\lim_{a\\rightarrow\\pm\\infty}ax^{n}+...+bx+c=sgn\\left(a\\right)\\infty',
    equation_15 = 'n\\text{ }odd:\\lim_{a\\rightarrow\\infty}ax^{n}+...+bx+c=sgn\\left(a\\right)\\infty',
    equation_16 = 'n\\text{ }odd:\\lim_{a\\rightarrow-\\infty}ax^{n}+...+xx+d=sgn\\left(a\\right)\\infty',
    equation_17 = 'if\\text{ }f\\left(x\\right)\\text{ }is\\text{ }continuous\\text{ }at\\text{ }a\\text{ }then\\text{ }\\lim_{x \\rightarrow a}f\\left(x\\right)=f\\left(a\\right)',
    equation_18 = 'if\\text{ }f\\left(x\\right)\\text{ }is\\text{ }continuous\\text{ }at\\text{ }b\\text{ }and\\text{ }\\lim_{x \\rightarrow a}g\\left(x\\right)=b\\left(a\\right) then',
    equation_19 = '\\lim_{x \\rightarrow a}f\\left(g\\left(x\\right)\\right)=f\\left(\\lim_{x \\rightarrow a}g\\left(x\\right)\\right)=f\\left(b\\right)',
    equation_20 = '\\lim_{x \\rightarrow 2}\\frac{x^{2}+4x-12}{x^{2}-2x}=\\lim_{x \\rightarrow 2}\\frac{\\left(x-2\\right)\\left(x+6\\right)}{x\\left(x-2\\right)}',
    equation_21 = '=\\lim_{x \\rightarrow 2}\\frac{x+6}{x}=\\frac{8}{2}=4',
    equation_22 = '\\lim_{x \\rightarrow 9}\\frac{3-\\sqrt{x}}{x^{2}-81}=\\lim_{x \\rightarrow 9}\\frac{3-\\sqrt{x}}{x^{2}-81}\\frac{3+\\sqrt{x}}{3+\\sqrt{x}}',
    equation_23 = '=\\lim_{x \\rightarrow 9}\\frac{9-x}{\\left(x^{2}-81\\right)\\left(3+\\sqrt{x}\\right)}=\\lim_{x \\rightarrow 9}\\frac{-1}{\\left(x-9\\right)\\left(3+\\sqrt{x}\\right)}',
    equation_24 = '=\\frac{-1}{\\left(18\\right)\\left(16\\right)}=-\\frac{1}{108}',
    equation_25 = '\\lim_{h \\rightarrow 0}\\frac{1}{h}\\left(\\frac{1}{x+h}-\\frac{1}{x}\\right)=\\lim_{h \\rightarrow 0}\\frac{1}{h}\\left(\\frac{x-\\left(x+h\\right)}{x\\left(x+h\\right)}\\right)',
    equation_26 = '=\\lim_{h \\rightarrow 0}\\frac{1}{h}\\left(\\frac{-h}{x\\left(x+h\\right)}\\right)=\\lim_{h \\rightarrow 0}\\frac{-1}{x\\left(x+h\\right)}=\\frac{1}{x^{2}}',
    equation_27 = 'if\\text{ }\\lim_{x \\rightarrow a}\\frac{f\\left(x\\right)}{g\\left(x\\right)}=\\frac{0}{0}\\text{ }or\\text{ }\\lim_{x \\rightarrow a}\\frac{x\\left(x\\right)}{g\\left(x\\right)}=\\frac{\\pm\\infty}{\\pm\\infty}\\text{ }then,',
    equation_28 = '\\lim_{x \\rightarrow a}\\frac{f\\left(x\\right)}{g\\left(x\\right)}=\\lim_{x \\rightarrow a}\\frac{f\'\\left(x\\right)}{g\'\\left(x\\right)}\\text{ }a\\text{ }is\\text{ }a\\text{ }number,\\text{ }\\infty\\text{ }or\\text{ }-\\infty',
    equation_29 = '\\text{ }\\lim_{x \\rightarrow \\pm\\infty}\\frac{p\\left(x\\right)}{q\\left(x\\right)}\\text{ }',
    equation_30 = '\\lim_{x \\rightarrow-\\infty}\\left(\\frac{3x^{2}-4}{5x-2x^{2}}\\right)=\\lim_{x \\rightarrow-\\infty}\\left(\\frac{3-\\frac{4}{x^{2}}}{x^{2}\\left(\\frac{5}{x}-2\\right)}\\right)=\\lim_{x \\rightarrow-\\infty}\\left(\\frac{3-\\frac{4}{x^{2}}}{\\frac{5}{x}-2}\\right)=-\\frac{3}{2}',
    equation_31 = '\\lim_{x \\rightarrow-2}g\\left(x\\right)\\text{ }where\\text{ }g\\left(x\\right)=\\begin{cases}x^{2}+5 & if\\text{ }x < -2\\\\ 1-3x & if\\text{ }x\\geq-2\\end{cases}',
    equation_32 = '\\lim_{x \\rightarrow -2^{-}}g\\left(x\\right)=\\lim_{x \\rightarrow -2^{-}}\\left(x^{2}+5\\right)=9',
    equation_33 = '\\lim_{x \\rightarrow -2^{+}}g\\left(x\\right)=\\lim_{x \\rightarrow -2^{+}}\\left(1-3x\\right)=7',
    equation_34 = '\\text{ }\\lim_{x \\rightarrow -2}g\\left(x\\right)\\text{ }';

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
              <Breadcrumb.Item active>Limits</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Navbar />
          </Col>
          <Col sm={9}>
            <div>
              <p className="display-3" style={{ marginTop: "-22px" }}>Limits</p>
              <p className="display-4 text-justify">Properties</p>
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
              <p className="display-4 text-justify">
                Basic Limit Evalution at
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
              <p className="display-4 text-justify">Evalution Techniques</p>
              <p className="lead text-justify">Continuous Function</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_17}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">Continuous Functions and Composition</p>
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
              <p className="lead text-justify">Factor and Cancel</p>
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
              <p className="lead text-justify">Rationalize Numberator/Denominator</p>
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
              <p className="lead text-justify">Combine Ratinal Expressions</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_25}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_26}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">L'Hospital's Rule</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_27}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_28}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">Polynomials at Infinity</p>
              <p className="lead text-justify">
                p(x) and q(x) are polynomials. TO compute
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_29}</MathJax.Node>
                </MathJax.Context>
                factor largest power of x q(x) out of both p(x) and q(x) then compute limit.
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_30}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">Piecewise Function</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_31}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">Compute two one side limits,</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_32}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_33}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">
                One side limts are differnt so
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_34}</MathJax.Node>
                </MathJax.Context>
                doesn't exist. if the two one sided limits had beet equal then
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_34}</MathJax.Node>
                </MathJax.Context>
                would have existed and had the same value.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default limits;