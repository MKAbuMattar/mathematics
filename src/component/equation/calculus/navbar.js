import React from "react";
import { Nav } from "react-bootstrap";

function BootstrapNavbar() {
    return (
        <div>
            <Nav className="flex-column nav">
                <Nav.Link href="/calculus/limits">Limits</Nav.Link>
                <Nav.Link href="/calculus/derivatives">Derivatives</Nav.Link>
                <Nav.Link href="/calculus/intgration">Intgration</Nav.Link>
                <Nav.Link href="/calculus/laplace_transform">Laplace Transform</Nav.Link>
                <Nav.Link href="/calculus/differential_equations">Differential Equations</Nav.Link>
            </Nav>
        </div>
    );
}

export default BootstrapNavbar;
