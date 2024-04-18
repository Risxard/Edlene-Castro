import "./Variables.css";
import Bio from "./Components/Main/Bio/Bio";
import Depoimentos from "./Components/Main/Depoimentos/Depoimentos";
import Contato from "./Components/Main/Contato/Contato";
import Mapa from "./Components/Main/Mapa/Mapa";
import Navigation from "./Components/Navigation/Navigation";
import HeroSection from "./Components/Header/HeroSection";

function App() {
  return (
    <>
      <Navigation />
      <header>
        <HeroSection />
      </header>
      <main>
        <Bio />
        <Depoimentos />
        <Contato/>
      </main>
      <Mapa />
    </>
  );
}

export default App;
