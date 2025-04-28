import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Accueil from './views/Accueil';

function App() {
  return (
    <div className="App">
     <Accueil />
    </div>
  );
}

export default App;
