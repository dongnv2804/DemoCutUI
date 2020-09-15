import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Section1 from "./Components/Section1/Section1";
import Section2 from "./Components/Section2/Section2";
import Section3 from "./Components/Section3/Section3";
function App() {
  return (
    <div className="app">
      <Banner />
      <div id="btn-scroll">
        <a>
          <img src="https://1503641826.rsc.cdn77.org/Media/ccqnxikprrbwpdcpdtejfkqsw_usermedia.png"></img>
        </a>
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

export default App;
