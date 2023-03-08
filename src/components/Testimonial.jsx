import React from "react";
import Logo from "../assets/aws.png";

export const Testimonial = () => {
  return (
    <section className="p-10 bg-light-mode dark:bg-dark-mode">
      <div className="flex justify-center flex-col">
        <div className="text-center my-3 py-3">
          <h1 className="text-4xl text-blue-300 font-bold inline border-b-2 border-blue-400 font-burtons">
            Testimonial Section
          </h1>
          <h3 className="py-4 text-lg text-blue-100 font-serif">
            Hear what others say about me
          </h3>
        </div>

        <div className="flex justify-evenly flex-wrap my-3 py-3 group">
          <div className="bg-transparent shadow-lg shadow-blue-800 dark:shadow-blue-500 border border-gray-500 max-w-md cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 p-8 rounded-xl">
            <img src={Logo} alt="" className="h-20 mx-auto" />
            <h3 className="text-3xl my-5 text-blue-400 font-burtons">
              John Doe
            </h3>
            <p className="text-md text-blue-100 leading-normal my-3 font-serif">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium in harum laborum asperiores illo eius dignissimos,
              voluptas nisi perspiciatis, exercitationem inventore magni
              deserunt repellat molestiae voluptatum fugiat facere fuga
              quibusdam!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
