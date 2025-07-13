import Background from "./componentes/particulas";
import "./App.css";
import Header from "./componentes/header/header";
import Hero from "./componentes/hero/hero";
import About from "./componentes/sobre mim/about";
import Projeto from "./componentes/projetos/projeto";
import Conhecimentos from "./componentes/conhecimentos/conhecimentos";

const App = () => {
  return (
    <>
      <Background />
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Projeto></Projeto>
      <Conhecimentos></Conhecimentos>
    </>
  );
};

export default App;
