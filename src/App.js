import { Commitments, Community, Hero, Navbar, OurWork, Working } from "./components";

function App() {
  return (
    <>
      <Navbar/>
      <main className="gap-5">
        <Hero/>
        <Community/>
        <Commitments/>
        <Working/>
        <OurWork/>
      </main>
    </>
  );
}

export default App;
