import React from "react";

const Commitments = () => {
  return (
    <>
      <div className="w-full mt-20">
        <div className="md:w-[90%] w-[80%] mx-auto flex md:flex-row flex-col-reverse items-center justify-between md:gap-20 gap-10">
          <div className="grid grid-cols-2 gap-20 md:w-[50%]">
            <div className="flex items-start flex-col gap-">
              <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-mono font-semibold">
                245%
              </h1>
              <p className="font-normal text-base sm:text-sm text-gray-600">
                More revenues for
              </p>
              <p className="font-normal text-base sm:text-sm text-gray-600">
                the brand
              </p>
            </div>
            <div className="flex items-start flex-col gap-">
              <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-mono font-semibold">
                130K+
              </h1>
              <p className="font-normal text-base sm:text-sm text-gray-600">
                Audiences reached
              </p>
              <p className="font-normal text-base sm:text-sm text-gray-600">
                across platform
              </p>
            </div>
            <div className="flex items-start flex-col gap-">
              <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-mono font-semibold">
                50+
              </h1>
              <p className="font-normal text-base sm:text-sm text-gray-600">
                Brands work with us
              </p>
            </div>
            <div className="flex items-start flex-col gap-">
              <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-mono font-semibold">
                24+
              </h1>
              <p className="font-normal text-base sm:text-sm text-gray-600">
                Lorem ipsum dolor sit.
              </p>
              <p className="font-normal text-base sm:text-sm text-gray-600">
                Lorem, ipsum.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:w-[50%] gap-10">
            <div className="md:gap-7 gap-4 flex flex-col">
              <h1 className="lg:text-5xl md:text-4xl text-3xl font-mono font-semibold">
                Our Commitments
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
            <a href="/" className="underline text-blue-600 text-xl">
              <pre>Learn More{" ->"}</pre>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Commitments;
