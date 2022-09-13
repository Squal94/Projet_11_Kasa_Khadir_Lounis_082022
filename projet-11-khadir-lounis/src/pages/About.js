import React from "react";
import Nav from "../components/Nav";
import { Banner } from "../components/Banner";
import Footer from "../components/Footer";
import { Collapse } from "../components/Collapse";
import items from "../assets/data/collapses.json";
import { TopPage } from "../components/Util/TopPage";

const About = () => {
  return (
    <div>
      <TopPage />
      <Nav />
      <main>
        {Banner("", "banner_about")}
        {items.map((item) => {
          return (
            <div key={item.id}>
              {Collapse(item, item.id, item.title, item.description)}
            </div>
          );
        })}
      </main>
      <Footer />
    </div>
  );
};

export default About;
