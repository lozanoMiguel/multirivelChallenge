import React from 'react'
import NavbarProject from './PageComponents/NavbarProject'
import Porfolio from './PageComponents/Porfolio'
import Footer from '../Footer'
import imgUrl from '../../imgUrl.json';

export default function VillaPalma() {

  const data = [

    {
      id:1,
      imgSrc: "img/portfolio/V02/exterior/IMG_0365.avif"
    },
    {
      id:2,
      imgSrc: "img/portfolio/V02/exterior/IMG_0367.avif"
    },
    {
      id:3,
      imgSrc: "img/portfolio/V02/exterior/IMG_0373.avif"
    },
    {
      id:4,
      imgSrc: "img/portfolio/V02/exterior/IMG_0476.avif"
    },
    {
      id:5,
      imgSrc: "img/portfolio/V02/exterior/IMG_0479.avif"
    },
    {
      id:6,
      imgSrc: "img/portfolio/V02/exterior/IMG_0483.avif"
    },
    {
      id:7,
      imgSrc: "img/portfolio/V02/baños/IMG_0347.avif"
    },
    {
      id:8,
      imgSrc: "img/portfolio/V02/baños/IMG_0358.avif"
    },
    {
      id:9,
      imgSrc: "img/portfolio/V02/baños/IMG_0442.avif"
    },
    {
      id:10,
      imgSrc: "img/portfolio/V02/baños/IMG_0450.avif"
    },
    {
      id:11,
      imgSrc: "img/portfolio/V02/cocina/IMG_0342.avif",
    },
    {
      id:12,
      imgSrc: "img/portfolio/V02/interior/IMG_0310.avif"
    },
    {
      id:13,
      imgSrc: "img/portfolio/V02/interior/IMG_0310A.avif"
    },
    {
      id:14,
      imgSrc: "img/portfolio/V02/interior/IMG_0310AB.avif"
    },
    {
      id:15,
      imgSrc: "img/portfolio/V02/interior/IMG_0326.avif"
    },
    {
      id:16,
      imgSrc: "img/portfolio/V02/interior/IMG_0363.avif"
    },
    {
      id:17,
      imgSrc: "img/portfolio/V02/interior/IMG_0384.avif"
    },
    {
      id:18,
      imgSrc: "img/portfolio/V02/interior/IMG_0405.avif"
    },
    {
      id:19,
      imgSrc: "img/portfolio/V02/interior/IMG_0405A.avif"
    },
    {
      id:20,
      imgSrc: "img/portfolio/V02/interior/IMG_0424.avif"
    },
    {
      id:21,
      imgSrc: "img/portfolio/V02/interior/IMG_0431.avif"
    },
    {
      id:22,
      imgSrc: "img/portfolio/V02/interior/IMG_0434.avif"
    },
    {
      id:23,
      imgSrc: "img/portfolio/V02/interior/IMG_0462.avif"
    },
  // Agrega aquí todas las rutas de las imágenes que deseas mostrar
];

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
