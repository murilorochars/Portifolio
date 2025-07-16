import style from "./projetos.module.css";
import { FaGithub } from "react-icons/fa";
import Controle from "../../assets/tela_principal.png";
import Port from "../../assets/portifolio.png";
import Aged from "../../assets/Captura de tela 2025-01-04 220150.png";
import Incor from "../../assets/Captura de tela 2025-07-15 222921.png";
const Projeto = () => {
  return (
    <div id="projetos_mr" className={style.main}>
      <h1>Meus Projetos</h1>
      <div className={style.cards}>
        <div className={style.card}>
          <h2>Aged Care</h2>
          <img src={Aged} alt="Aged Care" />
          <div className={style.overlay}>
            <a
              href="https://github.com/murilorochars"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={32} />
            </a>
          </div>
          <p>
            Plataforma desenvolvida para defesa do meu TCC, para auxiliar na
            contratação de técnicos de enfermagem e cuidadores.
          </p>
          <p>HTML - CSS - REACT - JAVASCRIPT - NODE JS - MYSQL - EXPRESS</p>
        </div>

        <div className={style.card}>
          <h2>Portfólio</h2>
          <img src={Port} alt="Portfólio" />
          <div className={style.overlay}>
            <a
              href="https://github.com/seurepo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={32} />
            </a>
          </div>
          <p>
            Meu presente site, para demonstrar meus conhecimentos e um pouco
            sobre mim.
          </p>
          <p>HTML - CSS - REACT - TYPESCRIPT - JAVASCRIPT</p>
        </div>

        <div className={style.card}>
          <h2>Controle de Estoque Python</h2>
          <img src={Controle} alt="Controle de Estoque Python" />
          <div className={style.overlay}>
            <a
              href="https://github.com/murilorochars/Controle_de_estoque_python"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={32} />
            </a>
          </div>
          <p>
            Trabalho final de Algoritmos e Lógica Computacional. Controle de
            estoque com relatórios e aviso de baixo estoque via email.
          </p>
          <p>PYTHON - EMAILMAILER - SQLITE - PEEWEE</p>
        </div>

        <div className={style.card}>
          <h2>Indecor</h2>
          <img src={Incor} alt="Indecor" />
          <div className={style.overlay}>
            <a
              href="https://github.com/seurepo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={32} />
            </a>
          </div>
          <p>SPA de decorações de mobílias residenciais.</p>
          <p>HTML - CSS - JAVASCRIPT</p>
        </div>

        <div className={style.card}>
          <h2>PrimeFlix</h2>
          <img src="caminho/para/primeflix.jpg" alt="PrimeFlix" />
          <div className={style.overlay}>
            <a
              href="https://github.com/seurepo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={32} />
            </a>
          </div>
          <p>
            Site desenvolvido para treinar conceitos de React com TypeScript e
            armazenamento local.
          </p>
          <p>HTML - CSS - TYPESCRIPT - REACT</p>
        </div>

        <div className={style.card}>
          <h2>Estar por vir</h2>
          <img src="caminho/para/estar-por-vir.jpg" alt="Estar por vir" />
          <div className={style.overlay}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaGithub size={32} />
            </a>
          </div>
          <p>....</p>
          <p>....</p>
        </div>
      </div>
    </div>
  );
};

export default Projeto;
