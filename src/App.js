import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GalleryPage from './components/GalleryPage';
import Page from './components/Page';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/gallery' element={<GalleryPage />}/>
          <Route path='/page' element={<Page />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
