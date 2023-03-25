import React, { useState } from 'react'
import '../../../styles/Porfolio.css'
import Gallery from './Gallery'


export default function Porfolio( props ) {

  const [tag, setTag] = useState('exterior');
  
  

  //obtengo el nombre de la galeria que quiero mostrar
  const handleBtn = (btnInfo) =>{
    setTag(btnInfo);
  }
  //obtengo el url de las imagenes que deseo motrar en base al tag que se selecciono
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

  //condicional para determinar que botones mostrar. Se diferencia entre la galeria en general o la galeria especifica de cada proyecto
  //en la galeria, con el operador ternario pintamos de rojo segun el tag que se seleccione
  if(props.isGallery){
    jsx = <ol className="type">
            <li><a href="#" data-filter=".despues" className="active">Actualidad</a></li>
          </ol>
  }
  else{
    jsx = <ol className="type">
            <li><a href="#" id="btn-gallery" className={ tag === 'exterior' ? "active" : ""} data-filter=".exterior" onClick={()=>{handleBtn('exterior')}}>Exteriores</a></li>
            <li><a href="#" id="btn-gallery" className={ tag === 'interior' ? "active" : ""} data-filter=".interior" onClick={()=>{handleBtn('interior')}}>Interiores</a></li>
            <br />
            <li><a href="#" id="btn-gallery" className={ tag === 'cocina' ? "active" : ""} data-filter=".cocinas" onClick={()=>{handleBtn('cocina')}}>Cocinas</a></li>
            <li><a href="#" id="btn-gallery" className={ tag === 'baños' ? "active" : ""} data-filter=".baños" onClick={()=>{handleBtn('baños')}}>Baños</a></li>
            <br />
            <li><a href="#" id="btn-gallery" className={ tag === 'escaleras' ? "active" : ""} data-filter=".escaleras" onClick={()=>{handleBtn('escaleras')}}>Escaleras</a></li>
            <li><a href="#" id="btn-gallery" className={ tag === 'pool' ? "active" : ""} data-filter=".piscinas" onClick={()=>{handleBtn('pool')}}>Piscinas</a></li>
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
