import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';
import HeroBanner from '../components/Banner/Banner';
import Preloader from '../components/preloader';

function Accueil() {
  return (
    <>
      <Preloader />
      <Header />
      <HeroBanner/>
      <Footer />
    </>
  )
}

export default Accueil;