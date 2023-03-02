import { useState } from "react";
import "./App.css";
import { CardList } from "./components/CardList";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Portfolio } from "./components/Portfolio";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  console.log(darkMode);
  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <header className="px-10 dark:bg-gray-900">
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      </header>
      <main className="bg-white px-10 dark:bg-gray-900">
        <section className="mb-3">
          <Intro />
        </section>

        <section className="mb-3">
          <CardList />
        </section>

        <section className="">
          <Portfolio />
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
