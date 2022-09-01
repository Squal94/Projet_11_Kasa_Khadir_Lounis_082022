import React from "react";
import Nav from "../components/Nav";
import { Banner } from "../components/Banner";
import Footer from "../components/Footer";
import { Collapse } from "../components/Collapse";
import items from "../collapses.json";

const About = () => {
  return (
    <div>
      <Nav />
      <main>
        {Banner("", "banner_about")}
        {items.map((item) => {
          return <div key={item.id}>{Collapse(item)}</div>;
        })}
      </main>
      <Footer />
    </div>
  );
};

export default About;
