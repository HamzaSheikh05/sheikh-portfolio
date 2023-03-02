import { BsFillMoonStarsFill } from "react-icons/bs";

export const Header = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <nav className="py-10 mb-9 flex justify-between dark:bg-gray-900">
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
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
              href="#"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
