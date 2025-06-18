import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroBanner from '../components/Acceuil/Banner';
import White from './white';
import Bureau3D from './Bureau3D';
import Preloader from '../components/preloader';
// import About from '../components/Acceuil/About';
import Section2 from '../components/Acceuil/section2';
import Section3 from '../components/Acceuil/section3';
import Section4 from '../components/Acceuil/section4';
import Section5 from '../components/Acceuil/Section5';
import Section6 from '../components/Acceuil/section6';
import VideoSection from '../components/Acceuil/videoSection';
import ThreeView from './threeView';
import CustomCursor from '../components/cursorPerso';

function Accueil() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <Header />
      <HeroBanner/>
      {/* <About /> */}
      {/* <ThreeView /> */}
      {/* <White /> */}
      <Section2 />
      {/* <Portfolio /> */}
      <Section3 />
      {/* <Bureau3D /> */}
      <VideoSection />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </>
  )
}

export default Accueil;