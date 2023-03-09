import React from "react";
import people from "../assests/people.png";

const Hero = () => {
  return (
    <>
      <div className="w-full flex flex-row items-center md:mt-6 mt-14">
        <div className="md:w-[95%] w-[90%] mx-auto flex flex-col md:flex-row items-center justify-center">
          <div className="flex flex-col items-start md:w-[43%] gap-[3rem] md:mb-0 mb-7">
            <div className="flex flex-col gap-5">
              <h1 className="lg:text-8xl font-semibold md:text-6xl sm:text-5xl text-3xl">
                We Take Care Of Your Brand
              </h1>
              <p className="text-normal leading-7 text-gray-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Placeat sit minima necessitatibus accusantium aspernatur ab vero
                distinctio odio ipsum molestiae!
              </p>
            </div>
            <form className="flex items-center justify-center gap-3">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="py-3 px-5 ring-1 ring-slate-300 flex items-center shadow-md shadow-slate-200 w-full text-base rounded-full relative placeholder:text-slate-500 focus:outline-blue-500"
              />
              <button
                type="button"
                className="py-3 px-2 w-[40%] text-sm md:text-base md:px-4 md:py-2 md:w-[40%] text-white bg-gradient-to-b from-blue-500 to-blue-500 rounded-full transition-all duration-200 active:scale-90 shadow-lg shadow-blue-400 cursor-none"
              >
                Lets Talk
              </button>
            </form>
          </div>
          <div className="md:w-[10%]"></div>
          <div className=" md:w-[40%]">
            <img src={people} alt="people/img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
