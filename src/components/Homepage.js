import React from "react";
import { Menu, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Mission from "./LandingPage/Mission";
import Steps from "./LandingPage/ServiceSteps";

const Homepage = () => {
  return (
    <div>
      <div>
        <a href="/unsilenced/c6rkYrwudww">Sample Video and Comments</a>
        <br />
        <a href="/login">Login</a>
        <br />
        <a href="/register">Register</a>
        <br />
        <a href="/dashbord">Dashboard</a>
      </div>

      <div>
        <Mission />
        <Steps />
      </div>
    </div>
  );
};

export default Homepage;
