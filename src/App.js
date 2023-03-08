import { useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Projects } from "./components/Projects";
import { SkillSet } from "./components/SkillSet";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`App ${darkMode ? "dark" : "bg-light-mode"}`}>
      <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      <main>
        <Intro />
        <SkillSet />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
