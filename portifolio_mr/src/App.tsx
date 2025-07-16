import Background from "./componentes/particulas";
import "./App.css";
import Header from "./componentes/header/header.tsx";
import Hero from "./componentes/hero/hero.tsx";
import About from "./componentes/sobre mim/about.tsx";
import Projeto from "./componentes/projetos/projeto.tsx";
import Conhecimentos from "./componentes/conhecimentos/conhecimentos";
import Entrecontato from "./componentes/entrecontato/entrecontato.tsx";
import Footer from "./componentes/footer/footer.tsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <Background />
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Projeto></Projeto>
      <Conhecimentos></Conhecimentos>
      <Entrecontato></Entrecontato>
      <Footer></Footer>
    </>
  );
};

export default App;
