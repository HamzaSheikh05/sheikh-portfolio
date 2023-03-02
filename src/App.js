import { useState } from "react";
import "./App.css";
import { CardList } from "./components/CardList";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import LinkedinDP from "./images/linkedin_profile_image.png";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  console.log(darkMode);
  return (
    <div className={`App ${darkMode ? "bg-gray-900" : ""}`}>
      <header className="px-10">
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      </header>
      <main className="bg-inherit px-10 ">
        <section className="mb-3">
          <Intro />
        </section>

        <section className="mb-3">
          <CardList />
        </section>

        <section className="mb-3">
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              officia <span className="text-red-800">pariatur</span> vero fuga
              possimus, ipsa laboriosam velit alias minus{" "}
              <span className="text-red-800">accusamus </span>
              magnam praesentium amet soluta veniam, voluptatibus aliquam esse,
              nemo nesciunt.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis quos velit illo? Iusto eius dolorem neque natus ullam
              aliquid sint.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg: flex-wrap">
            <div className="basis-1/3 flex-1">
              <img
                src={LinkedinDP}
                alt=""
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src={LinkedinDP}
                alt=""
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src={LinkedinDP}
                alt=""
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src={LinkedinDP}
                alt=""
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src={LinkedinDP}
                alt=""
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src={LinkedinDP}
                alt=""
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
