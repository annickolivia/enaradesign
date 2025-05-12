import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroBanner from '../components/Acceuil/Banner';
import Preloader from '../components/preloader';
// import About from '../components/Acceuil/About';
import Section2 from '../components/Acceuil/section2';
import Portfolio from '../components/Acceuil/Portfolio';
import Section3 from '../components/Acceuil/section3';
import Section4 from '../components/Acceuil/section4';
import Section5 from '../components/Acceuil/Section5';
import Section6 from '../components/Acceuil/section6';

function Accueil() {
  return (
    <>
      {/* <Preloader /> */}
      <Header />
      <HeroBanner/>
      {/* <About /> */}
      <Section2 />
      {/* <Portfolio /> */}
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </>
  )
}

export default Accueil;