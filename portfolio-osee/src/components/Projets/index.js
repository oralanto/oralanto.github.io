import React from "react";
import Oboardgame from "../../img/Logo-oboardgame.png";
import Converter from "../../img/Converter-spe-react.png";
import Chatroom from "../../img/Chatroom-spe-react.png";
import github from "../../img/github.png";
import "./style.css";

const Projets = () => {
  const projects = [
    {
      title: "O'BoardGame",
      description: "Projet de fin d'étude",
      alt: "Projet location de jeux de sociétés entre particulier avec react node express redux api",
      href: "https://github.com/oralanto/Projet-titre-pro",
      src: Oboardgame,
    },
    {
      title: "Converter",
      description: "Projet React: Convertisseur de devise",
      alt: "Convertisseur de monnaie devise projet react node api",
      href: "https://github.com/oralanto/Converter-projet-React",
      src: Converter,
    },
    {
      title: "Chatroom",
      description: "Projet React: Simulation de Chatroom",
      alt: "Chatroom salon de chat messagerie projet react node",
      href: "https://github.com/oralanto/Chatroom-v1-React",
      src: Chatroom,
    },
  ];
  return (
    <div className="Projets" id="projets">
      <h2 className="Projets__title">Projets</h2>
      <div className="Projets__cards">
        {projects.map(({ title, description, alt, href, src }) => (
          <article className="Projets__card">
            <img src={src} className="Projets__card__img" alt={alt} />
            <p className="Projets__card__title">{title}</p>
            <p className="Projets__card__desc">{description}</p>
            <a
              className="Projets__card__link"
              target="_blank"
              rel="noreferrer"
              href={href}
            >
              Voir le projet
            </a>
          </article>
        ))}
      </div>
      <div className="Projets__github">
        <a
          className="Projets__github__link"
          target="_blank"
          rel="noreferrer"
          href="https://www.github.com/oralanto/"
        >
          <img src={github} alt="Icon Github" />
          <p className="Projets__github__text">Mon Github</p>
        </a>
      </div>
    </div>
  );
};

export default Projets;
