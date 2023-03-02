import "./App.css";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";

function App() {
  return (
    <div className="App">
      <header className="bg-white px-10">
        <Header />
      </header>
      <main className="bg-white px-10">
        <section className="min-h-screen">
          <Intro />
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
