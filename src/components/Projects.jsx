import { database } from "../database/Database";

export const Projects = () => {
  const projects = database;

  return (
    <section className="px-10 bg-light-mode dark:bg-dark-mode">
      <div className="flex flex-col items-center">
        <div className="flex flex-col py-8 mx-auto">
          <h1 className="text-4xl py-2 text-blue-300 font-bold inline border-b-2 border-blue-400 font-burtons">
            Portfolio Section
          </h1>
          <p className="text-2xl py-2 font-serif text-gray-300">
            Check out my projects!
          </p>
        </div>

        <div className="flex justify-evenly flex-wrap my-8 gap-14">
          {projects.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="max-w-lg content-div flex justify-center text-center items-center shadow-lg shadow-[#040c16] group container rounded-md mx-auto"
            >
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-xl font-burtons font-bold text-gray-300 tracking-wider">
                  {item.name}
                </span>

                <div className="pt-8 text-center">
                  <a href={item.github} target="_blank" rel="noreferrer">
                    <button className="text-center bg-blue-500 rounded-md px-4 py-3 m-2 text-gray-300 font-burtons text-lg">
                      To Github Code
                    </button>
                  </a>
                  <a href={item.live} target="_blank" rel="noreferrer">
                    <button className="text-center bg-blue-500 rounded-md px-4 py-3 m-2 text-gray-300 font-burtons text-lg">
                      To Live Website
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
