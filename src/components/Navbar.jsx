import React, { useEffect, useState } from "react";
import embrace from "../assests/embrace.svg";

const Navbar = () => {
  const [navState,setNaveState] = useState(false);
  const onNavScroll = () => {
    if(window.scrollY > 30) {
      setNaveState(true);
    }
    else{
      setNaveState(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll',onNavScroll);
    return () => {
      window.removeEventListener('scroll',onNavScroll);
    }
  },[])
  return (
    <>
      <div className={`nav-default ${navState && 'nav-sticky'}`}>
        <div className="flex flex-row items-center w-[90%] mx-auto justify-between">
          <div className="flex items-center gap-10">
            <div>
              <img src={embrace} alt="Embrace/img" className="w-auto h-auto object-fill" />
            </div>
            <ul className="flex items-center justify-center gap-8">
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
          <div className="border-none bg-blue-600 rounded-full py-3 px-6">
            <button type="button" className="text-white">
              Try it Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
