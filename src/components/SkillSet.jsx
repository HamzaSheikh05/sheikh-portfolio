import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";

export const SkillSet = () => {
  return (
    <div className="mx-auto py-4 flex flex-col justify-between text-gray-300">
      <div>
        <h1 className="text-4xl text-blue-300 font-bold inline border-b-2 border-blue-400 font-burtons">
          Technical Skills
        </h1>
        <p className="py-4 text-md font-serif">The Tech I am experienced in</p>
      </div>

      <div className="flex justify-evenly items-center text-center p-10 max-lg:flex max-lg:flex-wrap">
        <div className="bg-transparent shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-6 rounded-md items-center">
          <img className="w-24 mx-auto" src={HTML} alt="HTML icon" />
          <p className="mt-2 font-serif font-semibold">HTML</p>
        </div>

        <div className="bg-transparent shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-6 rounded-md items-center">
          <img className="w-24 mx-auto" src={CSS} alt="HTML icon" />
          <p className="mt-2 font-serif font-semibold">CSS</p>
        </div>

        <div className="bg-transparent shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-6 rounded-md items-center">
          <img className="w-24 mx-auto" src={JavaScript} alt="HTML icon" />
          <p className="mt-2 font-serif font-semibold">JavaScript</p>
        </div>

        <div className="bg-transparent shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-6 rounded-md items-center">
          <img className="w-24 mx-auto" src={ReactImg} alt="HTML icon" />
          <p className="mt-2 font-serif font-semibold">React</p>
        </div>

        <div className="bg-transparent shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-6 rounded-md items-center">
          <img className="w-24 mx-auto" src={GitHub} alt="HTML icon" />
          <p className="mt-2 font-serif font-semibold">Github</p>
        </div>

        <div className="bg-transparent shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-6 rounded-md items-center">
          <img className="w-24 mx-auto" src={Node} alt="HTML icon" />
          <p className="mt-2 font-serif font-semibold">Node</p>
        </div>

        <div className="bg-transparent shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-6 rounded-md items-center">
          <img className="w-24 mx-auto" src={Tailwind} alt="HTML icon" />
          <p className="mt-2 font-serif font-semibold">Tailwind</p>
        </div>

        <div className="bg-transparent shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-6 rounded-md items-center">
          <img className="w-24 mx-auto" src={FireBase} alt="HTML icon" />
          <p className="mt-2 font-serif font-semibold">FireBase</p>
        </div>
      </div>
    </div>
  );
};
