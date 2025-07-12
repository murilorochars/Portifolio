import styles from "./hero.module.css";

const Hero = () => {
  const data = "Desenvolvedor Full-Stack";
  console.log(data.length);
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.typing}>Murilo Rocha da Rosa</h1>
        <h2 className={styles.typ}>Desenvolvedor Full-Stack</h2>
        <button>ENTRE EM CONTATO</button>
      </div>
    </div>
  );
};

export default Hero;
