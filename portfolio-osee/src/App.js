import Accueil from './components/Accueil';
import Presentation from './components/Presentation';
import Competences from './components/Competences';
import Footer from './components/Footer';
import Projets from './components/Projets';

import AnimatedCursor from "react-animated-cursor"

import './App.css';

function App() {
  return (
    <div className="App">
    <Accueil />
    <Presentation />
    <Competences />
    <Projets />
    <Footer />
    <AnimatedCursor
      innerSize={15}
      outerSize={30}
      color='117, 19, 245'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={1.5}
    />
    </div>
  );
}

export default App;
