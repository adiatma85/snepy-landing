import React, { useEffect } from "react";
// import CallToAction from "../components/Landing/CallToAction";
// import Description from "../components/Landing/Description";
// import Footer from "../components/Landing/Footer";
import Header from "../components/Landing/Header";
import Navbar from "../components/Landing/Navbar"
import Video from '../components/Landing/Video'
import { firebaseAnalytics } from "../firebaseConfig";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LandingPage.scss"

function Landing() {
  useEffect(() => {
    firebaseAnalytics.logEvent("homepage_visited");
  });

  return (
    <>
      <Navbar />
      <div className="">
        <Header />
      </div>
      <Video />
    </>
    // <div>
    //   <Navbar />
    //   <Box />
    //   <Header />
    //   {/* <Box />
    //   <Description />
    //   <CallToAction />
    //   <Footer /> */}
    //   <Video />
    // </div>
  );
}

export default Landing;
