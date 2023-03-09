import React from "react";
import arrow from "../assests/arrow.svg";
import shock from "../assests/shock.svg";
import journey from "../assests/journey.svg";

const YourJourney = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full mt-10">
        <div className="bg-[#232038] rounded-3xl w-[80%] mx-auto text-white flex md:flex-row flex-col md:gap-20 md:px-20 px-10 md:py-10 py-5">
          <div className="md:w-[50%] md:mt-10">
            <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl">Start Your Journey With Us Now</h1>
            <div className="border-none bg-gradient-to-br from-blue-500 to-blue-400 shadow-lg shadow-blue-400 mb-10 hover:scale-110 duration-300 md:w-[10vw] text-center rounded-full py-3 px-6 md:mt-10 mt-5 cursor-none">
              <button type="button" className="text-white cursor-none">
                Start Now
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center md:w-[50%]">
            {/* <img src="" alt="" /> */}
            <div className=" bg-[#E0FF22] flex flex-row md:h-[250px] md:w-[250px] h-[150px] w-[150px] rounded-full items-center justify-center">
              <img src={shock} alt="" className="md:w-20 w-10" />
              <img src={arrow} alt="" className="md:w-32 w-16"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourJourney;
