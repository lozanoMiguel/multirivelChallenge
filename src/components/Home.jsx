import React from 'react'
import Navbar from './Navbar.jsx';
import Header from './Header.jsx';
import About from './About.jsx';
import ProjectMenu from './ProjectMenu.jsx';
import Team from './Team.jsx';
import CallReservation from './CallReservation.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';


export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <ProjectMenu />
      <Team />
      <CallReservation />
      <Contact />
      <Footer />
    </div>
  )
}
