import { data } from "../database/Database";

export const Projects = () => {
  return (
    <div className="flex flex-col py-4 items-center">
      <div className="flex flex-col py-8 mx-auto">
        <h1 className="text-4xl py-2 text-blue-300 font-bold inline border-b-2 border-blue-400 font-burtons">
          Portfolio Section
        </h1>
        <p className="text-2xl py-2 text-gray-300">Check out my projects!</p>
      </div>
    </div>
  );
};
