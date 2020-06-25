import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./header";
import Nav from "./navbar";
import home from "./home";
import basics from "./equation/basics";
import powers from "./equation/basics/powers";
import radicals from "./equation/basics/radicals";
import logarithms from "./equation/basics/logarithms";
import quadratic_equations from "./equation/basics/quadratic_equations";
import polynomials from "./equation/basics/polynomials";
import progression from "./equation/basics/progression";
import complex_number from "./equation/basics/complex_number";
import vectors from "./equation/basics/vectors";
import probability from "./equation/basics/probability";
import geometry from "./equation/geometry";
import area from "./equation/geometry/area";
import perimeter from "./equation/geometry/perimeter";
import surface_area from "./equation/geometry/surface_area";
import volume from "./equation/geometry/volume";
import lateral_area from "./equation/geometry/lateral_area";
import coordinate_geomery from "./equation/coordinate_geomery";
import coordinate_geomery_basics from "./equation/coordinate_geomery/coordinate_geomery";
import circle from "./equation/coordinate_geomery/circle";
import parabola from "./equation/coordinate_geomery/parabola";
import ellipse from "./equation/coordinate_geomery/ellipse";
import hyperbola from "./equation/coordinate_geomery/hyperbola";
import trignometry from "./equation/trignometry";
import trignometry_basics from "./equation/trignometry/trignometry_basics";
import trignometry_graphs from "./equation/trignometry/trignometry_graphs";
import higher_angles from "./equation/trignometry/higher_angles";
import laws_of_yrigonometry from "./equation/trignometry/laws_of_yrigonometry";
import inverse_trignometry from "./equation/trignometry/inverse_trignometry";
import hyperbolic from "./equation/trignometry/hyperbolic";
import calculus from "./equation/calculus";
import limits from "./equation/calculus/limits";
import derivatives from "./equation/calculus/derivatives";
import intgration from "./equation/calculus/intgration";
import laplace_transform from "./equation/calculus/laplace_transform";
import differential_equations from "./equation/calculus/differential_equations";
import about from "./about";
import privacy_policy from "./privacy_policy";
import Footer from "./footer";
import "./assets/css/style.css";

function index() {
  console.log();

  var header;
  if ((window.location.pathname === '/') ||
    (window.location.pathname === '/about/') ||
    (window.location.pathname === '/privacy_policy/')) {
    header = <Header />;
  }

  return (
    <Router>
      <div id="top">

        {header}
        <Nav />
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/basics" exact component={basics} />
          <Route path="/basics/powers" exact component={powers} />
          <Route path="/basics/radicals" exact component={radicals} />
          <Route path="/basics/logarithms" exact component={logarithms} />
          <Route path="/basics/quadratic_equations" exact component={quadratic_equations} />
          <Route path="/basics/polynomials" exact component={polynomials} />
          <Route path="/basics/progression" exact component={progression} />
          <Route path="/basics/complex_number" exact component={complex_number} />
          <Route path="/basics/vectors" exact component={vectors} />
          <Route path="/basics/probability" exact component={probability} />
          <Route path="/geometry" exact component={geometry} />
          <Route path="/geometry/area" exact component={area} />
          <Route path="/geometry/perimeter" exact component={perimeter} />
          <Route path="/geometry/surface_area" exact component={surface_area} />
          <Route path="/geometry/volume" exact component={volume} />
          <Route path="/geometry/lateral_area" exact component={lateral_area} />
          <Route path="/coordinate_geomery" exact component={coordinate_geomery} />
          <Route path="/coordinate_geomery/coordinate_geomery_basics" exact component={coordinate_geomery_basics} />
          <Route path="/coordinate_geomery/circle" exact component={circle} />
          <Route path="/coordinate_geomery/parabola" exact component={parabola} />
          <Route path="/coordinate_geomery/ellipse" exact component={ellipse} />
          <Route path="/coordinate_geomery/hyperbola" exact component={hyperbola} />
          <Route path="/trignometry" exact component={trignometry} />
          <Route path="/trignometry/trignometry_basics" exact component={trignometry_basics} />
          <Route path="/trignometry/trignometry_graphs" exact component={trignometry_graphs} />
          <Route path="/trignometry/higher_angles" exact component={higher_angles} />
          <Route path="/trignometry/laws_of_yrigonometry" exact component={laws_of_yrigonometry} />
          <Route path="/trignometry/inverse_trignometry" exact component={inverse_trignometry} />
          <Route path="/trignometry/hyperbolic" exact component={hyperbolic} />
          <Route path="/calculus" exact component={calculus} />
          <Route path="/calculus/limits" exact component={limits} />
          <Route path="/calculus/derivatives" exact component={derivatives} />
          <Route path="/calculus/intgration" exact component={intgration} />
          <Route path="/calculus/laplace_transform" exact component={laplace_transform} />
          <Route path="/calculus/differential_equations" exact component={differential_equations} />
          <Route path="/about" exact component={about} />
          <Route path="/privacy_policy" exact component={privacy_policy} />
        </Switch>
        <Footer />
      </div>
    </Router >
  );
}

export default index;
