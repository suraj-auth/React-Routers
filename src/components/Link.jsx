import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Link = (props) => {
  let a = false;
  if (props.num == 1) a = true;
  else if (props.num == 2) a = false;
  return (
    <>
      {a ? (
        <ul className="sm:flex hidden text-black font-medium text-2xl gap-8 md:gap-16">
          <NavLink
            className={(e) => {
              return e.isActive ? "text-orange-500" : "";
            }}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={(e) => {
              return e.isActive ? "text-orange-500" : "";
            }}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={(e) => {
              return e.isActive ? "text-orange-500" : "";
            }}
            to="/contact"
          >
            Contact
          </NavLink>
        </ul>
      ) : (
        <ul className="flex flex-col text-black font-medium text-2xl mt-18">
          <NavLink
            className={(e) => {
              return e.isActive
                ? "text-white bg-orange-500 border border-black p-2"
                : "border border-black p-2 bg-gray-200";
            }}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={(e) => {
              return e.isActive
                ? "text-white bg-orange-500 border border-black p-2"
                : "border border-black p-2 bg-gray-200";
            }}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={(e) => {
              return e.isActive
                ? "text-white bg-orange-500 border border-black p-2"
                : "border border-black p-2 bg-gray-200";
            }}
            to="/contact"
          >
            Contact
          </NavLink>
        </ul>
      )}
    </>
  );
};

export default Link;
