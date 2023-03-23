import React, { useState } from 'react'
import '../../../styles/Porfolio.css'
import Gallery from './Gallery'


export default function Porfolio( props ) {

  const [tag, setTag] = useState('exterior');
  
  const handleBtn = (btnInfo) =>{
    setTag(btnInfo);
  }

  const getData = () =>{
    let datos;
    if(!props.isGallery){
      datos = props.data.filter(d => d.tag === tag);
    }else{
      datos = props.data;
    }
    return datos;
  }

  let jsx = null;

  if(props.isGallery){
    jsx = <ol className="type">
            <li><a href="#" data-filter=".despues" className="active">Actualidad</a></li>
          </ol>
  }
  else{
    jsx = <ol className="type">
            <li><a href="#" id="btn-gallery" className="active" data-filter=".exterior" onClick={()=>{handleBtn('exterior')}}>Exteriores</a></li>
            <li><a href="#" id="btn-gallery" data-filter=".interior" onClick={()=>{handleBtn('interior')}}>Interiores</a></li>
            <br />
            <li><a href="#" id="btn-gallery" data-filter=".cocinas" onClick={()=>{handleBtn('cocina')}}>Cocinas</a></li>
            <li><a href="#" id="btn-gallery" data-filter=".baños" onClick={()=>{handleBtn('baños')}}>Baños</a></li>
            <br />
            <li><a href="#" id="btn-gallery" data-filter=".escaleras" onClick={()=>{handleBtn('escaleras')}}>Escaleras</a></li>
            <li><a href="#" id="btn-gallery" data-filter=".piscinas" onClick={()=>{handleBtn('pool')}}>Piscinas</a></li>
          </ol>
  }

  return (
    <div id="portfolio">
    <div className="section-title text-center center">
      <div className="overlay">
        <h2>{ props.title }</h2>
        <hr />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed.</p>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="categories">
          <ul className="cat">
            <li>
              {jsx}
            </li>
          </ul>
          <div className="clearfix"></div>
        </div>
      </div>
      <div className="row">
        <Gallery 
            gallery = { getData() }
          />
      </div>
    </div>
  </div>
  )
}
