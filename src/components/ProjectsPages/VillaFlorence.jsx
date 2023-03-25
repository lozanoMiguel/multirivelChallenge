import React from 'react'
import NavbarProject from './PageComponents/NavbarProject'
import Porfolio from './PageComponents/Porfolio'
import Footer from '../Footer'
import imgUrl from '../../imgUrl.json';


export default function VillaFlorence() {

 

  return (
    <div>
      <NavbarProject />
      <Porfolio 
        data = { imgUrl.villaFlorence }
        title = { "Villa Florence" }
        isGallery = {true}
        />
      <Footer />
    </div>
  )
}
