import Background from "./componentes/particulas";
import "./App.css";
import Header from "./componentes/header/header";
import Hero from "./componentes/hero/hero";
import About from "./componentes/sobre mim/about";
import Projeto from "./componentes/projetos/projeto";
import Conhecimentos from "./componentes/conhecimentos/conhecimentos";
import Entrecontato from "./componentes/entrecontato/entrecontato";
import Footer from "./componentes/footer/footer";

const App = () => {
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
