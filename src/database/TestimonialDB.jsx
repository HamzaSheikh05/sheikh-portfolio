import React from "react";
import Logo from "../assets/aws.png";

export const TestimonialDB = () => {
  return (
    <div className="flex justify-evenly flex-wrap my-3 py-3 group">
      <div className="bg-transparent shadow-lg shadow-blue-800 dark:shadow-blue-500 border border-gray-500 max-w-md cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 p-8 rounded-xl">
        <img src={Logo} alt="" className="h-20 mx-auto" />
        <h3 className="text-3xl my-5 text-blue-400 font-burtons">John Doe</h3>
        <p className="text-md text-blue-100 leading-normal my-3 font-serif">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium in
          harum laborum asperiores illo eius dignissimos, voluptas nisi
          perspiciatis, exercitationem inventore magni deserunt repellat
          molestiae voluptatum fugiat facere fuga quibusdam!
        </p>
      </div>
    </div>
  );
};
