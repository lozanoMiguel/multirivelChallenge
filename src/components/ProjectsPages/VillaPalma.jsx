import React from 'react'
import NavbarProject from './PageComponents/NavbarProject'
import Porfolio from './PageComponents/Porfolio'
import Footer from '../Footer'
import imgUrl from '../../imgUrl.json';

export default function VillaPalma() {


return (
    <div>
      <NavbarProject />
      <Porfolio 
        data = { imgUrl.villaPalma}
        title ={ "Villa Palma" }
        isGallery = {true}
        />
      <Footer />
    </div>
  )
}
