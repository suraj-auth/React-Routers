import React, { useRef, useState } from "react";
import ham from "../assets/ham.svg";
import Link from "./Link";
const Nav = () => {
  const [trigger, setTrigger] = useState(false);
  const ref1 = useRef();
  const ref2 = useRef();
  function mover1() {
    ref2.current.classList.remove("bg-orange-600", "text-white");
    ref1.current.classList.add("bg-orange-600", "text-white");
  }
  function mover2() {
    ref1.current.classList.remove("bg-orange-600", "text-white");
    ref2.current.classList.add("bg-orange-600", "text-white");
  }
  return (
    <>
      <div className="flex border h-1.5/10 w-full items-center justify-between px-8 md:px-16 xs:sticky fixed top-0 bg-white">
        <h1 className="text-black text-4xl font-bold cursor-pointer">
          Play<span className="text-orange-600">Hub</span>
        </h1>
        <Link num={1} />
        <div className="hidden gap-5 lg:flex">
          <button
            ref={ref1}
            className="text-xl font-medium  p-3 rounded-2xl transition-all"
            onClick={mover1}
          >
            Log in
          </button>
          <button
            ref={ref2}
            className="transition-all text-xl font-medium p-3 rounded-2xl bg-orange-600 text-white"
            onClick={mover2}
          >
            Get started
          </button>
        </div>
        <img
          onClick={() => {
            setTrigger(true);
          }}
          className="sm:hidden block h-8"
          src={ham}
          alt="ham icon"
        />
      </div>
      {trigger && <Link num={2} />}
    </>
  );
};

export default Nav;
