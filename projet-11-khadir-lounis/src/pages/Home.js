import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div>
      <Nav />
      <Banner />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
