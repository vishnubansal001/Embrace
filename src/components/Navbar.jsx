import React, { useEffect, useState } from "react";
import embrace from "../assests/embrace.svg";
import menu from "../assests/menu.svg";

const Navbar = () => {
  const [popupState, setPopupState] = useState(false);
  const [navState, setNaveState] = useState(false);
  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNaveState(true);
    } else {
      setNaveState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);
  const onTriggerPopup = () => setPopupState(!popupState);
  return (
    <>
      <div className={`nav-default ${navState && "nav-sticky"}`}>
        <div className="flex flex-row items-center w-[90%] mx-auto justify-between">
          <div className="flex items-center gap-10">
            <div>
              <img
                src={embrace}
                alt="Embrace/img"
                className="w-auto h-auto object-fill"
              />
            </div>
            <ul className="hidden lg:flex items-center justify-center gap-8">
              <li className="font-normal text-black drop-shadow-lg">
                How it Works
              </li>
              <li className="font-normal text-black drop-shadow-lg">
                Our Work
              </li>
              <li className="font-normal text-black drop-shadow-lg">Pricing</li>
              <li className="font-normal text-black drop-shadow-lg">
                About Us
              </li>
            </ul>
          </div>
          <div className="border-none hidden lg:flex bg-blue-600 rounded-full py-3 px-6">
            <button type="button" className="text-white cursor-none">
              Try it Now
            </button>
          </div>
          <ul className="lg:hidden flex items-center">
            <li>
              <img
                src={menu}
                onClick={onTriggerPopup}
                alt=""
                className="flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer"
              />
            </li>
          </ul>
        </div>
      </div>
      <nav
        className={`fixed top-14 right-14 bg-white bg-opacity-70 opacity-100 z-50 backdrop-filter backdrop-blur-md rounded-lg w-44 h-auto py-5 px-6 lg:hidden items-center justify-center transition-transform duration-500 ${
          popupState ? "showpopup" : "noshowpopup"
        }`}
      >
        <ul className="lg:hidden flex items-start flex-col gap-3">
          <li>How it Works</li>
          <li>Our Work</li>
          <li>About Us</li>
          <li>
          <div className="border-none bg-blue-600 rounded-full py-3 px-6">
            <button type="button" className="text-white cursor-none">
              Try it Now
            </button>
          </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
