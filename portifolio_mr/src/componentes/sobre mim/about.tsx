import style from "./about.module.css";
import img1 from "../../assets/IMG_7360.png";

const About = () => {
  return (
    <div id="sobre_mim" className={style.main}>
      <div className={style.imagem}>
        <img src={img1} alt="" />
      </div>

      <div>
        <h2>Sobre mim</h2>
        <p>
          Me chamo Murilo Rocha, tenho 18 anos, sou formado em tecnico de
          informatica pela internet pelo IFC e atualmente estou graduando
          Tecnologia da Informação e Comunicação pela UFSC. Desenvolvo paginas
          webs e sistemas com as principais tecnolgias de desenvolvimente web,
          javascript,html/css e fremeworks. Já trabalhei em uma empresa como
          responsavel pelo setor de gestão de ecommerce. Atualmente estou me
          aperfeiçoando em tecnolgias como Next.js e Typescript, busco minha
          primeira oportunidade como desenvolvedor.
        </p>
      </div>
    </div>
  );
};

export default About;
