import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Body from "../Body/Body";
function Home() {
  return (
    <div className="home">
      <div>
        <Header />
      </div>
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
