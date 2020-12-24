import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import MathJax from "react-mathjax2";
import Logo from "../logo";
import Navbar from "./navbar";
//img
import Trignometry_Basics from "../../assets/img/trignometry_basics.svg";

function trignometry_basics() {
  const equation_1 = '\\sin\\text{ }\\theta=\\frac{Opposite}{hypotenuse}=\\frac{a}{c}',
    equation_2 = '\\cos\\text{ }\\theta=\\frac{Adjacent}{hypotenuse}=\\frac{b}{c}',
    equation_3 = '\\tan\\text{ }\\theta=\\frac{Opposite}{Adjacent}=\\frac{a}{b}',
    equation_4 = '\\cot\\text{ }\\theta=\\frac{Adjacent}{Opposite}=\\frac{b}{a}',
    equation_5 = '\\sec\\text{ }\\theta=\\frac{Hypotenuse}{Adjacent}=\\frac{c}{b}',
    equation_6 = '\\csc\\text{ }\\theta=\\frac{Hypotenuse}{Oppoie}=\\frac{c}{b}',
    equation_7 = '\\tan\\text{ }\\theta=\\frac{\\sin\\theta}{\\cos\\theta}',
    equation_8 = '\\cot\\text{ }\\theta=\\frac{\\cos\\theta}{\\sin\\theta}',
    equation_9 = '\\sin\\text{ }\\theta=\\frac{1}{\\csc\\theta}',
    equation_10 = '\\cos\\text{ }\\theta=\\frac{1}{\\sec\\theta}',
    equation_11 = '\\tan\\text{ }\\theta=\\frac{1}{\\cot\\theta}',
    equation_12 = '\\cot\\text{ }\\text{ }\\theta=\\frac{1}{\\tan\\theta}',
    equation_13 = '\\sec\\text{ }\\theta=\\frac{1}{\\cos\\theta}',
    equation_14 = '\\csc\\text{ }\\theta=\\frac{1}{\\sin\\theta}',
    equation_15 = '\\sin^{2}\\text{ }\\theta+\\cos^{2}\\theta=1',
    equation_16 = '\\sec^{2}\\text{ }\\theta-\\tan^{2}\\theta=1',
    equation_17 = '\\csc^{2}\\text{ }\\theta+\\cot^{2}\\theta=1',
    equation_18 = '\\sin\\left(-\\theta\\right)=-\\sin\\text{ }\\theta',
    equation_19 = '\\cos\\left(-\\theta\\right)=-\\cos\\text{ }\\theta',
    equation_20 = '\\tan\\left(-\\theta\\right)=-\\tan\\text{ }\\theta',
    equation_21 = '\\cot\\left(-\\theta\\right)=-\\cot\\text{ }\\theta',
    equation_22 = '\\sec\\left(-\\theta\\right)=-\\sec\\text{ }\\theta',
    equation_23 = '\\csc\\left(-\\theta\\right)=-\\csc\\text{ }\\theta',
    equation_24 = '\\sin\\left(\\frac{\\pi}{2-\\theta}\\right)=\\cos\\text{ }\\theta',
    equation_25 = '\\cos\\left(\\frac{\\pi}{2-\\theta}\\right)=\\sin\\text{ }\\theta',
    equation_26 = '\\tan\\left(\\frac{\\pi}{2-\\theta}\\right)=\\cot\\text{ }\\theta',
    equation_27 = '\\cot\\left(\\frac{\\pi}{2-\\theta}\\right)=\\tan\\text{ }\\theta',
    equation_28 = '\\sec\\left(\\frac{\\pi}{2-\\theta}\\right)=\\csc\\text{ }\\theta',
    equation_29 = '\\csc\\left(\\frac{\\pi}{2-\\theta}\\right)=\\sec\\text{ }\\theta',
    equation_30 = '\\sin\\left(A+B\\right)=\\sin\\text{ }A\\text{ }\\cos\\text{ }B+\\cos\\text{ }A\\sin\\text{ }B',
    equation_31 = '\\sin\\left(A-B\\right)=\\sin\\text{ }A\\text{ }\\cos\\text{ }B-\\cos\\text{ }A\\sin\\text{ }B',
    equation_32 = '\\cos\\left(A+B\\right)=\\cos\\text{ }A\\text{ }\\cos\\text{ }B+\\sin\\text{ }A\\sin\\text{ }B',
    equation_33 = '\\cos\\left(A-B\\right)=\\cos\\text{ }A\\text{ }\\cos\\text{ }B-\\sin\\text{ }A\\sin\\text{ }B',
    equation_34 = '\\tan\\left(A+B\\right)=\\frac{\\tan\\text{ }A+\\tan\\text{ }B}{1-\\tan\\text{ }A\\tan\\text{ }B}',
    equation_35 = '\\tan\\left(A-B\\right)=\\frac{\\tan\\text{ }A-\\tan\\text{ }B}{1+\\tan\\text{ }A\\tan\\text{ }B}',
    equation_36 = '\\sin\\text{ }C+\\sin\\text{ }D=2\\sin\\left(\\frac{C+D}{2}\\right)\\cos\\left(\\frac{C-D}{2}\\right)',
    equation_37 = '\\sin\\text{ }C-\\sin\\text{ }D=2\\cos\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)',
    equation_38 = '\\cos\\text{ }C+\\cos\\text{ }D=2\\cos\\left(\\frac{C+D}{2}\\right)\\cos\\left(\\frac{C-D}{2}\\right)',
    equation_39 = '\\cos\\text{ }C-\\cos\\text{ }D=2\\sin\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)',
    equation_40 = '2\\sin\\text{ }A\\cos\\text{ }B = \\sin\\left(A+B\\right)+\\sin\\left(A-B\\right)',
    equation_41 = '2\\cos\\text{ }A\\sin\\text{ }B = \\sin\\left(A+B\\right)-\\sin\\left(A-B\\right)',
    equation_42 = '2\\cos\\text{ }A\\cos\\text{ }B = \\cos\\left(A+B\\right)+\\cos\\left(A-B\\right)',
    equation_43 = '2\\sin\\text{ }A\\sin\\text{ }B = \\cos\\left(A-B\\right)-\\cos\\left(A+B\\right)';

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
              <Breadcrumb.Item active>Trignometry Basics</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Navbar />
          </Col>
          <Col sm={9}>
            <div>
              <p className="display-3" style={{ marginTop: "-22px" }}>Trignometry Basics</p>
              <p className="display-4 text-justify">Basics</p>
              <img className="img__page" src={Trignometry_Basics} alt="" />
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
              <p className="display-4 text-justify">Relations</p>
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
              </p><p className="lead__equation text-justify">
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
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_17}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_18}</MathJax.Node>
                </MathJax.Context>
              </p><p className="lead__equation text-justify">
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
              <p className="display-4 text-justify">Co-Functions</p>
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
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_26}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_27}</MathJax.Node>
                </MathJax.Context>
              </p><p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_28}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_29}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="display-4 text-justify">Sun-Difference</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_30}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_31}</MathJax.Node>
                </MathJax.Context>
              </p>
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
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_34}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_35}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_36}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_37}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_38}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_39}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_40}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_41}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_42}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_43}</MathJax.Node>
                </MathJax.Context>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default trignometry_basics;