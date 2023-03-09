import { Commitments, Community, Hero, Navbar, Working } from "./components";

function App() {
  return (
    <>
      <Navbar/>
      <main className="gap-5">
        <Hero/>
        <Community/>
        <Commitments/>
        <Working/>
      </main>
    </>
  );
}

export default App;
