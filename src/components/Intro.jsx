import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import DP from "../images/IMGL3768.JPG";

export const Intro = () => {
  return (
    <div className="">
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
          Hamza Sheikh
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl">Front End Developer</h3>
        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, hic?
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-900">
        <AiFillTwitterCircle />
        <AiFillLinkedin />
        <AiFillGithub />
      </div>
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden border-2 border-black md:h-96 md:w-96">
        <img src={DP} alt="" className="object-cover" />
      </div>
    </div>
  );
};
