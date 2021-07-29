import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
function Home() {
  return (
    <div className="home">
      <div>
        <Header />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
