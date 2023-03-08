import { BsFillMoonStarsFill } from "react-icons/bs";

export const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="text-blue-400 py-10 px-10 dark:bg-dark-mode">
      <nav className="flex justify-between dark:text-white">
        <h1 className="text-xl font-burtons">DevelopedByHS</h1>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl dark:text-white"
            />
          </li>
          <li>
            <a
              className="bg-gradient-to-r font-burtons from-blue-400 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
              href="https://www.linkedin.com/in/hamza-s-287268118"
              target={"_blank"}
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
