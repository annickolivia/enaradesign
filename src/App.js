// App.js
import React, {useEffect} from 'react';
import Accueil from './views/Accueil';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
      <Accueil />
    </div>
  );
}

export default App;