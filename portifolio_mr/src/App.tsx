import Background from "./componentes/particulas";
import "./App.css";
import Header from "./componentes/header/Header.tsx";
import Hero from "./componentes/hero/Hero.tsx";
import About from "./componentes/sobre_mim/About.tsx";
import Projeto from "./componentes/projetos/Projeto.tsx";
import Conhecimentos from "./componentes/conhecimentos/Conhecimentos";
import Entrecontato from "./componentes/entrecontato/Entrecontato.tsx";
import Footer from "./componentes/footer/Footer.tsx";
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
