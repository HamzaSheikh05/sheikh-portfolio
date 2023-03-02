import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import DP from "../images/IMGL3768.JPG";

export const Intro = () => {
  return (
    <>
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium">
          Hamza Sheikh
        </h2>
        <h3 className="text-2xl py-2">Front End Developer</h3>
        <p className="text-md py-5 leading-8 text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, hic?
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-900">
        <AiFillTwitterCircle />
        <AiFillLinkedin />
        <AiFillGithub />
      </div>
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden border-2 border-black">
        <img src={DP} alt="" className="object-cover fill-current" />
      </div>
    </>
  );
};
