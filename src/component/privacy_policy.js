import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import Logo from "./equation/logo";

function privacy_policy() {
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
              <Breadcrumb.Item active>Privacy Policy</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <div>
              <p className="display-3" style={{ marginTop: "-22px" }}>Privacy Policy</p>
              <p className="lead text-justify">In-process, coming soon</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default privacy_policy;