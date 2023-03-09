import React from "react";
import embrace from "../assests/embrace.svg";
import twiter from "../assests/twiter.svg";
import insta from "../assests/insta.svg";
import facebook from "../assests/facebook.svg";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-7">
        <div className="flex md:justify-between w-[90%] items-center justify-center gap-10 py-12">
          <div className="flex flex-col gap-5 justify-center">
            <img src={embrace} alt="" />
            <p>Barnala, Punjab, India</p>
            <div className="flex ">
              <img src={insta} alt="" />
              <img src={twiter} alt="" />
              <img src={facebook} alt="" />
            </div>
            <div className="border-none bg-gradient-to-br from-blue-500 to-blue-400 shadow-lg shadow-blue-400 hover:scale-110 duration-300 text-center rounded-full py-3 px-6">
              <button type="button" className="text-white cursor-none">
                Contact Us
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-20">
            <ul className="flex flex-col gap-5">
              <li>Work With Us</li>
              <li>Advertise With Us</li>
              <li>Support Us</li>
              <li>Business Advices</li>
            </ul>
            <ul className="flex flex-col gap-5">
              <li>Private Coaching</li>
              <li>Our Work</li>
              <li>Our Commitment</li>
              <li>Our Team</li>
            </ul>
            <ul className="flex flex-col gap-5">
              <li>About Us</li>
              <li>FAQs</li>
              <li>Report a Bug</li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-900 w-full text-white">
          <div className="w-[90%] mx-auto flex flex-row items-center md:justify-between justify-center md:p-3 p-2 md:gap-5 gap-10">
            <div>
              <p>&copy; 2023 Embrace, Inc.-All Rights Reserved</p>
            </div>
            <div className="flex items-center justify-center gap-10">
              <p>Terms of Use</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
