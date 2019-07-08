import React from "react";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Mission from "./LandingPage/Mission";
import AboutPage from "./About/About";
// import UserTestimonials from "./LandingPage/UserTestimonials";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";

const Homepage = props => {
  // if (localStorage.getItem("token")) props.history.push("/dashboard");
  return (
    <div>
      <section style={{ marginTop: 80 }}>
        <Navigation />
        <Mission />
        {/* <Steps />
        <UserTestimonials /> */}
        <AboutPage />
        <Footer />
      </section>
    </div>
  );
};

export default withRouter(Homepage);
