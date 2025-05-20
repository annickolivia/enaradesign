// App.js
import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Routes, Route, useLocation } from 'react-router-dom';
import Projets from './views/Projets';
import Accueil from './views/Accueil';
import ProjectDetails from './components/Projets/ProjetFeature';

import "@fancyapps/ui/dist/fancybox/fancybox.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'swiper/css';
import './styles/style.scss'
import Devis from './views/Devis';

function App() {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800, // animation duration
      easing: 'ease-in-out', // animation easing
      once: false, // whether animation should happen only once
    });
  }, []);
  return (

      // <Routes>
      //   <Route path="/" element={<Accueil />} />
      //   <Route path="/projets/" element={<Projets />} />
      //   <Route path="/projets/:id" element={<ProjectDetails />} />
      //   <Route path="/devis" element={<Devis />} />
      // </Routes>
      <Devis />
  );
}

export default App;