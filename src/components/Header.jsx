import { BsFillMoonStarsFill } from "react-icons/bs";

export const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="text-blue-400">
      <nav className="py-10 px-10 flex justify-between dark:bg-dark-mode dark:text-white">
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
              className="bg-gradient-to-r from-blue-400 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
              href="http://www.google.com"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
