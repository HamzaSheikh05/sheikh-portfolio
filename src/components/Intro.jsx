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
        <h2 className="text-5xl py-2 text-blue-400 font-medium md:text-6xl font-burtons dark:text-blue-400">
          Hamza Sheikh
        </h2>
        <h3 className="text-2xl text-blue-300 py-2 md:text-3xl font-burtons font-semibold dark:text-gray-400">
          Front End Developer
        </h3>
        <p className="text-md py-5 leading-8 text-gray-300 md:text-xl max-w-lg mx-auto">
          I am a self-taught developer with expertise in JavaScript, React and
          Tailwind.
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-400">
        <AiFillTwitterCircle className="text-blue-300 border-2 border-blue-300 rounded-full p-1" />
        <AiFillLinkedin className="text-blue-300 border-2 border-blue-300 rounded-full p-1" />
        <AiFillGithub className="text-blue-300 border-2 border-blue-300 rounded-full p-1" />
      </div>
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 my-10 overflow-hidden border-2 border-black md:h-96 md:w-96">
        <img src={DP} alt="" className="object-cover" />
      </div>
    </>
  );
};
