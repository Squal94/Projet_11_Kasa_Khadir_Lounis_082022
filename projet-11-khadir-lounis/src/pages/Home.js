import React from "react";
import { Banner } from "../components/Banner";
//import { useFetch } from "../components/Data";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div>
      <Nav />
      {Banner("Chez vous, partout et ailleurs", "banner")}
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
