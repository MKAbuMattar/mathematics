import React from "react";
import { Nav } from "react-bootstrap";

function BootstrapNavbar() {
    return (
        <div className="nav_hidden">
            <Nav className="flex-column nav">
                <Nav.Link href="/mathematics/basics/powers">Powers</Nav.Link>
                <Nav.Link href="/mathematics/basics/radicals">Radicals</Nav.Link>
                <Nav.Link href="/mathematics/basics/logarithms">Logarithms</Nav.Link>
                <Nav.Link href="/mathematics/basics/quadratic_equations">Quadratic Equations</Nav.Link>
                <Nav.Link href="/mathematics/basics/polynomials">Polynomials</Nav.Link>
                <Nav.Link href="/mathematics/basics/progression">Progression</Nav.Link>
                <Nav.Link href="/mathematics/basics/complex_number">Complex Number</Nav.Link>
                <Nav.Link href="/mathematics/basics/vectors">Vectors</Nav.Link>
                <Nav.Link href="/mathematics/basics/probability">Probability</Nav.Link>
            </Nav>
        </div>
    );
}

export default BootstrapNavbar;
