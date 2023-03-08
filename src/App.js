import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Projects } from "./components/Projects";
import { SkillSet } from "./components/SkillSet";
import { Testimonial } from "./components/Testimonial";

function App() {
  return (
    <div className={"App"}>
      <Header />
      <main>
        <Intro />
        <SkillSet />
        <Projects />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
}

export default App;
