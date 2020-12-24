import React from "react";
import { Nav } from "react-bootstrap";

function BootstrapNavbar() {
    return (
        <div className="nav_hidden">
            <Nav className="flex-column nav">
                <Nav.Link href="/geometry/area">Area</Nav.Link>
                <Nav.Link href="/geometry/perimeter">Perimeter</Nav.Link>
                <Nav.Link href="/geometry/surface_area">Surface Area</Nav.Link>
                <Nav.Link href="/geometry/volume">Volume</Nav.Link>
                <Nav.Link href="/geometry/lateral_area">Lateral Area</Nav.Link>
            </Nav>
        </div>
    );
}

export default BootstrapNavbar;
