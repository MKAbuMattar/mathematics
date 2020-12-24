import React from "react";
import { Container, Row, Col, Breadcrumb, Table } from "react-bootstrap";
import MathJax from "react-mathjax2";
import Logo from "../logo";
import Navbar from "./navbar";

function laplace_transform() {

  const equation_1 = 'f\\left(t\\right)=L^{-1}\\left\\{F\\left(s\\right)\\right\\}',
    equation_2 = 'F\\left(s\\right)=L\\left\\{f\\left(t\\right)\\right\\}',
    equation_3 = '\\frac{1}{s}',
    equation_4 = 'e^{at}',
    equation_5 = '\\frac{1}{s-a}',
    equation_6 = 't^{n}\\text{ }\\text{ }\\text{ }\\text{ }\\left(n=1,2,3...\\right)',
    equation_7 = '\\frac{n!}{s^{\\left(n+1\\right)}}',
    equation_8 = 't^{p}\\left(p>-1\\right)',
    equation_9 = '\\frac{\\ulcorner\\left(p+1\\right)}{s^{\\left(p+1\\right)}}',
    equation_10 = '\\sqrt{t}',
    equation_11 = '\\frac{\\sqrt{\\pi}}{2\\text{ }s^{\\frac{3}{2}}}',
    equation_12 = 't^{\\frac{n-1}{2}}\\text{ }\\text{ }\\text{ }\\left(n=1,2,3...\\right)',
    equation_13 = '\\frac{1\\times3\\times5...\\left(2n-1\\right)\\sqrt{\\pi}}{2^{n}s^{\\frac{n+1}{2}}}',
    equation_14 = '\\sin\\left(at\\right)',
    equation_15 = '\\frac{a}{s^{2}+a^{2}}',
    equation_16 = '\\cos\\left(at\\right)',
    equation_17 = '\\frac{s}{s^{2}+a^{2}}',
    equation_18 = 't\\text{ }\\sin\\left(at\\right)',
    equation_19 = '\\frac{2as}{\\left(s^{2}+a^{2}\\right)^{2}}',
    equation_20 = 't\\text{ }\\cos\\left(at\\right)',
    equation_21 = '\\frac{s^{2}-a^{2}}{\\left(s^{2}+a^{2}\\right)^{2}}',
    equation_22 = '\\sin\\left(at\\right)-at\\text{ }\\cos\\left(at\\right)',
    equation_23 = '\\frac{2a^{3}}{\\left(s^{2}+a^{2}\\right)^{2}}',
    equation_24 = '\\sin\\left(at\\right)+at\\text{ }\\cos\\left(at\\right)',
    equation_25 = '\\frac{2as^{2}}{\\left(s^{2}+a^{2}\\right)^{2}}',
    equation_26 = '\\cos\\left(at\\right)-at\\text{ }sin\\left(at\\right)',
    equation_27 = '\\frac{s\\left(s^{2}-a^{2}\\right)}{\\left(s^{2}+a^{2}\\right)^{2}}',
    equation_28 = '\\cos\\left(at\\right)+at\\text{ }sin\\left(at\\right)',
    equation_29 = '\\frac{s\\left(s^{2}+3a^{2}\\right)}{\\left(s^{2}+a^{2}\\right)^{2}}',
    equation_30 = '\\sin\\left(at+b\\right)',
    equation_31 = '\\frac{s\\text{ }\\sin\\left(b\\right)+a\\text{ }\\cos\\left(b\\right)}{s^{2}+a^{2}}',
    equation_32 = '\\cos\\left(at+b\\right)',
    equation_33 = '\\frac{s\\text{ }\\cos\\left(b\\right)-a\\text{ }\\sin\\left(b\\right)}{s^{2}+a^{2}}',
    equation_34 = '\\sinh\\left(at\\right)',
    equation_35 = '\\frac{a}{s^{2}-a^{2}}',
    equation_36 = '\\cosh\\left(at\\right)',
    equation_37 = '\\frac{s}{s^{2}-a^{2}}',
    equation_38 = 'e^{at}\\sin\\left(bt\\right)',
    equation_39 = '\\frac{b}{\\left(s-a\\right)^{2}+b}',
    equation_40 = 'e^{at}\\cos\\left(bt\\right)',
    equation_41 = '\\frac{s-a}{\\left(s-a\\right)^{2}+b}',
    equation_42 = 'e^{at}\\sinh\\left(bt\\right)',
    equation_43 = '\\frac{b}{\\left(s-a\\right)^{2}-b}',
    equation_44 = 'e^{at}\\cosh\\left(bt\\right)',
    equation_45 = '\\frac{s-a}{\\left(s-a\\right)^{2}-b}',
    equation_46 = 't^{n}e^{at}\\text{ }\\text{ }\\text{ }\\text{ }\\left(n=1,2,3...\\right)',
    equation_47 = '\\frac{n!}{\\left(s-a\\right)^{\\left(n+1\\right)}}',
    equation_48 = 'f\\left(ct\\right)',
    equation_49 = '\\left(\\frac{1}{c}\\right)F\\left(\\frac{s}{c}\\right)',
    equation_50 = 'u_{c}\\left(t\\right)=u\\left(t-c\\right)',
    equation_51 = '\\frac{e^{-cs}}{s}',
    equation_52 = '\\wp\\left(t-c\\right)',
    equation_53 = 'e^{-cs}',
    equation_54 = '\\text{ }\\cosh\\left(t\\right)=\\frac{e^{t}+e^{-t}}{2}\\text{ }\\text{, }',
    equation_55 = '\\text{ }\\sinh\\left(t\\right)=\\frac{e^{t}+e^{-t}}{2}\\text{ }',
    equation_56 = '\\text{ }\\ulcorner\\left(t\\right)=\\int_{O}^{\\infty} e^{-t}x^{t-1}dx\\text{ }',
    equation_57 = '\\text{ }\\ulcorner\\left(n+1\\right)=n!\\text{ }',
    equation_58 = '\\ulcorner\\left(p+1\\right)=p\\ulcorner\\left(p\\right)p\\left(p+1\\right)\\left(p+1\\right)...\\left(p+n-1\\right)=\\frac{\\ulcorner\\left(p+2\\right)}{\\ulcorner\\left(p\\right)}',
    equation_59 = '\\ulcorner\\left(\\frac{1}{2}\\right)=\\sqrt{\\pi}';

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
              <Breadcrumb.Item href="/calculus/">Calculus</Breadcrumb.Item>
              <Breadcrumb.Item active>Laplace Transform</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Navbar />
          </Col>
          <Col sm={9}>
            <div>
              <p className="display-3" style={{ marginTop: "-22px" }}>Laplace Transform</p>
              <Table responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_1}</MathJax.Node>
                      </MathJax.Context>
                    </th>
                    <th>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_2}</MathJax.Node>
                      </MathJax.Context>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_3}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
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
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_6}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_7}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
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
                    <td>5</td>
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
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_12}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_13}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
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
                    <td>8</td>
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
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_18}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_19}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_20}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_21}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_22}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_23}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_24}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_25}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_26}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_27}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_28}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_29}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_30}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_31}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_32}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_33}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                  </tr>
                  <tr>
                    <td>17</td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_34}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_35}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                  </tr>
                  <tr>
                    <td>18</td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_36}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_37}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                  </tr>
                  <tr>
                    <td>19</td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_38}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_39}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_40}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_41}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                  </tr>
                  <tr>
                    <td>21</td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_42}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_43}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                  </tr>
                  <tr>
                    <td>22</td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_44}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_45}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                  </tr>
                  <tr>
                    <td>23</td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_46}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_47}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                  </tr>
                  <tr>
                    <td>24</td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_48}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_49}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                  </tr>
                  <tr>
                    <td>25</td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_50}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_51}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                  </tr>
                  <tr>
                    <td>26</td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_52}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_53}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <p className="display-4 text-justify">Notes:</p>
              <p className="lead text-justify">
                1. The list is not inclusive and only contauin some of the most commonly used Laplace transforms and Formulase. <br />
                2. deffinition of hyperbolic functions
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_54}</MathJax.Node>
                </MathJax.Context>
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_55}</MathJax.Node>
                </MathJax.Context><br />
                3. Be coreful while using "normal" trigonometric function vs hyperbolic trigonometric function. The only difference in the formaulas is "+a<sup>2</sup>" forthe "normal" trigonometric functions becomes "+a<sup>2</sup>" for the hyperbolic trigonometric functions. <br />
                4. Formula #4 uses Gamma Function which is defined as
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_56}</MathJax.Node>
                </MathJax.Context>
                if n is a positive intrger then,
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_57}</MathJax.Node>
                </MathJax.Context>
                The Gamma function is an extension of the normal factorial function. Here are a couple of quick facts for the Gamma Function <br />
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_58}</MathJax.Node>
                </MathJax.Context><br />
                <MathJax.Context input='tex'>
                  <MathJax.Node inline>{equation_59}</MathJax.Node>
                </MathJax.Context>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default laplace_transform;