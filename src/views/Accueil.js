import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroBanner from '../components/Acceuil/Banner';
import Preloader from '../components/preloader';
// import About from '../components/Acceuil/About';
import Section2 from '../components/Acceuil/section2';
import Portfolio from '../components/Acceuil/Portfolio';
import Section3 from '../components/Acceuil/section3';

function Accueil() {
  return (
    <>
      <Preloader />
      <Header />
      <HeroBanner/>
      {/* <About /> */}
      <Section2 />
      {/* <Portfolio /> */}
      <Section3 />
      <Footer />
    </>
  )
}

export default Accueil;