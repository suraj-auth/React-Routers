import React from "react";
import Nav from "./components/Nav";
const Contact = () => {
  return (
    <div className="h-full w-full">
      <Nav />
      <div className="min-h-110 border w-full flex items-center justify-center gap-20 sm:flex-row flex-col pt-52 pb-10 sm:pt-0 sm:pb-0">
        <div className="bg-gray-100 rounded-2xl flex flex-col items-start justify-center sm:h-60 h-52 w-64 sm:w-80 pl-6">
          <h1 className="text-3xl font-bold">Get in touch:</h1>
          <h3 className=" text-slate-500">
            Fill in the form to start a conversation
          </h3>
        </div>
        <div className="flex flex-col gap-5 sm:h-60 h-52 w-64 sm:w-80 justify-center">
          <input
            className="h-10 sm:w-72 w-60 pl-3 border-2 border-gray-400 rounded-lg"
            type="text"
            placeholder="Full Name"
          />
          <input
            className="h-10 sm:w-72 w-60 pl-3 border-2 border-gray-400 rounded-lg"
            type="text"
            placeholder="Email"
          />
          <input
            className="h-10 sm:w-72 w-60 pl-3 border-2 border-gray-400 rounded-lg"
            type="text"
            placeholder="Telephone Number"
          />
          <button className=" text-white bg-orange-600 font-medium h-10 w-20 rounded-2xl">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
