import React from "react";
import Nav from "./components/Nav";
import house from "./assets/house.png";
const About = () => {
  return (
    <div className="h-full w-full">
      <Nav />
      <div className="min-h-110 border w-full flex items-center justify-center gap-2 sm:gap-10 lg:gap-40 sm:flex-row flex-col sm:pt-0 sm:pb-0 pb-10 pt-20">
        <img className="xs:h-80 h-60" src={house} alt="" />
        <div className=" w-3/6">
          <h1 className="text-3xl xs:text-5xl font-bold text-blue-950 mb-12 text-wrap">
            React Development is carried out by passionate Developers
          </h1>
          <h3 className="text-xl font-bold text-gray-800 text-wrap">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
            voluptatem quaerat quae illum alias numquam dolor dolores quas culpa
            a.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
