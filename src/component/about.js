import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import Logo from "./equation/logo";

function about() {
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
              <Breadcrumb.Item active>About</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <div>
              <p className="display-3" style={{ marginTop: "-22px" }}>About</p>
              <p className="lead text-justify"></p>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default about;