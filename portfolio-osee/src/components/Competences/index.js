import React from "react";
import "./style.css";

const Competences = () => {
  const items = [
    "HTML",
    "CSS/SCSS",
    "JAVASCRIPT",
    "REACT",
    "REDUX",
    "NODE",
    "NEXT",
    "Git/Github",
    "PostgreSQL",
    "MONGODB",
  ];

  return (
    <div className="Competences" id="competences">
      <h2 className="Competences__title">Compétences</h2>
      <div className="Competences__list">
        {items.map((item) => (
          <p className="Competences__item">{item}</p>
        ))}
      </div>
    </div>
  );
};

export default Competences;
