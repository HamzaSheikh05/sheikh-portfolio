import { useState } from "react";
import "./App.css";
import { CardList } from "./components/CardList";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Portfolio } from "./components/Portfolio";
import { Projects } from "./components/Projects";
import { SkillSet } from "./components/SkillSet";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div
      className={`App ${
        darkMode
          ? "dark"
          : "bg-gradient-to-r from-[#040011] via-[#000011] to-[#040011]"
      }`}
    >
      <header
        className="px-10 text-blue-400
      dark:bg-gradient-to-r from-[#000428] via-[#000011] to-[#000428]"
      >
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      </header>

      <main>
        <section className="bg-inherit px-10 dark:bg-gradient-to-r from-[#000428] via-[#000011] to-[#000428]">
          <Intro />
        </section>

        <section className="bg-inherit px-10 dark:bg-gradient-to-r from-[#000428] via-[#000011] to-[#000428]">
          <SkillSet />
        </section>

        <section className="bg-inherit px-10 dark:bg-gradient-to-r from-[#000428] via-[#000011] to-[#000428]">
          <Projects />
        </section>
      </main>

      <footer className="bg-inherit dark:bg-gradient-to-r from-[#000428] via-[#000011] to-[#000428]">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
