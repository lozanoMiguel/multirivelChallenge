import React, {useEffect, Suspense} from 'react'
import imgUrl from '../imgUrl.json';
import { useLocation } from 'react-router';

const Navbar = React.lazy(() => import('./Navbar'))
const Porfolio = React.lazy(() => import('./PageComponents/Porfolio')) 
const Footer = React.lazy(() => import('./Footer'))


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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar 
          isHome = {false} 
        />
        <Porfolio 
          data = { url() }
          title = { location.state }
          isGallery = {true}
          />
        <Footer />
      </Suspense>
    </div>
  )
}
