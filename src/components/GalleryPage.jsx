import React from 'react'
import Navbar from './Navbar'
import Porfolio from './PageComponents/Porfolio'
import Footer from './Footer'
import imgUrl from '../imgUrl.json';

export default function GalleryPage() {

 return (
    <div>
      <Navbar
        isHome = {false}
      />
      <Porfolio 
        data = { imgUrl.gallery }
        title ={ "Galeria" }
        isGallery = {false}
        />
      <Footer />
    </div>
  )
}
