import React from "react";
import { Nav } from "react-bootstrap";

function BootstrapNavbar() {
    return (
        <div>
            <Nav className="flex-column nav">
                <Nav.Link href="/trignometry/trignometry_basics">Trignometry Basics</Nav.Link>
                <Nav.Link href="/trignometry/trignometry_graphs">Trignometry Graphs</Nav.Link>
                <Nav.Link href="/trignometry/higher_angles">Higher Angles</Nav.Link>
                <Nav.Link href="/trignometry/laws_of_yrigonometry">Laws of Trigonometry</Nav.Link>
                <Nav.Link href="/trignometry/inverse_trignometry">Inverse Trignometry</Nav.Link>
                <Nav.Link href="/trignometry/hyperbolic">Hyperbolic</Nav.Link>
            </Nav>
        </div>
    );
}

export default BootstrapNavbar;
