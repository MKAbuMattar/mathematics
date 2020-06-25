import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import Logo from "../logo";

function coordinate_geomery() {
  return (
    <div style={{ marginTop: "90px" }}>
      <Container fluid="md">
        <Row>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item href="/">
                <Logo />
                Mathematics
                </Breadcrumb.Item>
              <Breadcrumb.Item active>Coordinate Geomery</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col sm={9}>
            <div>
              <p className="display-3" style={{ marginTop: "-22px" }}>Coordinate Geomery</p>
              <p className="display-5"><a className="link" href="/coordinate_geomery/coordinate_geomery_basics">Coordinate Geomery Basics </a></p>
              <p className="lead text-justify"></p>
              <p className="display-5"><a className="link" href="/coordinate_geomery/circle">Circle </a></p>
              <p className="lead text-justify"></p>
              <p className="display-5"><a className="link" href="/coordinate_geomery/parabola">Parabola </a></p>
              <p className="lead text-justify"></p>
              <p className="display-5"><a className="link" href="/coordinate_geomery/ellipse">Ellipse </a></p>
              <p className="lead text-justify"></p>
              <p className="display-5"><a className="link" href="/coordinate_geomery/hyperbola">Hyperbola</a></p>
              <p className="lead text-justify"></p>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default coordinate_geomery;