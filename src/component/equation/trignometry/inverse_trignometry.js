import React from "react";
import { Container, Row, Col, Breadcrumb, Table } from "react-bootstrap";
import MathJax from "react-mathjax2";
import Logo from "../logo";
import Navbar from "./navbar";

function inverse_trignometry() {

  const equation_1 = 'y=\\sin^{-1}x\\text{ }is\\text{ }equvelent\\text{ }to\\text{ }x=\\sin y',
    equation_2 = 'y=\\cos^{-1}x\\text{ }is\\text{ }equvelent\\text{ }to\\text{ }x=\\cos y',
    equation_3 = 'y=\\tan^{-1}x\\text{ }is\\text{ }equvelent\\text{ }to\\text{ }x=\\tan y',
    equation_4 = 'y=\\sin^{-1}x',
    equation_5 = '-1\\leq x\\leq1',
    equation_6 = '\\frac{-\\pi}{2}\\leq x\\leq\\frac{\\pi}{2}',
    equation_7 = 'y=\\cos^{-1}x',
    equation_8 = '-1\\leq x\\leq1',
    equation_9 = '0\\leq x\\leq y',
    equation_10 = 'y=\\tan^{-1}x',
    equation_11 = '\\infty\\leq x\\leq-\\infty',
    equation_12 = '\\frac{-\\pi}{2}\\leq x\\leq\\frac{\\pi}{2}',
    equation_13 = 'y=\\cot^{-1}x',
    equation_14 = '\\infty\\leq x\\leq-\\infty',
    equation_15 = '0\\leq x\\leq y',
    equation_16 = 'y=\\sec^{-1}x',
    equation_17 = 'x\\leq-1\\text{ , }x\\geq1',
    equation_18 = '0\\leq x\\leq y\\text{ , }y\\neq\\frac{\\pi}{2}',
    equation_19 = 'y=\\csc^{-1}x',
    equation_20 = 'x\\leq-1\\text{ , }x\\geq1',
    equation_21 = '\\frac{-\\pi}{2}\\leq y\\leq\\frac{\\pi}{2}\\text{ , }y\\neq0',
    equation_22 = '\\sin\\left(\\sin^{-1}x\\right)=x',
    equation_23 = '\\sin^{-1}\\left(\\sin\\left(y\\right)\\right)=y',
    equation_24 = '\\cos\\left(\\cos^{-1}x\\right)=x',
    equation_25 = '\\cos^{-1}\\left(\\cos\\left(y\\right)\\right)=y',
    equation_26 = '\\tan\\left(\\tan^{-1}x\\right)=x',
    equation_27 = '\\tan^{-1}\\left(\\tan\\left(y\\right)\\right)=y',
    equation_28 = '\\sin^{-1}x=\\arcsin\\left(x\\right)',
    equation_29 = '\\cos^{-1}x=\\arccos\\left(x\\right)',
    equation_30 = '\\tan^{-1}x=\\arctan\\left(x\\right)',
    equation_31 = '\\cos^{-1}x=\\frac{\\pi}{2}-sin^{-1}x',
    equation_32 = '\\cot^{-1}x=\\frac{\\pi}{2}-tan^{-1}x',
    equation_33 = '\\csc^{-1}x=\\frac{\\pi}{2}-sec^{-1}x',
    equation_34 = '\\sin^{-1}\\left(-x\\right)=-\\sin^{-1}x',
    equation_35 = '\\cos^{-1}\\left(-x\\right)=\\pi-\\cos^{-1}x',
    equation_36 = '\\tan^{-1}\\left(-x\\right)=-\\tan^{-1}x',
    equation_37 = '\\cot^{-1}\\left(-x\\right)=\\pi-\\cot^{-1}x',
    equation_38 = '\\sec^{-1}\\left(-x\\right)=\\pi-\\sec^{-1}x',
    equation_39 = '\\csc^{-1}\\left(-x\\right)=-\\csc^{-1}x',
    equation_40 = '\\sin^{-1}\\left(\\frac{1}{x}\\right)=\\csc^{-1}x',
    equation_41 = '\\cos^{-1}\\left(\\frac{1}{x}\\right)=\\sec^{-1}x',
    equation_42 = '\\tan^{-1}\\left(\\frac{1}{x}\\right)=\\frac{\\pi}{2}-tan^{-1}x=cot^{-1}x\\text{ }\\text{ }\\text{ }\\left(if\\text{ }x>0\\right)',
    equation_43 = '\\tan^{-1}\\left(\\frac{1}{x}\\right)=-\\frac{\\pi}{2}-tan^{-1}x=-\\pi+cot^{-1}x\\text{ }\\text{ }\\text{ }\\left(if\\text{ }x<0\\right)',
    equation_44 = '\\cot^{-1}\\left(\\frac{1}{x}\\right)=\\frac{\\pi}{2}-cot^{-1}x=\\tan^{-1}x\\text{ }\\text{ }\\text{ }\\left(if\\text{ }x>0\\right)',
    equation_45 = '\\cot^{-1}\\left(\\frac{1}{x}\\right)=-\\frac{\\pi}{2}-cot^{-1}x=-\\pi+tan^{-1}x\\text{ }\\text{ }\\text{ }\\left(if\\text{ }x<0\\right)',
    equation_46 = '\\sec^{-1}\\left(\\frac{1}{x}\\right)=\\cos^{-1}x',
    equation_47 = '\\csc^{-1}\\left(\\frac{1}{x}\\right)=\\sin^{-1}x',
    equation_48 = '\\cot^{-1}\\left(x\\right)=\\sin^{-1}\\left(\\sqrt{1-x^{x}}\\right)\\text{ }\\text{ }\\text{ }\\left(if\\text{ }0\\leq x\\leq0\\right)',
    equation_49 = '\\tan^{-1}x=\\sin^{-1}\\left(\\frac{x}{1+\\sqrt{x^{2}+1}}\\right)',
    equation_50 = '\\sin^{-1}x=2\\tan^{-1}\\left(\\frac{x}{1+\\sqrt{1-x^{2}}}\\right)',
    equation_51 = '\\cos^{-1}x=2\\tan^{-1}\\left(\\frac{\\sqrt{1-x^{2}}}{1+x}\\right)\\text{ }\\text{ }\\text{ }\\left(-1\\leq x\\leq1\\right)',
    equation_52 = '\\tan^{-1}x=2\\tan^{-1}\\left(\\frac{x}{1+\\sqrt{1+x^{2}}}\\right)',
    equation_53 = '\\sin\\left(\\cos^{-1}x\\right)=\\cos\\left(\\sin^{-1}x\\right)=\\sqrt{1-x^{2}}',
    equation_54 = '\\sin\\left(\\tan^{-1}x\\right)=\\frac{x}{\\sqrt{1+x^{2}}}',
    equation_55 = '\\cos\\left(\\tan^{-1}x\\right)=\\frac{x}{\\sqrt{1+x^{2}}}',
    equation_56 = '\\tan\\left(\\sin^{-1}x\\right)=\\frac{x}{\\sqrt{1-x^{2}}}',
    equation_57 = '\\tan\\left(\\cos^{-1}x\\right)=\\frac{\\sqrt{1-x^{2}}}{x}',
    equation_58 = '\\sin\\left(y\\right)=x\\leftrightarrow y=\\sin^{-1}x+2k\\pi\\text{ }\\text{ }\\text{ } or\\text{ }\\text{ }\\text{ }y=\\pi-\\sin^{-1}x+2k\\pi',
    equation_59 = '\\cos\\left(y\\right)=x\\leftrightarrow y=\\cos^{-1}x+2k\\pi\\text{ }\\text{ }\\text{ } or\\text{ }\\text{ }\\text{ }y=\\pi-\\cos^{-1}x+2k\\pi',
    equation_60 = '\\tan\\left(y\\right)=x\\leftrightarrow y=\\tan^{-1}x+k\\pi',
    equation_61 = '\\cot\\left(y\\right)=x\\leftrightarrow y=\\cot^{-1}x+k\\pi',
    equation_62 = '\\sec\\left(y\\right)=x\\leftrightarrow y=\\sec^{-1}x+2k\\pi\\text{ }\\text{ }\\text{ } or\\text{ }\\text{ }\\text{ }y=\\pi-\\sec^{-1}x+2k\\pi',
    equation_63 = '\\csc\\left(y\\right)=x\\leftrightarrow y=\\csc^{-1}x+2k\\pi\\text{ }\\text{ }\\text{ } or\\text{ }\\text{ }\\text{ }y=\\pi-\\csc^{-1}x+2k\\pi';

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
              <Breadcrumb.Item active>Inverse Trignometry</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Navbar />
          </Col>
          <Col sm={9}>
            <div>
              <p className="display-3" style={{ marginTop: "-22px" }}>Inverse Trignometry</p>
              <p className="display-4 text-justify">Definition</p>
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
              <p className="display-4 text-justify">Domain and Range</p>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Function</th>
                    <th>Domain</th>
                    <th>Range</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_4}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_5}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_6}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_7}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_8}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_9}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_10}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_11}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_12}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_13}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_14}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_15}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_16}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_17}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_18}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_19}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td
                    ><MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_20}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_21}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <p className="display-4 text-justify">Domin and Range</p>
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
              <p className="display-4 text-justify">Altrnate Notation</p>
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
              <p className="display-4 text-justify">Complementary Angles</p>
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
              <p className="display-4 text-justify">Negative Arguments</p>
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
              <p className="display-4 text-justify">Reciprocal Arguments</p>
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
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_44}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_45}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_46}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_47}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead">If you only have a fragment of a sine table then:</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_48}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_49}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead">Other Relationships:</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_50}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_51}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_52}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="display-4 text-justify">Relationship between Trigo and Inverse Trigo Functions</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_53}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_54}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_55}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_56}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_57}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="display-4 text-justify">General Solutions</p>
              <p className="lead">Each of the trigonometric functions is periodic in the real part of its argument, running through all its valuse twice in each interval of 2π</p>
              <p className="lead">This periodicity is reflected in the general inverses where k is some integer</p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_58}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_59}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_60}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_61}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_62}</MathJax.Node>
                </MathJax.Context>
              </p>
              <p className="lead__equation text-justify">
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_63}</MathJax.Node>
                </MathJax.Context>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default inverse_trignometry;