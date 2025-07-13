import style from "./projetos.module.css";
import { FaGithub } from "react-icons/fa";

const Projeto = () => {
  return (
    <div id="projetos" className={style.main}>
      <h1>Meus Projetos</h1>
      <div className={style.cards}>
        <div className={style.card}>
          <h2>Aged Care</h2>
          <video src="" controls />
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
          <video src="" controls />
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
          <video src="" controls />
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
            Trabalho final de Algoritmos e Lógica Computacional. Controle de
            estoque com relatórios e aviso de baixo estoque via email.
          </p>
          <p>PYTHON - EMAILMAILER - SQLITE - PEEWEE</p>
        </div>

        <div className={style.card}>
          <h2>Indecor</h2>
          <video src="" controls />
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
          <video src="" controls />
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
          <video src="" controls />
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
