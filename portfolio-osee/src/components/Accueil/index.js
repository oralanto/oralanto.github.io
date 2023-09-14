import React from "react";
import linkedin from "../../img/linkedin.svg";
import "./style.css";

const Accueil = () => {
  const menuItems = [
    {
      href: "#acceuil",
      text: "Accueil",
    },
    {
      href: "#presentation",
      text: "Présentation",
    },
    {
      href: "#competences",
      text: "Compétences",
    },
    {
      href: "#projets",
      text: "Projets",
    },
    {
      href: "#contact",
      text: "Contact",
    },
  ];

  return (
    <div className="Accueil" id="acceuil">
      <header className="header">
        <p className="logo">O.R</p>
        <menu className="menu">
          {menuItems.map(({ href, text }) => (
            <a className="menu-item disabled" href={href}>
              {text}
            </a>
          ))}
        </menu>
      </header>
      <div className="infos">
        <h2 className="name">Osée Ralantoarison</h2>
        <h1 className="title-job">Développeur web Javascript</h1>
      </div>
      <div className="linkedin">
        <a
          className="linkedin-link"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/os%C3%A9e-ralantoarison-2b2265195/"
        >
          <img src={linkedin} alt="Icon linkedin développeur web" />
          <p className="linkedin-text">Mon profil Linkedin</p>
        </a>
      </div>
    </div>
  );
};

export default Accueil;
