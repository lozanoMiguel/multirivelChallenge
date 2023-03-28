import React, { Suspense, useEffect} from 'react'
const Navbar = React.lazy(() => import('./Navbar'))
const Header = React.lazy(() => import('./Header'))
const About = React.lazy(() => import('./About'))
const ProjectMenu = React.lazy(() => import('./ProjectMenu'))
const Team = React.lazy(() => import('./Team'))
const CallReservation = React.lazy(() => import('./CallReservation'))
const Contact = React.lazy(() => import('./Contact'))
const Footer = React.lazy(() => import('./Footer'))


export default function Home() {

 useEffect(() => {
    window.scrollTo(0, 0)
  },[])

  return (
    <div id="home" className='home'>
      <Suspense>
        <Navbar 
          isHome = {true}
        />
        <Header />
        <About/>
        <ProjectMenu />
        <Team />
        <CallReservation />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  )
}
