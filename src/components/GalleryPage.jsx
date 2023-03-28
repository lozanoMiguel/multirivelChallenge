import React, { Suspense } from 'react'
import imgUrl from '../imgUrl.json'

const Navbar = React.lazy(() => import('./Navbar'))
const Porfolio = React.lazy(() => import('./PageComponents/Porfolio')) 
const Footer = React.lazy(() => import('./Footer'))


export default function GalleryPage() {
  
 return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar
          isHome = {false}
        />
        <Porfolio 
          data = { imgUrl.gallery }
          title ={ "Galeria" }
          isGallery = {false}
          />
        <Footer />
      </Suspense>
    </div>
  )
}
