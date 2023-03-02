import React from "react";
import LinkedinDP from "../images/linkedin_profile_image.png";

export const Portfolio = () => {
  return (
    <div>
      <div>
        <h3 className="text-3xl py-1">Portfolio</h3>
        <p className="text-md py-2 leading-8 text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit officia{" "}
          <span className="text-red-800">pariatur</span> vero fuga possimus,
          ipsa laboriosam velit alias minus{" "}
          <span className="text-red-800">accusamus </span>
          magnam praesentium amet soluta veniam, voluptatibus aliquam esse, nemo
          nesciunt.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          quos velit illo? Iusto eius dolorem neque natus ullam aliquid sint.
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg: flex-wrap">
        <div className="basis-1/3 flex-1">
          <img
            src={LinkedinDP}
            alt=""
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            src={LinkedinDP}
            alt=""
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            src={LinkedinDP}
            alt=""
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            src={LinkedinDP}
            alt=""
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            src={LinkedinDP}
            alt=""
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            src={LinkedinDP}
            alt=""
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
          />
        </div>
      </div>
    </div>
  );
};
