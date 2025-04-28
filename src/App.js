// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Portfolio from './components/Acceuil/Portfolio.js';
import Services from './components/Acceuil/Services.js';
import Banner from './components/Banner/Banner.js';
import Footer from './components/Acceuil/Footer.js';
import About from './components/Acceuil/About.js';
import Frame from './components/Frame/Frame.js';
import Header from './components/Header.js';


import "@fancyapps/ui/dist/fancybox/fancybox.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'swiper/css';
import './styles/style.scss'

function App() {
  // const projects = [
  //   // Project data...
  // ];

  return (
    <div className="mil-content">
       <Header />
    </div>
    // <Router>
    //   <Frame />
    //   <div className="mil-content">
    //     <Banner />
    //     <About />
    //     <Portfolio projects={projects} />
    //     <Services />
    //   </div>
    //   <Footer />
    // </Router>
  );
}

export default App;