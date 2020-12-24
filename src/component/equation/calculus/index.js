import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import Logo from "../logo";

function calculus() {
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
              <Breadcrumb.Item active>Calculus</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <div>
              <p className="display-3" style={{ marginTop: "-22px" }}>Calculus</p>
              <p className="display-5"><a className="link" href="/mathematics/calculus/limits">Limits </a></p>
              <p className="lead text-justify"></p>
              <p className="display-5"><a className="link" href="/mathematics/calculus/derivatives">Derivatives </a></p>
              <p className="lead text-justify"></p>
              <p className="display-5"><a className="link" href="/mathematics/calculus/intgration">Intgration </a></p>
              <p className="lead text-justify"></p>
              <p className="display-5"><a className="link" href="/mathematics/calculus/laplace_transform">Laplace Transform </a></p>
              <p className="lead text-justify"></p>
              <p className="display-5"><a className="link" href="/mathematics/calculus/differential_equations">Differential Equations </a></p>
              <p className="lead text-justify"></p>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default calculus;