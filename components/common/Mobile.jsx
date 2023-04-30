import React from "react";
import { HeaderCrossIcons } from "../component/common/Icons";

const Mobile = ({ activeNavOverlay, setActiveNavOverlay }) => {
  return (
    <>
      <div
        className={`fixed lg:hidden bg-blue top-0 h-full flex flex-col justify-center transition-all duration-200 ease-in items-center z-[41] w-full ${
          activeNavOverlay ? "left-0" : "-left-full"
        }`}
      >
        <ul className="text-center" data-aos="fade-up">
          <li>
            <a
              href="#home"
              onClick={() => setActiveNavOverlay(false)}
              className=" text-white text-[20px] md:text-md ff_inter font-normal transition duration-500 ease-in-out hover:text-red"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li className="py-5">
            <a
              href="#about"
              onClick={() => setActiveNavOverlay(false)}
              className="text-white text-[20px] md:text-md ff_inter font-normal transition duration-500 ease-in-out hover:text-red"
              aria-current="page"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={() => setActiveNavOverlay(false)}
              className=" text-white text-[20px] md:text-md ff_inter font-normal transition duration-500 ease-in-out hover:text-red"
              aria-current="page"
            >
              Services
            </a>
          </li>
          <li className="py-5">
            <a
              href="#blog"
              onClick={() => setActiveNavOverlay(false)}
              className=" text-white text-[20px] md:text-md ff_inter font-normal transition duration-500 ease-in-out hover:text-red"
              aria-current="page"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#events"
              onClick={() => setActiveNavOverlay(false)}
              className=" text-white text-[20px] md:text-md ff_inter font-normal transition duration-500 ease-in-out hover:text-red"
              aria-current="page"
            >
              Events
            </a>
          </li>
          <li className="py-5">
            <a
              href="#contact"
              onClick={() => setActiveNavOverlay(false)}
              className=" text-white text-[20px] md:text-md ff_inter font-normal transition duration-500 ease-in-out hover:text-red"
              aria-current="page"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="absolute top-6 sm:top-10 md:top-6 right-4 sm:right-8 md:right-14">
          <button onClick={() => setActiveNavOverlay(false)}>
            <HeaderCrossIcons />
          </button>
        </div>
      </div>
    </>
  );
};

export default Mobile;
