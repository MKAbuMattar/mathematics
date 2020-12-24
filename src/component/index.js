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
import page404 from "./404";
import "./assets/css/style.css";

function index() {

  let header, nav, footer;

  if ((window.location.pathname === '/') || (window.location.pathname === '/mathematics')) {
    header = <Header />;
  }

  if ((window.location.pathname === '/') ||
    (window.location.pathname === '/mathematics') ||
    (window.location.pathname === '/mathematics/') ||
    (window.location.pathname === '/mathematics/basics') ||
    (window.location.pathname === '/mathematics/basics/') ||
    (window.location.pathname === '/mathematics/basics/powers') ||
    (window.location.pathname === '/mathematics/basics/powers/') ||
    (window.location.pathname === '/mathematics/basics/radicals') ||
    (window.location.pathname === '/mathematics/basics/radicals/') ||
    (window.location.pathname === '/mathematics/basics/logarithms') ||
    (window.location.pathname === '/mathematics/basics/logarithms/') ||
    (window.location.pathname === '/mathematics/basics/quadratic_equations') ||
    (window.location.pathname === '/mathematics/basics/quadratic_equations/') ||
    (window.location.pathname === '/mathematics/basics/polynomials') ||
    (window.location.pathname === '/mathematics/basics/polynomials/') ||
    (window.location.pathname === '/mathematics/basics/progression') ||
    (window.location.pathname === '/mathematics/basics/progression/') ||
    (window.location.pathname === '/mathematics/basics/complex_number') ||
    (window.location.pathname === '/mathematics/basics/complex_number/') ||
    (window.location.pathname === '/mathematics/basics/vectors') ||
    (window.location.pathname === '/mathematics/basics/vectors/') ||
    (window.location.pathname === '/mathematics/basics/probability') ||
    (window.location.pathname === '/mathematics/basics/probability/') ||
    (window.location.pathname === '/mathematics/geometry') ||
    (window.location.pathname === '/mathematics/geometry/') ||
    (window.location.pathname === '/mathematics/geometry/area') ||
    (window.location.pathname === '/mathematics/geometry/area/') ||
    (window.location.pathname === '/mathematics/geometry/perimeter') ||
    (window.location.pathname === '/mathematics/geometry/perimeter/') ||
    (window.location.pathname === '/mathematics/geometry/surface_area') ||
    (window.location.pathname === '/mathematics/geometry/surface_area/') ||
    (window.location.pathname === '/mathematics/geometry/volume') ||
    (window.location.pathname === '/mathematics/geometry/volume/') ||
    (window.location.pathname === '/mathematics/geometry/lateral_area') ||
    (window.location.pathname === '/mathematics/geometry/lateral_area/') ||
    (window.location.pathname === '/mathematics/coordinate_geomery') ||
    (window.location.pathname === '/mathematics/coordinate_geomery/') ||
    (window.location.pathname === '/mathematics/coordinate_geomery/coordinate_geomery_basics') ||
    (window.location.pathname === '/mathematics/coordinate_geomery/coordinate_geomery_basics/') ||
    (window.location.pathname === '/mathematics/coordinate_geomery/circle') ||
    (window.location.pathname === '/mathematics/coordinate_geomery/circle/') ||
    (window.location.pathname === '/mathematics/coordinate_geomery/parabola') ||
    (window.location.pathname === '/mathematics/mathematics/coordinate_geomery/parabola/') ||
    (window.location.pathname === '/mathematics/coordinate_geomery/ellipse') ||
    (window.location.pathname === '/mathematics/coordinate_geomery/ellipse/') ||
    (window.location.pathname === '/mathematics/coordinate_geomery/hyperbola') ||
    (window.location.pathname === '/mathematics/coordinate_geomery/hyperbola/') ||
    (window.location.pathname === '/mathematics/trignometry') ||
    (window.location.pathname === '/mathematics/trignometry/') ||
    (window.location.pathname === '/mathematics/trignometry/trignometry_basics') ||
    (window.location.pathname === '/mathematics/trignometry/trignometry_basics/') ||
    (window.location.pathname === '/mathematics/trignometry/trignometry_graphs') ||
    (window.location.pathname === '/mathematics/trignometry/trignometry_graphs/') ||
    (window.location.pathname === '/mathematics/trignometry/higher_angles') ||
    (window.location.pathname === '/mathematics/trignometry/higher_angles/') ||
    (window.location.pathname === '/mathematics/trignometry/laws_of_yrigonometry') ||
    (window.location.pathname === '/mathematics/trignometry/laws_of_yrigonometry/') ||
    (window.location.pathname === '/mathematics/trignometry/inverse_trignometry') ||
    (window.location.pathname === '/mathematics/trignometry/inverse_trignometry/') ||
    (window.location.pathname === '/mathematics/trignometry/hyperbolic') ||
    (window.location.pathname === '/mathematics/trignometry/hyperbolic/') ||
    (window.location.pathname === '/mathematics/calculus') ||
    (window.location.pathname === '/mathematics/calculus/') ||
    (window.location.pathname === '/mathematics/calculus/limits') ||
    (window.location.pathname === '/mathematics/calculus/limits/') ||
    (window.location.pathname === '/mathematics/calculus/derivatives') ||
    (window.location.pathname === '/mathematics/calculus/derivatives/') ||
    (window.location.pathname === '/mathematics/calculus/intgration') ||
    (window.location.pathname === '/mathematics/calculus/intgration/') ||
    (window.location.pathname === '/mathematics/calculus/laplace_transform') ||
    (window.location.pathname === '/mathematics/calculus/laplace_transform/') ||
    (window.location.pathname === '/mathematics/calculus/differential_equations') ||
    (window.location.pathname === '/mathematics/calculus/differential_equations/') ||
    (window.location.pathname === '/mathematics/about') ||
    (window.location.pathname === '/mathematics/about/') ||
    (window.location.pathname === '/mathematics/privacy_policy') ||
    (window.location.pathname === '/mathematics/privacy_policy/')) {
    nav = <Nav />;
    footer = <Footer />;
  }

  return (
    <Router>
      <div id="top">
        {header}
        {nav}
        <Switch>
          <Route path="/mathematics" exact component={home} />
          <Route path="/mathematics/basics" exact component={basics} />
          <Route path="/mathematics/basics/powers" exact component={powers} />
          <Route path="/mathematics/basics/radicals" exact component={radicals} />
          <Route path="/mathematics/basics/logarithms" exact component={logarithms} />
          <Route path="/mathematics/basics/quadratic_equations" exact component={quadratic_equations} />
          <Route path="/mathematics/basics/polynomials" exact component={polynomials} />
          <Route path="/mathematics/basics/progression" exact component={progression} />
          <Route path="/mathematics/basics/complex_number" exact component={complex_number} />
          <Route path="/mathematics/basics/vectors" exact component={vectors} />
          <Route path="/mathematics/basics/probability" exact component={probability} />
          <Route path="/mathematics/geometry" exact component={geometry} />
          <Route path="/mathematics/geometry/area" exact component={area} />
          <Route path="/mathematics/geometry/perimeter" exact component={perimeter} />
          <Route path="/mathematics/geometry/surface_area" exact component={surface_area} />
          <Route path="/mathematics/geometry/volume" exact component={volume} />
          <Route path="/mathematics/geometry/lateral_area" exact component={lateral_area} />
          <Route path="/mathematics/coordinate_geomery" exact component={coordinate_geomery} />
          <Route path="/mathematics/coordinate_geomery/coordinate_geomery_basics" exact component={coordinate_geomery_basics} />
          <Route path="/mathematics/coordinate_geomery/circle" exact component={circle} />
          <Route path="/mathematics/coordinate_geomery/parabola" exact component={parabola} />
          <Route path="/mathematics/coordinate_geomery/ellipse" exact component={ellipse} />
          <Route path="/mathematics/coordinate_geomery/hyperbola" exact component={hyperbola} />
          <Route path="/mathematics/trignometry" exact component={trignometry} />
          <Route path="/mathematics/trignometry/trignometry_basics" exact component={trignometry_basics} />
          <Route path="/mathematics/trignometry/trignometry_graphs" exact component={trignometry_graphs} />
          <Route path="/mathematics/trignometry/higher_angles" exact component={higher_angles} />
          <Route path="/mathematics/trignometry/laws_of_yrigonometry" exact component={laws_of_yrigonometry} />
          <Route path="/mathematics/trignometry/inverse_trignometry" exact component={inverse_trignometry} />
          <Route path="/mathematics/trignometry/hyperbolic" exact component={hyperbolic} />
          <Route path="/mathematics/calculus" exact component={calculus} />
          <Route path="/mathematics/calculus/limits" exact component={limits} />
          <Route path="/mathematics/calculus/derivatives" exact component={derivatives} />
          <Route path="/mathematics/calculus/intgration" exact component={intgration} />
          <Route path="/mathematics/calculus/laplace_transform" exact component={laplace_transform} />
          <Route path="/mathematics/calculus/differential_equations" exact component={differential_equations} />
          <Route path="/mathematics/about" exact component={about} />
          <Route path="/mathematics/privacy_policy" exact component={privacy_policy} />
          <Route path="/mathematics/*" component={page404} />
        </Switch>
        {footer}
      </div>
    </Router >
  );
}

export default index;
