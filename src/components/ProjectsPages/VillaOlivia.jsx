import React from 'react'
import NavbarProject from './PageComponents/NavbarProject'
import Porfolio from './PageComponents/Porfolio'
import Footer from '../Footer'
import imgUrl from '../../imgUrl.json';

export default function VillaOlivia() {



  return (
    <div>
      <NavbarProject />
      <Porfolio 
        data = { imgUrl.villaOlivia }
        title = { "Villa Olivia" }
        isGallery = {true}
        />
      <Footer />
    </div>
  )
}
