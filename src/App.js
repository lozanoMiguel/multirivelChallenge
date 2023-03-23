import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VillaFlorence from './components/ProjectsPages/VillaFlorence.jsx';
import VillaOlivia from './components/ProjectsPages/VillaOlivia.jsx';
import VillaPalma from './components/ProjectsPages/VillaPalma.jsx';
import GalleryPage from './components/GalleryPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/gallery' element={<GalleryPage />}/>
          <Route path='/villaflorence' element={ <VillaFlorence /> }/>
          <Route path='/villaolivia' element={ <VillaOlivia /> }/>
          <Route path='/villapalma' element={ <VillaPalma /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
