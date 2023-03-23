import React from 'react'
import NavbarProject from './PageComponents/NavbarProject'
import Porfolio from './PageComponents/Porfolio'
import Footer from '../Footer'

export default function VillaOlivia() {

  const data = [
    // "img/portfolio/V03/HR Villa Olivia-000.jpg",
    {
      id:1,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-001.jpg"
    },
    {
      id:2,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-002.jpg"
    },
    {
      id:3,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-003.avif"
    },
    {
      id:4,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-004.jpg"
    },
    {
      id:5,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-005.jpg"
    },
    {
      id:6,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-006.jpg"
    },
    {
      id:7,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-007.jpg"
    },
    {
      id:8,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-008.jpg"
    },
    {
      id:9,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-009.jpg"
    },
    {
      id:10,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-010.jpg"
    },
    {
      id:11,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-011.jpg"
    },
    {
      id:12,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-012.jpg"
    },
    {
      id:13,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-013.jpg"
    },
    {
      id:14,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-014.jpg"
    },
    {
      id:15,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-015.jpg"
    },
    {
      id:16,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-016.jpg"
    },
    {
      id:17,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-017.jpg"
    },
    {
      id:18,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-018.jpg"
    },
    {
      id:19,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-019.jpg"
    },
    {
      id:20,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-020.jpg"
    },
    {
      id:21,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-021.jpg"
    },
    {
      id:22,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-022.jpg"
    },
    {
      id:23,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-023.jpg"
    },
    {
      id:24,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-024.jpg"
    },
    {
      id:25,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-025.jpg"
    },
    {
      id:26,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-026.jpg"
    },
    {
      id:27,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-027.jpg"
    },
    {
      id:28,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-028.jpg"
    },
    {
      id:29,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-029.jpg"
    },
    {
      id:30,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-030.jpg"
    },
    {
      id:31,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-031.jpg"
    },
    {
      id:32,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-032.jpg"
    },
    {
      id:33,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-033.jpg"
    },
    {
      id:34,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-034.jpg"
    },
    {
      id:35,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-035.jpg"
    },
    {
      id:36,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-036.jpg"
    },
    {
      id:37,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-037.jpg",
    },
    {
      id:38,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-038.jpg"
    },
    {
      id:39,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-039.jpg"
    },
    {
      id:40,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-040.jpg"
    },
    {
      id:41,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-041.jpg"
    },
    {
      id:42,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-042.jpg"
    },
    {
      id:43,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-043.jpg"
    },
    {
      id:44,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-044.jpg"
    },
    {
      id:45,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-045.jpg"
    },
    {
      id:46,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-046.jpg"
    },
    {
      id:47,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-047.jpg"
    },
    {
      id:48,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-048.jpg"
    },
    {
      id:49,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-049.jpg"
    },
    {
      id:50,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-050.jpg"
    },
    {
      id:51,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-051.jpg"
    },
    {
      id:52,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-052.jpg"
    },
    {
      id:53,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-053.jpg"
    },
    {
      id:54,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-054.jpg"
    },
    {
      id:55,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-055.jpg"
    },
    {
      id:56,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-056.jpg"
    },
    {
      id:57,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-057.jpg"
    },
    {
      id:58,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-058.jpg"
    },
    {
      id:59,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-059.jpg"
    },
    {
      id:60,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-060.jpg"
    },
    {
      id:61,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-061.jpg"
    },
    {
      id:62,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-062.jpg"
    },
    {
      id:63,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-063.jpg"
    },
    {
      id:64,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-064.jpg"
    },
    {
      id:65,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-065.jpg"
    },
    {
      id:66,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-066.jpg"
    },
    {
      id:67,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-067.jpg"
    },
    {
      id:68,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-068.jpg"
    },
    {
      id:69,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-069.jpg"
    },
    {
      id:70,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-070.jpg"
    },
    {
      id:71,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-071.jpg"
    },
    {
      id:72,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-072.jpg"
    },
    {
      id:73,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-073.jpg",
    },
    {
      id:74,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-074.jpg"
    },
    {
      id:75,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-075.jpg"
    },
    {
      id:76,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-076.jpg"
    },
    {
      id:77,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-077.jpg"
    },
    {
      id:78,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-078.jpg"
    },
    {
      id:79,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-079.jpg"
    },
    {
      id:80,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-080.jpg"
    },
    {
      id:81,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-081.jpg"
    },
    {
      id:82,
      imgSrc:  "img/portfolio/V03/HR Villa Olivia-082.jpg"
    },
    {
      id:83,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-083.jpg"
    },
    {
      id:84,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-084.jpg"
    },
    {
      id:85,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-085.jpg"
    },
    {
      id:86,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-086.jpg"
    },
    {
      id:87,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-087.jpg"
    },
    {
      id:88,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-088.jpg"
    },
    {
      id:89,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-089.jpg"
    },
    {
      id:90,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-090.jpg"
    },
    {
      id:91,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-091.jpg"
    },
    {
      id:92,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-092.jpg"
    },
    {
      id:93,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-093.jpg"
    },
    {
      id:94,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-094.jpg"
    },
    {
      id:95,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-095.jpg"
    },
    {
      id:96,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-096.jpg"
    },
    {
      id:97,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-097.jpg"
    },
    {
      id:98,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-098.jpg"
    },
    {
      id:99,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-099.jpg"
    },
    {
      id:100,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-100.jpg"
    },
    {
      id:101,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-101.jpg"
    },
    {
      id:102,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-102.jpg"
    },
    {
      id:103,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-103.jpg"
    },
    {
      id:104,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-104.jpg"
    },
    {
      id:105,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-105.jpg"
    },
    {
      id:106,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-106.jpg"
    },
    {
      id:107,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-107.jpg"
    },
    {
      id:108,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-108.jpg"
    },
    {
      id:109,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-109.jpg"
    },
    {
      id:110,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-110.jpg"
    },
    {
      id:111,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-111.jpg"
    },
    {
      id:112,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-112.jpg"
    },
    {
      id:113,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-113.jpg"
    },
    {
      id:114,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-114.jpg"
    },
    {
      id:115,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-115.jpg"
    },
    {
      id:116,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-116.jpg"
    },
    {
      id:117,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-117.jpg"
    },
    {
      id:118,
      imgSrc: "img/portfolio/V03/HR Villa Olivia-118.jpg"
    },
    // Agrega aquí todas las rutas de las imágenes que deseas mostrar
];

  return (
    <div>
      <NavbarProject />
      <Porfolio 
        data = { data }
        title = { "Villa Olivia" }
        isGallery = {true}
        />
      <Footer />
    </div>
  )
}
