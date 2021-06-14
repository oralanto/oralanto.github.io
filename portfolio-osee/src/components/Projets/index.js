import React from 'react';

import Oboardgame from './Logo-oboardgame.png';
import Converter from './Converter-spe-react.png'

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
          <p className="Projets__card__desc">Projet spé react en formation</p>
      <a
        className="Projets__card__link"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/oralanto/Converter-projet-React"
      >Voir le projet</a>
        </div>
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
      </div>
    </div>
  );
};

export default Projets;
