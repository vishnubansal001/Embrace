import React from "react";
import buildings from "../assests/buildings.svg";
import speed from "../assests/speed.svg";
import ideation from "../assests/ideation.svg";
import performance from "../assests/performance.svg";
import budget from "../assests/budget.svg";

const Working = () => {
  return (
    <>
      <div className="w-full mt-20">
        <div className="md:w-[90%] w-[80%] mx-auto flex md:flex-row flex-col items-center justify-between md:gap-20 gap-10">
          <div className="flex flex-col md:w-[40%] gap-10 md:mb-3 mb-5">
            <div className="md:gap-7 gap-4 md:mb-1 mb-2 flex flex-col">
              <h1 className="lg:text-5xl md:text-4xl text-3xl font-mono font-semibold">
                How It Works
              </h1>
              <p className="font-normal text-base sm:text-xs text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis maiores aperiam obcaecati aspernatur laudantium sequi
                eius nihil! Magni vero alias dolore architecto, ratione
                praesentium inventore doloremque reprehenderit quidem iure.
                Aperiam aliquid deleniti optio rem atque consequuntur iure aut
                architecto, nam et quia ratione accusamus quod tenetur
                accusantium laborum, nihil ex.
              </p>
            </div>
            <img src={buildings} alt="buildings/img" />
          </div>
          <div className="grid grid-cols-2 md:gap-20 gap-10 md:w-[45%] md:mx-auto">
            <div className="flex items-start flex-col gap-1">
              <img src={ideation} alt="" className="mb-4 md:w-auto md:h-auto w-24"/>
              <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-mono font-semibold">
                Ideation
              </h1>
              <p className="font-normal lg:text-base text-xs text-gray-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel quis repudiandae, fuga in amet mollitia deleniti est sint corporis ex.
              </p>
            </div>
            <div className="flex items-start flex-col gap-1">
              <img src={budget} alt="" className="mb-4 md:w-auto md:h-auto w-24"/>
              <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-mono font-semibold">
                Budget
              </h1>
              <p className="font-normal  lg:text-base text-xs text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem molestiae maxime quis eveniet dolorum similique, blanditiis quia dignissimos deserunt? Aut.
              </p>
              
            </div>
            <div className="flex items-start flex-col gap-1">
              <img src={performance} alt="" className="mb-4 md:w-auto md:h-auto w-24"/>
              <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-mono font-semibold">
                Performance
              </h1>
              <p className="font-normal  lg:text-base text-xs text-gray-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, culpa voluptate sapiente beatae iure voluptatibus atque
              </p>
            </div>
            <div className="flex items-start flex-col gap-1">
              <img src={speed} alt="" className="mb-4 md:w-auto md:h-auto w-24"/>
              <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-mono font-semibold">
                Speed
              </h1>
              <p className="font-normal  lg:text-base text-xs text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non impedit optio natus nobis ducimus magnam odit pariatur beatae cum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Working;
