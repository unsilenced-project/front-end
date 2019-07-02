import React from "react";
import { Menu, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Mission from "./LandingPage/Mission";
import Steps from "./LandingPage/ServiceSteps";
import UserTestimonials from "./LandingPage/UserTestimonials";
import Navigation from "./Navigation/Navigation";

const Homepage = () => {
  return (
    <div>
      <div style={{ marginTop: 70 }}>
        <a href="/unsilenced/c6rkYrwudww">Sample Video and Comments</a>
        <br />
        <a href="/login">Login</a>
        <br />
        <a href="/register">Register</a>
        <br />
        <a href="/dashbord">Dashboard</a>
      </div>

      <div>
        <Navigation />
        <Mission />
        <Steps />
        <UserTestimonials />
      </div>
    </div>
  );
};

export default Homepage;
