import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Fiche from './Components/FicheLogement/Fiche';
import Propos from './Components/Propos/Propos';
import NotFound from './Components/NotFound/Notfound'
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'         element= {<Home />} />
        <Route path='a-propos'  element= {<Propos />} />
        <Route path='fiche/:id' element= {<Fiche />} />     
        <Route path='*'         element= {<NotFound />} />
      </Routes>      
    </div>
  );
}
export default App;
