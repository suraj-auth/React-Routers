import React from "react";
import Nav from "./components/Nav";
import compimg from "./assets/3d-comp-photo.png";
import person from "./assets/3d-photo.png";
const Home = () => {
  return (
    <div className="h-full w-full">
      <Nav />
      <div className="border min-h-96 w-full">
        <div className="min-h-110 border w-full flex items-center justify-center gap-20 sm:gap-10 lg:gap-60 sm:flex-row flex-col">
          <img className="xs:h-64 h-40" src={compimg} alt="" />
          <div>
            <h1 className="text-3xl xs:text-5xl font-bold text-orange-500">
              Download Now
            </h1>
            <h3 className="text-2xl xs:text-4xl text-right font-bold">
              Lorem Ipsum
            </h3>
          </div>
        </div>
        <div className="min-h-110 w-full border flex items-center justify-center gap-10 flex-col">
          <img className="xs:h-64 h-40" src={person} alt="" />
          <div>
            <h1 className="text-3xl xs:text-5xl font-bold text-lime-600">
              Coding is Fun
            </h1>
            <h3 className="text-2xl xs:text-4xl text-right font-bold text-yellow-900">
              When you understand it
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
