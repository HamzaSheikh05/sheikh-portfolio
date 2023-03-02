import { BsFillMoonStarsFill } from "react-icons/bs";

export const Header = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <nav className="py-10 flex justify-between dark:text-blue-400">
        <h1 className="text-xl font-burtons">DevelopedByHS</h1>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl"
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
    </>
  );
};
