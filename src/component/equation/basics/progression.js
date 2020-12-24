import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import MathJax from "react-mathjax2";
import Logo from "../logo";
import Navbar from "./navbar";

function progression() {
  const equation_1 = 't_{n}=a+(n-1)d',
    equation_2 = 'n=\\frac{\\left(1+a\\right)}{d}+1',
    equation_3 = 'S_{n}=\\left(\\frac{n}{2}\\right)\\left[2a+\\left(n+1\\right)d\\right]',
    equation_4 = '\\text{ }\\text{ }\\text{ }\\text{ }=\\left(\\frac{n}{2}\\right)\\left[a+1\\right]',
    equation_5 = 'b=\\frac{a+c}{2}',
    equation_6 = '\\text{ }\\text{ }=\\frac{a+b}{2}',
    equation_7 = '3\\text{ }terms\\text{ }: \\left(a-d\\right), a,\\left(a+d\\right)',
    equation_8 = '4\\text{ }terms\\text{ }: \\left(a-3d\\right), \\left(a-d\\right),\\left(a+d\\right),\\left(a+3d\\right)',
    equation_9 = '5\\text{ }terms\\text{ }: \\left(a-2d\\right), \\left(a-d\\right),a,\\left(a+d\\right),\\left(a+2d\\right)',
    equation_10 = 't_{n}=ar^{\\left(n-1\\right)}',
    equation_11 = 'Sn = \\left\\{ \\begin{array}{l l} \\frac{a\\left(r^{n}-1\\right)}{r-1} & \\quad \\text{ }if\\text{ }\\left(r > 1\\right)\\\\  \\frac{a\\left(1-r^{n}\\right)}{1-r} & \\quad \\text{ }if\\text{ }\\left(r < 1\\right)\\ \\end{array} \\right.',
    equation_12 = 'S_{\\infty}=\\frac{a}{1-r} \\text{ }\\left(if\\text{ } 0<r<1\\right)',
    equation_13 = 'b=\\sqrt{ac}',
    equation_14 = 'b=\\sqrt{ab}',
    equation_15 = '\\frac{a-b}{b-c}=\\frac{a}{b}',
    equation_16 = '3\\text{ }terms\\text{ }:\\left(\\frac{b}{r}\\right),a,ar',
    equation_17 = '5\\text{ }terms\\text{ }:\\left(\\frac{a}{r^{2}}\\right),\\left(\\frac{a}{r}\\right),a,ar,ar^{2}',
    equation_18 = '\\text{ }\\frac{1}{a1},\\frac{1}{a2},\\frac{1}{a3}, ... \\frac{1}{an}\\text{ }',
    equation_19 = '\\text{ }\\frac{1}{a},\\frac{1}{\\left(a+d\\right)},\\frac{1}{\\left(a+2d\\right)},...\\text{ }',
    equation_20 = '\\text{ }HP=\\frac{1}{\\left[a+\\left(n-1\\right)d\\right]}\\text{ }',
    equation_21 = '\\text{ }b=\\frac{\\left(2ac\\right)}{\\left(a+c\\right)}\\text{ }',
    equation_22 = '\\text{ }b=\\frac{\\left(2ab\\right)}{\\left(a+b\\right)}\\text{ }',
    equation_23 = '\\text{ }, \\text{ }\\frac{2}{b}=\\frac{1}{a}+\\frac{1}{c}',
    equation_24 = 'GM^{2}= AM \\times HM';

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
              <Breadcrumb.Item active>Progression</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Navbar />
          </Col>
          <Col sm={9}>
            <div>
              <p className="display-2" style={{ marginTop: "-22px" }}>Progression</p>
              <p className="display-4 text-justify">Arithmetic Progression (AP)</p>
              <p className="lead text-justify">
                Arthmetic progression (AP) is a sequence of number in which each term after the first is obtained by adding a constant, d to the precedingterm. The constat d is called commin difference.  An arithmetic progression is given by a, (a+d), (a+2d), (a+3d),... where a = the girst term, d = the common difference
              </p>
              <p className="lead__equation text-justify">• n<sup>th</sup> term of AP</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_1}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">(Where t<sub>n</sub> = n<sup>th</sup> term, a = first term, 1 = last term and d = common difference)</p>
              <p className="lead__equation text-justify">• Number of term in an AP</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_2}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">(Where n = number of terms, a = first term, 1 = last term and d = common difference)</p>
              <p className="lead__equation text-justify">• Sum of first n terms in AP</p>
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
              <p className="lead text-justify">(Whare a = first term, d = commn difference and 1 = n<sup>th</sup> term = a +(n-1)d)</p>
              <p className="lead__equation text-justify">• Arithmtic Mean</p>
              <p className="lead text-justify">If a,b,c are in AP,b is the Arithmtic Mean (A.M) between a and c.</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_5}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">A.M between 2 number a and b</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_6}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">If a, a<sub>1</sub>, a<sub>2</sub>, ... a<sub>n</sub>, b are in AP we can say that a<sub>1</sub>, a<sub>2</sub>, ... a<sub>n</sub> are the n Arithmetic Means berween a and b.</p>
              <p className="lead__equation text-justify">• Nots</p>
              <p className="lead text-justify">To solve most of the problems reated to A.P the terms can be conveientry Take as</p>
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
              <p className="lead text-justify">T<sub>n</sub> = S<sub>n</sub> - S<sub>n-1</sub></p>
              <p className="display-4 text-justify">Geometric Progression (GP)</p>
              <p className="lead text-justify">A sequence of non-zero number is a Geometric Progression (GP) if the ratio of any term and its preceding term is always constant. A Geometric Progression (GP) is given by a, ar, ar<sup>2</sup>, ar<sup>3</sup> ... where a = the first term, r = the commn ration.</p>
              <p className="lead__equation text-justify">• n<sup>th</sup> term of GP</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_10}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">(Where t<sub>n</sub> = n<sup>th</sup>  term, a = first term, r = common ratio and n = number of terms)</p>
              <p className="lead__equation text-justify">• Sum of first n Terms in GP</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_11}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">(Where a = the first term, r = common ratio, n = number of terms)</p>
              <p className="lead text-justify">Note: When n = ∞, then</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_12}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">• Geometic Mean</p>
              <p className="lead text-justify">If ther non-zero numbers a,b,c are in GP, b is the Geometric Mean (GM) between a and c. <br /> in this case,
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_13}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">The Gometric Mean (GM) between two numbers a and
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_14}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">(Note that if a and b are of opposite sign, their GM is not defined)</p>
              <p className="lead__equation text-justify">• Note</p>
              <p className="lead text-justify">
                If a,b,c are in GP, then
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_15}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">To solve most problems related  to GP the terms of the GP can be conveintly taken as</p>
              <p className="lead text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_16}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_17}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="display-4 text-justify">Harmonic Progression (HP)</p>
              <p className="lead text-justify">
                Non-zero number a1, a2, a3, ... an are in HP if
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_18}</MathJax.Node>
                </MathJax.Context>
                are in AP</p>
              <p className="lead text-justify">
                • If a, (a+d), (a+2d),... are in AP, n<sup>th</sup> term of Ap = a + (n-)d
                Hence, if
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_19}</MathJax.Node>
                </MathJax.Context>
                are in HP, n<sup>th</sup> term of the
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_20}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">
                • If a,b,c are in HP, b is the Harmonic Mean (HM) between two number a and c In this case,
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_21}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">
                • The Harmonic Mean (HM) between two number a and
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_22}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">
                • If a,b,c are in HP
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_23}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="display-4 text-justify">Relationship between AM, GM and HM of Two Numbers</p>
              <p className="lead text-justify">If Gm, AM and HM are the Geometic Mean Arithmetic Mean and Harmonic Mean of two positive numbers respectively, then</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_24}</MathJax.Node>
                </MathJax.Context>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default progression;