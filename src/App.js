import { useEffect, useState } from "react";
import {
  Commitments,
  Community,
  Footer,
  Hero,
  Journey,
  Navbar,
  OurTeam,
  OurWork,
  Working,
} from "./components";

function App() {
  useEffect(() => {
    document.body.classList.add("cursor-none");
    return () => {
      document.body.classList.remove("cursor-none");
    };
  }, []);
  return (
    <>
      <Navbar />
      <main className="gap-5">
        <Hero />
        <Community />
        <Commitments />
        <Working />
        <OurWork />
        <Journey />
        <OurTeam />
      </main>
      <Footer />
    </>
  );
}

export default App;
