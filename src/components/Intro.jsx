import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import DP from "../images/IMGL3768.JPG";

export const Intro = () => {
  return (
    <section className="px-10 py-3 bg-light-mode dark:bg-dark-mode">
      <div className="text-center my-5">
        <h2 className="text-5xl py-2 text-blue-400 font-medium md:text-6xl font-burtons dark:text-blue-200">
          Hamza Sheikh
        </h2>
        <h3 className="text-2xl text-blue-300 py-2 md:text-3xl font-burtons font-semibold dark:text-gray-200">
          Front End Developer
        </h3>
        <p className="text-md py-5 leading-8 text-blue-200 dark:text-gray-200 font-serif md:text-xl">
          I am a self-taught developer with expertise in JavaScript, React and
          Tailwind.
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 items-center py-3">
        <a href="https://twitter.com/" target={"_blank"} rel="noreferrer">
          <AiFillTwitterCircle className="text-blue-300 dark:text-blue-100 dark:hover:shadow-red-500 hover:shadow-md hover:shadow-blue-500 border-2 border-blue-300 dark:border-blue-100 rounded-full p-1" />
        </a>

        <a
          href="https://www.linkedin.com/in/hamza-s-287268118/"
          target={"_blank"}
          rel="noreferrer"
        >
          <AiFillLinkedin className="text-blue-300 dark:text-blue-100 dark:hover:shadow-red-500 hover:shadow-md hover:shadow-blue-500 border-2 border-blue-300 dark:border-blue-100 rounded-full p-1" />
        </a>

        <a
          href="https://github.com/HamzaSheikh05"
          target={"_blank"}
          rel="noreferrer"
        >
          <AiFillGithub className="text-blue-300 dark:text-blue-100 dark:hover:shadow-red-500 hover:shadow-md hover:shadow-blue-500 border-2 border-blue-300 dark:border-blue-100 rounded-full p-1" />
        </a>
      </div>
      <img
        src={DP}
        alt=""
        className="object-cover mx-auto my-10 relative shadow-md dark:border-2 dark:border-blue-200 rounded-full w-80 h-80 md:w-96 md:h-96"
      />
    </section>
  );
};
