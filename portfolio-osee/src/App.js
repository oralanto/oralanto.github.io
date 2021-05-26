import Accueil from './components/Accueil';
import Presentation from './components/Presentation';
import Competences from './components/Competences';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
    <Accueil />
    <Presentation />
    <Competences />
    <Footer />
    </div>
  );
}

export default App;
