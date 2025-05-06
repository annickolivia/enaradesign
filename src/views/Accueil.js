import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';
import HeroBanner from '../components/Acceuil/Banner';
import Preloader from '../components/preloader';
import About from '../components/Acceuil/About';
import Portfolio from '../components/Acceuil/Portfolio';

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