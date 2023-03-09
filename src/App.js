import { Commitments, Community, Hero, Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar/>
      <main className="gap-5">
        <Hero/>
        <Community/>
        <Commitments/>
      </main>
    </>
  );
}

export default App;
