import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';
import HeroBanner from '../components/Banner/Banner';
import Preloader from '../components/preloader';
import About from '../components/Acceuil/About';
import Portfolio from '../components/Acceuil/Portfolio';
import Services from '../components/Acceuil/Services';

function Accueil() {
  return (
    <>
      <Preloader />
      <Header />
      <HeroBanner/>
      <About />
      <Portfolio />
      <Footer />
    </>
  )
}

export default Accueil;