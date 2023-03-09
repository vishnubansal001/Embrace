import React, { useState } from "react";
import plus from "../assests/plus.svg";

const FAQs = () => {
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);
  const handleClick1 = () => {
    setBtn1(!btn1);
  };
  const handleClick2 = () => {
    setBtn2(!btn2);
  };
  const handleClick3 = () => {
    setBtn3(!btn3);
  };
  return (
    <>
      <div className="flex items-center justify-center mt-10 mb-5">
        <div className="flex md:flex-row flex-col w-[90%] items-center">
          <div className="md:w-[50%] w-[100%] flex flex-col justify-start md:mb-1 mb-8">
            <div className="h-[0.1vh] bg-black/30"></div>
            <div className="flex justify-between items-center py-4">
              <p>How do i sign up for the project?</p>
              <button>
                <img
                  src={plus}
                  alt=""
                  className={`hover:scale-110 transition-all duration-500 cursor-none ${
                    btn1 && "rotate-45"
                  }`}
                  onClick={handleClick1}
                />
              </button>
            </div>
            <div className="h-[0.1vh] bg-black/30"></div>
            <div>
              <p className={`${!btn1 && "hidden"}`}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laborum magnam dolor ducimus necessitatibus illo pariatur
                explicabo sunt aspernatur delectus tempora.
              </p>
            </div>
            <div className={`h-[0.1vh] bg-black/30 ${!btn1 && "hidden"}`}></div>

            <div className="flex justify-between items-center py-4">
              <p>What thing that i should prepare before starting?</p>
              <button>
                <img
                  src={plus}
                  alt=""
                  className={`hover:scale-110 transition-all duration-500 cursor-none ${
                    btn2 && "rotate-45"
                  }`}
                  onClick={handleClick2}
                />
              </button>
            </div>
            <div className="h-[0.1vh] bg-black/30"></div>

            <div>
              <p className={`${!btn2 && "hidden"}`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dignissimos adipisci impedit assumenda fuga ipsum! Obcaecati
                vero dolorem temporibus? Quas, reiciendis.
              </p>
            </div>
            <div className={`h-[0.1vh] bg-black/30 ${!btn2 && "hidden"}`}></div>

            <div className="flex justify-between items-center py-4">
              <p>Does my company need help for marketing advices?</p>
              <button>
                <img
                  src={plus}
                  alt=""
                  className={`hover:scale-110 transition-all duration-500 cursor-none ${
                    btn3 && "rotate-45"
                  }`}
                  onClick={handleClick3}
                />
              </button>
            </div>
            <div className="h-[0.1vh] bg-black/30"></div>

            <div>
              <p className={`${btn3 ? "" : "hidden"}`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                quas cum itaque culpa ipsum quae saepe ut delectus unde. Beatae!
              </p>
            </div>
            <div
              className={`h-[0.1vh] bg-black/30 ${btn3 ? "" : "hidden"}`}
            ></div>
          </div>
          <div className="md:w-[40%] mx-auto">
            <div className="flex flex-col gap-6">
              <h1 className="md:text-4xl text-2xl font-semibold">
                How We Can Help You?
              </h1>
              <p className="text-gray-600">
                Follow our Newsletter. We will regularly update our latest
                project and availability.
              </p>
              <form className="flex items-center justify-center gap-3">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="py-3 px-5 ring-1 ring-slate-300 flex items-center shadow-md shadow-slate-200 w-full text-base rounded-full relative placeholder:text-slate-500 focus:outline-blue-500"
                />
                <button
                  type="button"
                  className="py-3 px-2 w-[40%] text-sm md:text-base md:px-4 md:py-2 md:w-[40%] text-white bg-gradient-to-b from-blue-500 to-blue-500 rounded-full transition-all duration-200 active:scale-90 shadow-lg shadow-blue-400"
                >
                  Lets Talk
                </button>
              </form>
              <a href="/" className="cursor-none text-blue-500 underline">
                More FAQ {" ->"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQs;
