import { Community, Hero, Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar/>
      <main className="gap-5">
        <Hero/>
        <Community/>
      </main>
    </>
  );
}

export default App;
