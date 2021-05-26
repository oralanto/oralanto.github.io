import logo from './OR-logo.png';
import linkedin from './linkedin.svg';
import './style.css';

const Accueil = () => {
  return (
    <div className="Accueil">
      <header className="header">
        <img
          className="logo"
          src={logo}
          alt="logo" />
        <menu className="menu">
          <p className="menu-item disabled">Accueil</p>
          <p className="menu-item disabled">Présentation</p>
          <p className="menu-item disabled">Compétences</p>
          <p className="menu-item">Contact</p>
        </menu>
      </header>
      <div className="infos">
        <h1 className="name">Osée Ralantoarison </h1>
        <h2 className="title-job">Développeur web</h2>
      </div>
      <div className="linkedin">
      <a
        className="linkedin-link"
        target="_blank"
        rel="noopener"
        href="https://www.linkedin.com/in/os%C3%A9e-ralantoarison-2b2265195/"
      >
      <img
          src={linkedin}
          alt="Icon made by Pixel perfect from www.flaticon.com" />
          <p className="linkedin-text">Mon profil Linkedin</p>
      </a>
      </div>
    </div>
  )
};

export default Accueil;
