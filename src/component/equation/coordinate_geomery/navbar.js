import React from "react";
import { Nav } from "react-bootstrap";

function BootstrapNavbar() {
    return (
        <div>
            <Nav className="flex-column nav">
                <Nav.Link href="/coordinate_geomery/coordinate_geomery_basics">Coordinate Geomery Basics</Nav.Link>
                <Nav.Link href="/coordinate_geomery/circle">Circle</Nav.Link>
                <Nav.Link href="/coordinate_geomery/parabola">Parabola</Nav.Link>
                <Nav.Link href="/coordinate_geomery/ellipse">Ellipse</Nav.Link>
                <Nav.Link href="/coordinate_geomery/hyperbola">Hyperbola</Nav.Link>
            </Nav>
        </div>
    );
}

export default BootstrapNavbar;
