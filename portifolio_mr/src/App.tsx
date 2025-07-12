import Background from "./componentes/particulas";
import "./App.css";
import Header from "./componentes/header/header";
import Hero from "./componentes/hero/hero";
import About from "./componentes/sobre mim/about";
const App = () => {
  return (
    <>
      <Background />
      <Header></Header>
      <Hero></Hero>
      <About></About>
    </>
  );
};

export default App;
