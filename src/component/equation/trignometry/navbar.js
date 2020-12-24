import React from "react";
import { Nav } from "react-bootstrap";

function BootstrapNavbar() {
    return (
        <div className="nav_hidden">
            <Nav className="flex-column nav">
                <Nav.Link href="/mathematics/trignometry/trignometry_basics">Trignometry Basics</Nav.Link>
                <Nav.Link href="/mathematics/trignometry/trignometry_graphs">Trignometry Graphs</Nav.Link>
                <Nav.Link href="/mathematics/trignometry/higher_angles">Higher Angles</Nav.Link>
                <Nav.Link href="/mathematics/trignometry/laws_of_yrigonometry">Laws of Trigonometry</Nav.Link>
                <Nav.Link href="/mathematics/trignometry/inverse_trignometry">Inverse Trignometry</Nav.Link>
                <Nav.Link href="/mathematics/trignometry/hyperbolic">Hyperbolic</Nav.Link>
            </Nav>
        </div>
    );
}

export default BootstrapNavbar;
