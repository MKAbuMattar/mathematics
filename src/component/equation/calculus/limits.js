import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import Logo from "../logo";
import Navbar from "./navbar";

function limits() {
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
              <Breadcrumb.Item active>Limits</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Navbar />
          </Col>
          <Col sm={9}>
            <div>
              <p className="display-3" style={{ marginTop: "-22px" }}>Limits</p>
              <p className="lead text-justify"></p>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default limits;