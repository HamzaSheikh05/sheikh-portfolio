import { useEffect, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <header className="text-blue-400 py-10 px-10 bg-light-mode dark:bg-dark-mode">
      <nav className="flex justify-between dark:text-white">
        <h1 className="text-xl font-burtons dark:text-blue-200">
          DevelopedByHS
        </h1>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl dark:text-yellow-200"
            />
          </li>
          <li>
            <a
              className="bg-gradient-to-r font-burtons from-blue-400 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
              href="https://drive.google.com/file/d/1LVthugk1daazeo6q1IRyUpJs8GVLpTQs/view?usp=share_link"
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
