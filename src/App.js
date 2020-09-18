import React from "react";
import "./App.css";
import Banner from "./Components/Banner";
import Characteristic from "./Components/Characteristic";
import Feature from "./Components/Feature";
import SignUp from "./Components/SignUp";
import Explore from "./Components/Explore";
import Plans from "./Components/Plans";
import Feedback from "./Components/Feedback";
import Trademark from "./Components/Trademark";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="app">
      <Banner />
      <div id="btn-scroll">
        <a href="#section1">
          <img src="https://1503641826.rsc.cdn77.org/Media/ccqnxikprrbwpdcpdtejfkqsw_usermedia.png"></img>
        </a>
      </div>
      <Characteristic />
      <SignUp />
      <Feature />
      <Explore />
      <Plans />
      <Feedback />
      <Trademark />
      <Footer />
    </div>
  );
}

export default App;
