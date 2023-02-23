import React from "react";

import HomeImage from "../assets/home.jpg";

function Home() {
  return (
    <div
      name="home"
      className="flex h-full w-full flex-col items-center   pt-[4.5rem]"
    >
      <div>
        <h2 className="text-center text-7xl font-bold tracking-wide">
          Muhammad Musa
        </h2>
        <div className="text-center font-secondText text-[0.9rem] font-normal text-gray-700">
          <p>Secretary (Rtd), Government of Bangladesh</p>
          <p>
            President, BCS Freedom-Fighter Officers and Employees Welfare
            Association of Bangladesh
          </p>
          <p>TV personality and Columnist</p>
        </div>
      </div>
      <div className=" mt-4 border border-accentColor  p-2">
        <img src={HomeImage} alt="" />
      </div>
    </div>
  );
}

export default Home;
