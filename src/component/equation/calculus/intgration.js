import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import MathJax from "react-mathjax2";
import Logo from "../logo";
import Navbar from "./navbar";

function intgration() {

  const equation_1 = '\\text{ }\\text{ }\\triangle\\text{ }x\\text{ }\\text{ }',
    equation_2 = '\\text{ }\\text{ }x_{i}^{*}\\text{ }\\text{ }',
    equation_3 = '\\text{ }then\\text{ }\\int_{a}^{b} f\\left(x\\right)dx=\\lim_{n \\rightarrow \\infty}f\\left(x_{i}^{*}\\right)\\triangle\\text{ }x.',
    equation_4 = '\\text{ }\\text{ }\\text{ }\\int f\\left(x\\right)dx=F\\left(x\\right)+c\\text{ }\\text{ }',
    equation_5 = '\\int f\\left(x\\right)\\pm g\\left(x\\right)dx=\\int f\\left(x\\right)dx\\pm\\int g\\left(x\\right)dx',
    equation_6 = '\\int_{a}^{b}f\\left(x\\right)\\pm g\\left(x\\right)dx=\\int_{a}^{b}f\\left(x\\right)dx\\pm\\int_{a}^{b}g\\left(x\\right)dx',
    equation_7 = '\\int_{a}^{a}f\\left(x\\right)dx=0',
    equation_8 = '\\int_{a}^{b}f\\left(x\\right)dx=-\\int_{b}^{a}f\\left(x\\right)dx',
    equation_9 = '\\int cf\\left(x\\right)dx=c\\int f\\left(x\\right)dx \\text{ }\\text{ }\\text{ },c\\text{ }is\\text{ }a\\text{ }constant',
    equation_10 = '\\int_{a}^{b} cf\\left(x\\right)dx=c\\int_{a}^{b} f\\left(x\\right)dx \\text{ }\\text{ }\\text{ },c\\text{ }is\\text{ }a\\text{ }constant',
    equation_11 = '\\int_{a}^{b}f\\left(x\\right)dx=\\int_{a}^{b}f\\left(t\\right)dt',
    equation_12 = '\\left|\\int_{a}^{b}f\\left(x\\right)dx\\right|=\\int_{a}^{b}\\left|f\\left(x\\right)\\right|dx',
    equation_13 = 'if\\text{ }f\\left(x\\right)\\geq g\\left(x\\right)\\text{ on }a\\leq x\\leq b\\text{ }then\\text{ }\\text{ }\\int_{a}^{b}f\\left(x\\right)dx\\geq\\int_{a}^{b}g\\left(x\\right)dx',
    equation_14 = 'if\\text{ }f\\left(x\\right)\\geq0\\text{ }on\\text{ }a\\leq x\\leq b\\text{ }then\\text{ }\\int_{a}^{b}f\\left(x\\right)dx\\geq0',
    equation_15 = 'if\\text{ }m\\leq f\\left(x\\right)\\leq M\\text{ }on\\text{ }a\\leq x\\leq b\\text{ }m\\left(b-a\\right)\\leq\\int_{a}^{b}f\\left(x\\right)dx\\leq M\\left(b-a\\right)',
    equation_16 = '\\int k\\text{ }dx=k\\text{ }x+c',
    equation_17 = '\\int x^{n}\\text{ }dx=\\frac{1}{1+n}x^{n+1}+c\\text{ }\\text{ }\\text{ },n\\neq-1',
    equation_18 = '\\int x^{-1}\\text{ }dx=\\int\\frac{1}{x}dx=\\ln\\left|x\\right|+c',
    equation_19 = '\\int \\frac{1}{ax+b}\\text{ }dx=\\frac{1}{a}\\ln\\left|ax+b\\right|+c',
    equation_20 = '\\int \\ln\\text{ }u\\text{ }du=u\\text{ }\\ln\\left(u\\right)-u+c',
    equation_21 = '\\int e^{u}\\text{ }du=e^{u}+c',
    equation_22 = '\\int\\cos\\text{ }u\\text{ }du=\\sin\\text{ }u+c',
    equation_23 = '\\int\\sin\\text{ }u\\text{ }du=-\\cos\\text{ }u+c',
    equation_24 = '\\int\\sec^{2}\\text{ }u\\text{ }du=\\tan\\text{ }u+c',
    equation_25 = '\\int\\sec\\text{ }u\\text{ }\\tan\\text{ }u\\text{ }du=\\sec\\text{ }u+c',
    equation_26 = '\\int\\csc\\text{ }u\\text{ }\\cot\\text{ }u\\text{ }du=-\\csc\\text{ }u+c',
    equation_27 = '\\int\\csc^{2}\\text{ }u\\text{ }du=-\\cot\\text{ }u+c',
    equation_28 = '\\int\\tan\\text{ }u\\text{ }du=\\ln\\left|\\sec\\text{ }u\\right|+c',
    equation_29 = '\\int\\sec\\text{ }u\\text{ }du=\\ln\\left|\\sec\\text{ }u\\text{ }\\tan\\text{ }u\\right|+c',
    equation_30 = '\\int\\frac{1}{a^{2}+u^{2}}\\text{ }du=\\frac{1}{a}\\tan^{-1}\\left(\\frac{u}{a}\\right)+a',
    equation_31 = '\\int\\frac{1}{\\sqrt{a^{2}+u^{2}}}\\text{ }du=\\sin^{-1}\\left(\\frac{u}{a}\\right)+a',
    equation_32 = '\\int u\\text{ }v\\text{ }dx=u\\int v\\text{ }dx-\\int u\'\\left(\\int v\\text{ }dx\\right)dx',
    equation_33 = '\\text{ }\\text{ }\\int \\sin\'\'\\text{ }x\\text{ }\\cos\'\'\'x\\text{ }dx\\text{ }\\text{ }',
    equation_34 = '\\text{ }\\text{ }\\sin^{2}\\text{ }x=1-\\cos^{2}\\text{ }x\\text{ }\\text{ }',
    equation_35 = '\\text{ }\\text{ }u=\\cos\\text{ }x\\text{ }\\text{ .}',
    equation_36 = '\\text{ }\\text{ }\\cos^{2}\\text{ }x=1-\\sin^{2}\\text{ }x\\text{ }\\text{ }',
    equation_37 = '\\text{ }\\text{ }u=\\sin\\text{ }x\\text{ }\\text{ .}',
    equation_38 = '\\text{ }\\text{ }\\int\\tan\'\'\\text{ }x\\text{ }\\sec\'\'\'\\text{ }x\\text { }dx\\text{ }\\text{ }',
    equation_39 = '\\text{ }\\text{ }\\tan^{2}x=\\sec^{2}x-1\\text{ }\\text{ }',
    equation_40 = '\\text{ }\\text{ }u=\\sec\\text{ }x\\text{ }\\text{ .}',
    equation_41 = '\\text{ }\\text{ }\\sec^{2}x=1+\\tan^{2}x\\text{ }\\text{ }',
    equation_42 = '\\text{ }\\text{ }u=\\tan\\text{ }x\\text{ }\\text{ .}';

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
              <Breadcrumb.Item active>Intgration</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Navbar />
          </Col>
          <Col sm={9}>
            <div>
              <p className="display-3" style={{ marginTop: "-22px" }}>Intgration</p>
              <p className="display-4">Definition</p>
              <p className="lead text-justify">
                <strong>Definite Integral:</strong> Suppose <em>f</em>(x) is continuous on [a,b]. Divide [a,b] into <em>n</em> subintervals of width
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_1}</MathJax.Node>
                </MathJax.Context>
                and choose
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_2}</MathJax.Node>
                </MathJax.Context>
                from each interval.
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_3}</MathJax.Node>
                </MathJax.Context> <br />
                <strong>Anti-Derivative:</strong> An anti-derivative of <em>f</em>(x) is a function, <em>F</em>(x), such that <em>F'</em>(x)=<em>f</em>(x). <br />
                <strong>Indefinite Integral:</strong>
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_4}</MathJax.Node>
                </MathJax.Context>
                where <em>F</em>(x) is anti-derivative of <em>f</em>(x).
              </p>
              <p className="display-4">Peroprtes</p>
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
              <p className="display-4">Common Integrals</p>
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
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_26}</MathJax.Node>
                </MathJax.Context>
              </p>
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
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_29}</MathJax.Node>
                </MathJax.Context>
              </p>
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
              <p className="display-4">Integration by Parts</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_32}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead text-justify">
                Where, <br />
                u is the function u(x) <br />
                v is the function v(x)
              </p>
              <p className="display-4">Trigonometic Integrals</p>
              <p className="lead text-justify">
                For
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_33}</MathJax.Node>
                </MathJax.Context>
                we have the following:<br />
                <strong>1. <em>n</em> odd.</strong> Strip 1 since out and convert rest to cosines using
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_34}</MathJax.Node>
                </MathJax.Context>
                , then use the substitution
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_35}</MathJax.Node>
                </MathJax.Context> <br />
                <strong>2. <em>m</em> odd.</strong> Strip 1 cosine out and convert rest to sines using
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_36}</MathJax.Node>
                </MathJax.Context>
                , then use the substitution
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_37}</MathJax.Node>
                </MathJax.Context> <br />
                <strong>3. <em>n</em> and <em>m</em> both odd.</strong> Use either 1. or 2. <br />
                <strong>4. <em>n</em> and <em>m</em> both even.</strong> Use double angle and/or half angle formulas to reduce the integral formulas to reduce the integral into a foram tht can be integrated.
              </p>
              <p className="lead text-justify">For
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_38}</MathJax.Node>
                </MathJax.Context>
                we have the following: <br />
                <strong>1. <em>n</em> odd.</strong> Strip 1 tangent and 1 secant out and convert the rest to secants using
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_39}</MathJax.Node>
                </MathJax.Context>
                , then use the substitution
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_40}</MathJax.Node>
                </MathJax.Context> <br />
                <strong>2. <em>m</em> even.</strong> Strip 2 secants out and convert rest to tangents using
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_41}</MathJax.Node>
                </MathJax.Context>
                , then use the substitution
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_42}</MathJax.Node>
                </MathJax.Context> <br />
                <strong>3. <em>n</em> odd and <em>m</em>even.</strong> Use either 1. or 2. <br />
                <strong>4. <em>n</em>even and <em>m</em> odd.</strong> Each integral will be dealt with differently.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default intgration;