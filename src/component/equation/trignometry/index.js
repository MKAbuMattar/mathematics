import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import Logo from "../logo";

function geometry() {
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
              <Breadcrumb.Item active>Trignometry</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <div>
              <p className="display-3" style={{ marginTop: "-22px" }}>Trignometry</p>
              <p className="display-5"><a className="link" href="/trignometry/trignometry_basics">Trignometry Basics </a></p>
              <p className="lead text-justify"></p>
              <p className="display-5"><a className="link" href="/trignometry/trignometry_graphs">Trignometry Graphs </a></p>
              <p className="lead text-justify"></p>
              <p className="display-5"><a className="link" href="/trignometry/higher_angles">Higher Angles </a></p>
              <p className="lead text-justify"></p>
              <p className="display-5"><a className="link" href="/trignometry/laws_of_yrigonometry">Laws of Trigonometry </a></p>
              <p className="lead text-justify"></p>
              <p className="display-5"><a className="link" href="/trignometry/inverse_trignometry">Inverse Trignometry</a></p>
              <p className="lead text-justify"></p>
              <p className="display-5"><a className="link" href="/trignometry/hyperbolic">Hyperbolic</a></p>
              <p className="lead text-justify"></p>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default geometry;