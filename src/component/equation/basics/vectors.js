import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import MathJax from "react-mathjax2";
import Logo from "../logo";
import Navbar from "./navbar";

function vectors() {
  const equation_1 = 'Let\\text{ }\\overline{a}=a_{1}i+a_{2}j+a_{3}k',
    equation_2 = '\\text{ }\\text{ }\\text{ }\\text{ }\\text{ }\\overline{b}=b_{1}i+b_{2}j+b_{3}k',
    equation_3 = 'Then\\text{ }\\overline{a}.\\overline{b}=\\left(a_{1}i+a_{2}j+a_{3}k\\right)\\left(b_{1}i+b_{2}j+b_{3}k\\right)',
    equation_4 = '\\text{ }\\text{ }\\text{ }\\text{ }\\text{ }\\text{ }\\text{ }\\text{ }\\text{ }\\text{ }\\text{ }\\text{ }\\text{ }\\text{ }=a_{1}b_{1}+a_{2}b_{2}+a_{3}b_{3}\\text{ }\\text{ }\\left(Scalar\\text{ }Quantity\\right)',
    equation_5 = 'Note:\\text{ }\\overline{a}.\\overline{b}=\\overline{b}.\\overline{a}',
    equation_6 = 'Then\\text{ }\\overline{\\mathbf{a}} \\times \\overline{\\mathbf{b}} =  \\begin{vmatrix}\\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ a_{1} &  a_{2} & a_{3} \\\\ b_{1} &  b_{2} & b_{3} \\end{vmatrix}',
    equation_7 = 'Note: \\text{ }\\overline{a}\\times\\overline{b}\\neq\\overline{b}\\times\\overline{a}',
    equation_8 = '\\text{ }\\text{ }\\text{ }\\text{ }\\text{ }\\text{ }\\text{ }\\text{ }\\text{ }\\text{ }\\overline{a}\\times\\overline{b}=-\\overline{b}\\times\\overline{a}',
    equation_9 = '\\overline{OP}=\\left(x-0\\right)i+\\left(y-0\\right)j+\\left(z-0\\right)k',
    equation_10 = '\\text{ }\\text{ }\\text{ }\\text{ }\\text{ }=xo+yj+zk',
    equation_11 = '\\left|\\overline{r}\\right|=\\sqrt{x^{2}+y^{2}+z^{2}}',
    equation_12 = '\\widehat{a} = \\frac{\\overline{a}}{\\left|\\overline{a}\\right|}',
    equation_13 = 'Let\\text{ }\\overline{a}=a_{1}i+a_{2}j+a_{3}k',
    equation_14 = '\\text{ }\\text{ }\\text{ }\\left|\\overline{a}\\right|=\\sqrt{a_{1}^{2}+a_{2}^{2}+a_{3}^{2}}',
    equation_15 = '\\therefore\\text{ }\\widehat{a}=\\frac{a_{1}i+a_{2}j+a_{3}k}{\\sqrt{a_{1}^{2}+a_{2}^{2}+a_{3}^{2}}}',
    equation_16 = 'Lat\\text{ }\\text{ }\\overline{a}=a_{1}^{i}+a_{2}^{j}+a_{3}^{k}',
    equation_17 = '\\text{ }\\text{ }\\text{ }\\text{ }\\text{ }\\text{ }\\overline{b}=b_{1}^{i}+b_{2}^{j}+b_{3}^{k}',
    equation_18 = '\\text{ }\\text{ }\\text{ }\\text{ }\\text{ }\\text{ }\\overline{c}=c_{1}^{i}+c_{2}^{j}+c_{3}^{k}',
    equation_19 = '\\mathbf{\\overline{a}}.\\left(\\mathbf{\\overline{b}}\\times\\mathbf{\\overline{c}}\\right)=\\begin{vmatrix}a_{1}&a_{2}&a_{3} \\\\ b_{1}&b_{2}&b_{3} \\\\ c_{1}& c_{2}&c_{3} \\end{vmatrix}',
    equation_20 = '\\overline{a}.\\left(\\overline{b}\\times\\overline{c}\\right)=\\left[\\overline{a}\\text{ }\\text{ }\\overline{b}\\text{ }\\text{ }\\overline{c}\\right]',
    equation_21 = '\\left[a\\text{ }b\\text{ }c\\right]=\\left[b\\text{ }c\\text{ }a\\right]=\\left[c\\text{ }a\\text{ }b\\right]',
    equation_22 = '\\left[a\\text{ }b\\text{ }c\\right]=-\\left[a\\text{ }b\\text{ }c\\right]',
    equation_23 = '\\left[a\\text{ }a\\text{ }b\\right]=\\left[b\\text{ }a\\text{ }a\\right]=\\left[a\\text{ }b\\text{ }a\\right]=0',
    equation_24 = 'a.\\left(b\\times c\\right)=\\left(a\\times b\\right).c',
    equation_25 = 'if\\text{ }a,b,c\\text{ }are\\text{ }coplanar\\text{ }then\\text{ }\\left[a\\text{ }b\\text{ }c\\right]=0',
    equation_26 = 'Voulme\\text{ }of\\text{ }parallelopoped=\\left[a\\text{ }b\\text{ }c\\right]',
    equation_27 = 'Voulme\\text{ }of\\text{ }tetrahedron=\\frac{1}{6}\\text{ }\\left[a\\text{ }b\\text{ }c\\right]',
    equation_28 = 'Let\\text{ }\\text{ }\\overline{a}=a_{1}^{i}+a_{2}^{j}+a_{3}^{k}',
    equation_29 = '\\text{ }\\text{ }\\text{ }\\text{ }\\text{ }\\text{ }\\overline{b}=b_{1}^{i}+b_{2}^{j}+b_{3}^{k}',
    equation_30 = '\\text{ }\\text{ }\\text{ }\\text{ }\\text{ }\\text{ }\\overline{c}=c_{1}^{i}+c_{2}^{j}+c_{3}^{k}',
    equation_31 = 'a\\times\\left(b\\times c\\right)=\\left(a.c\\right)b-\\left(a.b\\right)c',
    equation_32 = 'b\\times\\left(c\\times a\\right)=\\left(b.a\\right)c-\\left(b.c\\right)a',
    equation_33 = 'c\\times\\left(a\\times b\\right)=\\left(c.b\\right)a-\\left(c.a\\right)b',
    equation_34 = 'Note:\\text{ }\\text{ }a\\times\\left(b\\times c\\right)\\neq\\left(a\\times b\\right)\\times c';

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
              <Breadcrumb.Item href="/basics/">Basics</Breadcrumb.Item>
              <Breadcrumb.Item active>Vectors</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Navbar />
          </Col>
          <Col sm={9}>
            <div>
              <p className="display-2" style={{ marginTop: "-22px" }}>Vectors</p>
              <p className="display-4">Dot Product</p>
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
              <p className="display-4">Cross Product</p>
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
              <p className="display-4">Position Vector</p>
              <p className="lead__equation text-justify">For Point P(x,y,z), position vector</p>
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
              <p className="display-4">Unit Vector</p>
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
              <p className="display-4">Scalar Triple Product</p>
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
              <p className="lead__equation text-justify">Propertes</p>
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
              <p className="display-4">Vector Triple Product</p>
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
              <p className="lead__equation text-justify">Then, </p>
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
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default vectors;