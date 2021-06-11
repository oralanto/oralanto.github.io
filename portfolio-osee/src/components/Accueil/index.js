import React from 'react';

import linkedin from './linkedin.svg';
import './style.css';

const Accueil = () => {
  return (
    <div className="Accueil">
      <header className="header">
        <p className="logo">O.R</p>
        <menu className="menu">
          <p className="menu-item disabled">Accueil</p>
          <p className="menu-item disabled">Présentation</p>
          <p className="menu-item disabled">Compétences</p>
          <p className="menu-item disabled">Projets</p>
          <p className="menu-item">Contact</p>
        </menu>
      </header>
      <div className="infos">
        <h2 className="name">Osée Ralantoarison</h2>
        <h1 className="title-job">Développeur web</h1>
      </div>
      <div className="linkedin">
      <a
        className="linkedin-link"
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/os%C3%A9e-ralantoarison-2b2265195/"
      >
      <img
          src={linkedin}
          alt="Icon linkedin made by Pixel perfect from www.flaticon.com" />
          <p className="linkedin-text">Mon profil Linkedin</p>
      </a>
      </div>
    </div>
  )
};

export default Accueil;
