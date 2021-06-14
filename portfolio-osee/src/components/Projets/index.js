import React from 'react';

import Oboardgame from './Logo-oboardgame.png';
import Converter from './Converter-spe-react.png';
import Chatroom from './Chatroom-spe-react.png';
import github from './github.png'

import './style.css';

const Projets = () => {
  return (
    <div className="Projets">
      <h2 className="Projets__title">Projets</h2>
      <div className="Projets__cards">
        <div className="Projets__card">
      <img
          src={Oboardgame}
          className="Projets__card__img"
          alt="Icon linkedin made by Pixel perfect from www.flaticon.com" />
          <p className="Projets__card__title">O'BoardGame</p>
          <p className="Projets__card__desc">Projet de fin d'étude</p>
      <a
        className="Projets__card__link"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/oralanto/Projet-titre-pro"
      >Voir le projet</a>
        </div>
        <div className="Projets__card">
      <img
          src={Converter}
          className="Projets__card__img"
          alt="Icon linkedin made by Pixel perfect from www.flaticon.com" />
          <p className="Projets__card__title">Converter</p>
          <p className="Projets__card__desc">Projet spé react en formation: Convertisseur de devise</p>
      <a
        className="Projets__card__link"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/oralanto/Converter-projet-React"
      >Voir le projet</a>
        </div>
        <div className="Projets__card">
      <img
          src={Chatroom}
          className="Projets__card__img"
          alt="Icon linkedin made by Pixel perfect from www.flaticon.com" />
          <p className="Projets__card__title">Chatroom</p>
          <p className="Projets__card__desc">Projet spé react en formation: Simulation de Chatroom</p>
      <a
        className="Projets__card__link"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/oralanto/Chatroom-v1-React"
      >Voir le projet</a>
        </div>
      </div>
      <div className="Projets__github">
      <a
        className="Projets__github__link"
        target="_blank"
        rel="noreferrer"
        href="https://www.github.com/oralanto/"
      >
      <img
          src={github}
          alt="Icon made by Pixel perfect from www.flaticon.com" />
          <p className="Projets__github__text">Mon Github</p>
      </a>
      </div>
    </div>
  );
};

export default Projets;
