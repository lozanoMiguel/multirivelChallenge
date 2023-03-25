import React from 'react'
import Navbar from './Navbar'
import Porfolio from './PageComponents/Porfolio'
import Footer from './Footer'
import imgUrl from '../imgUrl.json';
import { useLocation } from 'react-router';

export default function Page() {

  const location = useLocation();
  
  const url = () =>{
    let Url;
    if(location.state === "Villa Florence"){
      Url = imgUrl.villaFlorence 
    }else if(location.state === "Villa Olivia"){
      Url = imgUrl.villaOlivia
    }else{
      Url = imgUrl.villaPalma
    }
    return Url;
  }

  return (
    <div>
      <Navbar 
        isHome = {false} 
      />
      <Porfolio 
        data = { url() }
        title = { location.state }
        isGallery = {true}
        />
      <Footer />
    </div>
  )
}
