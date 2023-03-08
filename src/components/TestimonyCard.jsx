import React from "react";

export const TestimonyCard = ({ name, image, recommendation }) => {
  return (
    <div className="bg-transparent shadow-lg shadow-blue-800 dark:shadow-blue-500 border border-gray-500 max-w-md cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 p-8 rounded-xl">
      <img src={image} alt="DP" className="h-20 mx-auto" />
      <h3 className="text-3xl my-5 text-blue-400 dark:text-blue-200 font-burtons">
        {name}
      </h3>
      <p className="text-md text-blue-100 dark:text-gray-100 leading-normal my-3 font-serif">
        {recommendation}
      </p>
    </div>
  );
};
