import React from "react";
import spotify from "../assests/spotify.svg";
import google from "../assests/google.svg";
import uber from "../assests/uber.svg";
import microsoft from "../assests/microsoft.svg";
import shopify from "../assests/shopify.svg";
import evernote from "../assests/evernote.svg";
import adobe from "../assests/adobe.svg";
import paypal from "../assests/paypal.svg";
import amazon from "../assests/amazon.svg";
import asana from "../assests/asana.svg";

const Community = () => {
  return (
    <>
      <div className="flex items-center mt-10">
        <div className="w-[90%] mx-auto flex flex-col items-start">
          <div className="flex flex-col text-black gap-4 mb-12">
            <h1 className="lg:text-6xl md:text-5xl sm:text-3xl text-4xl font-semibold">
              Companies
            </h1>
            <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-3xl font-semibold">
              We Work With
            </h1>
          </div>
          <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:gap-20 md:gap-12 gap-10">
            <img src={spotify} alt="Spotify/img" />
            <img src={google} alt="Google/img" />
            <img src={uber} alt="Uber/img" />
            <img src={microsoft} alt="Microsoft/img" />
            <img src={shopify} alt="Shopify/img" />
            <img src={evernote} alt="Evernote/img" />
            <img src={adobe} alt="Adobe/img" />
            <img src={paypal} alt="Paypal/img" />
            <img src={amazon} alt="Amazon/img" />
            <img src={asana} alt="Asana/img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
