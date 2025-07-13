import React from "react";
import styles from "./Conhecimentos.module.css";

export interface ConhecimentoItem {
  id: number;
  name: string;
  img: string;
  category: string;
}

const Conhecimentos = () => {
  const conhecimentos: ConhecimentoItem[] = [
    // Frontend
    {
      id: 1,
      name: "HTML5",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      category: "Frontend",
    },
    {
      id: 2,
      name: "CSS3",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      category: "Frontend",
    },
    {
      id: 3,
      name: "JavaScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      category: "Frontend",
    },
    {
      id: 4,
      name: "TypeScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      category: "Frontend",
    },
    {
      id: 5,
      name: "React",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      category: "Frontend",
    },
    {
      id: 6,
      name: "Next.js",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      category: "Frontend",
    },
    {
      id: 7,
      name: "Figma",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      category: "Design",
    },
    // Backend
    {
      id: 8,
      name: "Node.js",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      category: "Backend",
    },
    {
      id: 9,
      name: "Express",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      category: "Backend",
    },
    {
      id: 10,
      name: "Python",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      category: "Backend",
    },
    // Database
    {
      id: 11,
      name: "MySQL",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      category: "Database",
    },
  ];

  // Agrupar por categoria
  const conhecimentosPorCategoria = conhecimentos.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, ConhecimentoItem[]>);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Minhas Habilidades</h2>

      {Object.entries(conhecimentosPorCategoria).map(([category, items]) => (
        <div key={category} className={styles.categorySection}>
          <h3 className={styles.categoryTitle}>{category}</h3>
          <div className={styles.skillsGrid}>
            {items.map((item) => (
              <div key={item.id} className={styles.skillCard}>
                <div className={styles.skillIconWrapper}>
                  <img
                    src={item.img}
                    alt={item.name}
                    className={styles.skillIcon}
                    loading="lazy"
                  />
                </div>
                <span className={styles.skillName}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Conhecimentos;
