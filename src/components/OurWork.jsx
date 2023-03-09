import React from "react";
import apple from "../assests/apple.svg";
import nike from "../assests/nike.svg";
import cocacola from "../assests/cocacola.svg";

const OurWork = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-20">
        <div className="w-[90%] flex flex-col mx-auto items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-black md:text-4xl text-2xl font-semibold">
              Our Work
            </h1>
            <p className="md:w-[70%] w-[90%] text-gray-600 mt-3 mb-10">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              repellendus deleniti ullam. Aperiam iure vero possimus voluptatem
              perferendis facilis tempore.
            </p>
          </div>
          <div className="flex md:flex-row flex-col justify-center items-center gap-7">
            <div className="flex flex-col items-center justify-center gap-3">
              <img src={apple} alt="" />
              <h1 className="md:text-3xl text-2xl font-semibold">Apple</h1>
              <p className="text-gray-600 font-normal">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <img src={cocacola} alt="" />
              <h1 className="md:text-3xl text-2xl font-semibold">Coca-Cola</h1>
              <p className="text-gray-600 font-normal">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <img src={nike} alt="" />
              <h1 className="md:text-3xl text-2xl font-semibold">Nike</h1>
              <p className="text-gray-600 font-normal">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <div className="border-none bg-gradient-to-br from-blue-500 to-blue-400 shadow-lg shadow-blue-400 mb-10 hover:scale-110 duration-300 w-[10vw] text-center rounded-full py-3 px-6 md:mt-10 mt-5">
            <button type="button" className="text-white">
              See More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurWork;
