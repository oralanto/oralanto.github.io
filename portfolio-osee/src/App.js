import Accueil from './components/Accueil';
import Presentation from './components/Presentation';
import Competences from './components/Competences';
import Footer from './components/Footer';
import Projets from './components/Projets';

import './App.css';

function App() {
  return (
    <div className="App">
    <Accueil />
    <Presentation />
    <Competences />
    <Projets />
    <Footer />
    </div>
  );
}

export default App;
