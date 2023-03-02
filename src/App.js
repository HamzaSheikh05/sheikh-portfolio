import "./App.css";
import { CardList } from "./components/CardList";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";

function App() {
  return (
    <div className="App">
      <header className="bg-white px-10">
        <Header />
      </header>
      <main className="bg-white px-10 min-h-screen">
        <section className="mb-3">
          <Intro />
        </section>

        <section className="mb-3">
          <CardList />
        </section>

        <section className="mb-3">
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
