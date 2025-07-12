import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1>Eu sou Murilo Rocha da Rosa</h1>
        <h2>Desenvolvedor Full- Stack</h2>
        <button>ENTRE EM CONTATO</button>
      </div>
    </div>
  );
};

export default Hero;
