import React from "react";
import { Container, Row, Col, Breadcrumb, Table } from "react-bootstrap";
import MathJax from "react-mathjax2";
import Logo from "../logo";
import Navbar from "./navbar";
import UnitCircle from "../../assets/img/unit-circle-chart.svg"

function trignometry_graphs() {

  const equation_1 = '\\sin\\theta',
    equation_2 = '\\frac{1}{2}',
    equation_3 = '\\frac{\\sqrt{2}}{2}',
    equation_4 = '\\frac{\\sqrt{3}}{2}',
    equation_5 = '\\cos\\theta',
    equation_6 = '\\tan\\theta',
    equation_7 = '\\frac{\\sqrt{3}}{3}',
    equation_8 = '\\sqrt{3}',
    equation_9 = '\\theta';

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
              <Breadcrumb.Item href="/trignometry/">Basics</Breadcrumb.Item>
              <Breadcrumb.Item active>Trignometry Graphs</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Navbar />
          </Col>
          <Col sm={9}>
            <div>
              <p className="display-3" style={{ marginTop: "-22px" }}>Trignometry Graphs</p>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Angle</th>
                    <th>0</th>
                    <th>30</th>
                    <th>45</th>
                    <th>60</th>
                    <th>90</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_1}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>0</td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_2}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_3}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_4}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_5}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>1</td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_4}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_3}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_2}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_6}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>0</td>
                    <td>
                      <MathJax.Context input='tex'>
                        <MathJax.Node inline>{equation_7}</MathJax.Node>
                      </MathJax.Context>
                    </td>
                    <td>1</td>
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
                </tbody>
              </Table>
              <p className="display-4 text-justify">Unit Circle</p>
              <img src={UnitCircle} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default trignometry_graphs;