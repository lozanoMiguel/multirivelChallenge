import React, { useState } from 'react'
import '../../../styles/Porfolio.css'
import '../../../styles/Gallery.css'
import Modal from './Modal';

export default function Gallery({gallery}) {

  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

 //console.log(Object.entries(gallery))
  //obtengo el url de la imagen y su ubicacion
  const handlerClick = (item, index) =>{
    setCurrentIndex(index)
    setClickedImg(item);
  };

  //foto a la derecha
  const handleRotationRight = () =>{
    const totalGallery = Object.keys(gallery).length;
    if(currentIndex +1 >= totalGallery){
      setCurrentIndex(0);
      const newUrl = `${Object.entries(gallery)[0][1].imgSrc}`;
      setClickedImg(newUrl)
      return;
    }
    const newIndex = currentIndex + 1;
    
    const newUrl = Object.entries(gallery).filter((item)=>{
      return Object.entries(gallery)[item[0]][1].id === newIndex;
    })
    
    const newItem = newUrl[0][1].imgSrc;
    setClickedImg(newItem);
    setCurrentIndex(newIndex)
  }
  //foto a la izquierda
  const handleRotationLeft = () => {
    const totalGallery = Object.keys(gallery).length;
    if (currentIndex === 0) {
      setCurrentIndex(totalGallery - 1);
      const newUrl = Object.entries(gallery)[totalGallery - 1][1].imgSrc;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = Object.entries(gallery).filter((item)=>{
      return Object.entries(gallery)[item[0]][1].id === newIndex;
    })
    
    const newItem = `${newUrl[0][1].imgSrc}`;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };
  
  return (
      <div className='containerGallery'>
        {gallery.map((value)=>(
          <div key={value.id} className='imageCard'>
            <img src={ value.imgSrc } alt="" className='image' onClick={()=>handlerClick(value.imgSrc, value.id)}/>
          </div>
        ))}
      { clickedImg && <Modal 
                        clickedImg={ clickedImg } 
                        handleRotationRight={ handleRotationRight }
                        setClickedImg = { setClickedImg }
                        handleRotationLeft={ handleRotationLeft }/>}
      </div>
  )
}

/*gallery.map((value)=>(
  <div key={value.id} className='col-sm-6 col-md-4 col-lg-4 despues'>
    <div className='portfolio-item'>
      <div className='hover-bg'>
        <a href={ value.imgSrc } title='Multirivel©' data-lightbox-gallery='gallery1'></a>
        <div className='hover-text'>
          <h4></h4>
        </div>
        <img src={ value.imgSrc } alt="" className='img-responsive' />
      </div>
    </div>
  </div>*/
