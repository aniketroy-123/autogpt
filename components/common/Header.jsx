import React, { useState, useEffect } from "react";
import Logo from "../assets/images/svg/nav-logo.svg";
import { ToggleIcon } from "../component/common/Icons";
import Mobile from "./Mobile";

const Header = () => {
  const [activeNavOverlay, setActiveNavOverlay] = useState(false);

  useEffect(() => {
    if (activeNavOverlay) {
      document.body.classList.add("overflow-y-hidden");
    } else if (!activeNavOverlay) {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [activeNavOverlay]);

  return (
    <>
      <Mobile
        activeNavOverlay={activeNavOverlay}
        setActiveNavOverlay={setActiveNavOverlay}
      />
      <nav className="w-full z-[1] bg-[rgba(248,248,248,0.8)]">
        <div className="container py-4 xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <div className="relative flex items-center justify-between">
            <div className="flex-1 flex items-center justify-between lg:items-center xl:mr-3">
              <div className="flex-shrink-0 flex items-center">
                <a href="/">
                  {/* <img
                    className="w-[182px] height-[49px]"
                    src={Logo}
                    alt="logo"
                  /> */}
                  the
                </a>
              </div>{" "}
              <div className="hidden lg:block">
                <div className="flex items-center">
                  <a
                    href="#home"
                    className="text-black3a text-base ff_inter font-normal transition duration-500 ease-in-out relative ml-4 xl:ml-[29px] hover:text-red"
                    aria-current="page"
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    className="text-black3a text-base ff_inter font-normal transition duration-500 ease-in-out relative ml-4 xl:ml-[29px] hover:text-red"
                  >
                    About
                  </a>
                  <a
                    href="#services"
                    className="text-black3a text-base ff_inter font-normal transition duration-500 ease-in-out relative ml-4 xl:ml-[29px] hover:text-red"
                  >
                    Services
                  </a>
                  <a
                    href="#blog"
                    className="text-black3a text-base ff_inter font-normal transition duration-500 ease-in-out relative ml-4 xl:ml-[29px] hover:text-red"
                  >
                    Blog
                  </a>
                  <a
                    href="#events"
                    className="text-black3a text-base ff_inter font-normal transition duration-500 ease-in-out relative ml-4 xl:ml-[29px] hover:text-red"
                  >
                    Events
                  </a>
                  <a
                    href="#contact"
                    className="text-black3a text-base ff_inter font-normal transition duration-500 ease-in-out relative ml-4 xl:ml-[29px] hover:text-red"
                  >
                    Contact
                  </a>
                </div>
              </div>
              <div className="flex items-center lg:hidden">
                <button
                  onClick={() => setActiveNavOverlay(true)}
                  type="button"
                  className="inline-flex items-center justify-center rounded-md"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <ToggleIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
