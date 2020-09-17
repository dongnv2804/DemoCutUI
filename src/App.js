import React from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Section1 from "./Components/Section1/Section1";
import Section2 from "./Components/Section2/Section2";
import Section3 from "./Components/Section3/Section3";
import Section4 from "./Components/Section4/Section4";
import Section5 from "./Components/Section5/Section5";
import Section6 from "./Components/Section6/Section6";
import Section7 from "./Components/Section7/Section7";
import Footer1 from "./Components/Footer/Footer1";
import Footer2 from "./Components/Footer/Footer2";
function App() {
  return (
    <div className="app">
      <Banner />
      <div id="btn-scroll">
        <a href="#section1">
          <img src="https://1503641826.rsc.cdn77.org/Media/ccqnxikprrbwpdcpdtejfkqsw_usermedia.png"></img>
        </a>
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Footer1 />
      <Footer2 />
    </div>
  );
}

export default App;
