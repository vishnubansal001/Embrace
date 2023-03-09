import React from "react";
import team from '../assests/team.png';

const OurTeam = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-10">
        <div className="flex md:flex-row flex-col w-[90%] mx-auto p-5">
          <div className="md:w-[40%] md:mb-1 mb-10">
            <img src={team} alt="" />
          </div>
          <div className="md:w-[40%] mx-auto flex flex-col gap-4">
            <h1 className="md:text-4xl text-2xl font-semibold">Meet Our Team</h1>
            <h1 className="md:text-3xl text-2xl text-gray-500">Lorem ipsum dolor sit amet consectetur</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, sint minus dolore reprehenderit deserunt provident nostrum culpa, earum facilis asperiores deleniti. Quam temporibus tenetur rem!</p>
            <div className="border-none bg-gradient-to-br from-blue-500 to-blue-400 shadow-lg shadow-blue-400 mb-10 hover:scale-110 duration-300 md:w-[10vw] text-center rounded-full py-3 px-6 md:mt-10 mt-5 cursor-none">
              <button type="button" className="text-white cursor-none">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
