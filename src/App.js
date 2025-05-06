// App.js
import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjetsCarousel from './components/Projets/ProjetsCarousel';
import Accueil from './views/Accueil';
import Projets from './views/Projets';

import "@fancyapps/ui/dist/fancybox/fancybox.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'swiper/css';
import './styles/style.scss'

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800, // animation duration
      easing: 'ease-in-out', // animation easing
      once: false, // whether animation should happen only once
    });
  }, []);
  return (
    <div className="s">
      <Projets />
      {/* <Accueil /> */}
    </div>
  );
}

export default App;