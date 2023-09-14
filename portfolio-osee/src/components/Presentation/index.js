import React from "react";
import "./style.css";

const Presentation = () => {
  return (
    <div className="Presentation" id="presentation">
      <h2 className="Presentation__title">Présentation</h2>
      <p className="Presentation__text">
        Bonjour et bienvenue sur mon portfolio.
      </p>
      <p className="Presentation__text">
        Je suis un développeur web avec une large gamme de compétences
        techniques incluant React.js, Next.js, Tailwind, Storybook, Jest, SCSS,
        JavaScript, MongoDB, Redux, Express, Node, Bootstrap, AWS, PostgreSQL,
        Git, GitHub, Bitbucket, Jira, Agile et Storybook ainsi que le design
        system.
      </p>
      <p className="Presentation__text">
        Passionné par la technologie au sens large, j’aime l’aspect technique.
        Je travaille dans le but d’apprendre et m’enrichir de connaissances.
        J’aime délivrer un code propre, testé et documenté.
      </p>
      <p className="Presentation__text">
        Disponible pour travailler en freelance ou CDI, en full remote ou proche
        de chez moi (haute-savoie / Genève) avec une équipe passionné et
        investi. N'hésitez pas à me contacter si vous cherchez un développeur
        web pour votre projet.
      </p>
    </div>
  );
};

export default Presentation;
