import style from "./about.module.css";
import img1 from "../../assets/IMG_7360.png";

const About = () => {
  return (
    <div id="sobre_mim" className={style.main}>
      <div
        className={style.imagem}
        data-aos="fade-right"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <img src={img1} alt="" />
      </div>

      <div data-aos="fade-left" data-aos-mirror="true" data-aos-once="false">
        <h2>Sobre mim</h2>
        <p>
          Me chamo Murilo Rocha, tenho 18 anos, sou formado em técnico de
          informática pela internet pelo IFC e atualmente estou graduando
          Tecnologia da Informação e Comunicação pela UFSC. Desenvolvo páginas
          web e sistemas com as principais tecnologias de desenvolvimento web:
          Javascript, HTML/CSS e frameworks. Já trabalhei em uma empresa como
          responsável pelo setor de gestão de e-commerce. Atualmente estou me
          aperfeiçoando em tecnologias como Next.js e Typescript, e busco minha
          primeira oportunidade como desenvolvedor.
        </p>
      </div>
    </div>
  );
};

export default About;
