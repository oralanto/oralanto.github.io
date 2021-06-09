import github from './github.png'
import './style.css';

const Competences = () => {
  return (
    <div className="Competences">
      <h2 className="Competences__title">Compétences</h2>
      <div className="Competences__list">
        <p className="Competences__item">HTML</p>
        <p className="Competences__item">CSS</p>
        <p className="Competences__item">Javascript</p>
        <p className="Competences__item">React</p>
        <p className="Competences__item">Redux</p>
        <p className="Competences__item">Material-ui</p>
        <p className="Competences__item">Node</p>
        <p className="Competences__item">Express</p>
        <p className="Competences__item">PostgreSQL</p>
        <p className="Competences__item">Git/Github</p>
      </div>
      <div className="Competences__github">
      <a
        className="Competences__github__link"
        target="_blank"
        rel="noreferrer"
        href="https://www.github.com/oralanto/"
      >
      <img
          src={github}
          alt="Icon made by Pixel perfect from www.flaticon.com" />
          <p className="Competences__github__text">Mon Github</p>
      </a>
      </div>
    </div>
  )
};

export default Competences;
