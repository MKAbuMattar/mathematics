import React from "react";
import { Nav } from "react-bootstrap";

function BootstrapNavbar() {
    return (
        <div className="nav_hidden">
            <Nav className="flex-column nav">
                <Nav.Link href="/mathematics/calculus/limits">Limits</Nav.Link>
                <Nav.Link href="/mathematics/calculus/derivatives">Derivatives</Nav.Link>
                <Nav.Link href="/mathematics/calculus/intgration">Intgration</Nav.Link>
                <Nav.Link href="/mathematics/calculus/laplace_transform">Laplace Transform</Nav.Link>
                <Nav.Link href="/mathematics/calculus/differential_equations">Differential Equations</Nav.Link>
            </Nav>
        </div>
    );
}

export default BootstrapNavbar;
