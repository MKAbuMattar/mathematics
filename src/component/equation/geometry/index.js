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
              <Breadcrumb.Item href="/mathematics/">
                <Logo />
                Mathematics
                </Breadcrumb.Item>
              <Breadcrumb.Item active>Geometry</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <div>
              <p className="display-3" style={{ marginTop: "-22px" }}>Geometry</p>
              <p className="display-5"><a className="link" href="/mathematics/geometry/area">Area </a></p>
              <p className="lead text-justify"></p>
              <p className="display-5"><a className="link" href="/mathematics/geometry/perimeter">Perimeter </a></p>
              <p className="lead text-justify"></p>
              <p className="display-5"><a className="link" href="/mathematics/geometry/surface_area">Surface Area </a></p>
              <p className="lead text-justify"></p>
              <p className="display-5"><a className="link" href="/mathematics/geometry/volume">Volume </a></p>
              <p className="lead text-justify"></p>
              <p className="display-5"><a className="link" href="/mathematics/geometry/lateral_area">Lateral Area</a></p>
              <p className="lead text-justify"></p>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default geometry;