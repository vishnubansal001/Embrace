import { Commitments, Community, Hero, Journey, Navbar, OurWork, Working } from "./components";

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
        <Journey/>
      </main>
    </>
  );
}

export default App;
