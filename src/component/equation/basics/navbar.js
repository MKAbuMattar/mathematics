import React from "react";
import { Nav } from "react-bootstrap";

function BootstrapNavbar() {
    return (
        <div>
            <Nav className="flex-column nav">
                <Nav.Link href="/basics/powers">Powers</Nav.Link>
                <Nav.Link href="/basics/radicals">Radicals</Nav.Link>
                <Nav.Link href="/basics/logarithms">Logarithms</Nav.Link>
                <Nav.Link href="/basics/quadratic_equations">Quadratic Equations</Nav.Link>
                <Nav.Link href="/basics/polynomials">Polynomials</Nav.Link>
                <Nav.Link href="/basics/progression">Progression</Nav.Link>
                <Nav.Link href="/basics/complex_number">Complex Number</Nav.Link>
                <Nav.Link href="/basics/vectors">Vectors</Nav.Link>
                <Nav.Link href="/basics/probability">Probability</Nav.Link>
            </Nav>
        </div>
    );
}

export default BootstrapNavbar;
