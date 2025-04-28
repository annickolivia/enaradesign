// components/Banner/Banner.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import CircleText from '../shared/CircleText';
import AnimationFrame from '../shared/AnimationFrame';

const Banner = () => {
  return (
    <section className="mil-banner mil-dark-bg">
      <div className="mi-invert-fix">
        <div>
          <img className="bgpic" src="/img/bg_accueil.jpg" alt="Founder" />
        </div>
        
        <AnimationFrame />
        
        <div className="container">
          <div className="mil-banner-content mil-up">
            <h1 className="mil-muted mil-mb-60">
              Créer <span className="mil-thin">des Espaces</span> Uniques <span className="mil-thin">et Inspirants</span>
            </h1>
            
            <div className="row">
              <div className="col-md-6 col-lg-5">
                <p className="mil-muted mil-mb-60">
                  Bienvenue dans notre univers où chaque espace devient une œuvre d'art...
                </p>
              </div>
            </div>
            
            <Link to="/services" className="mil-button mil-arrow-place mil-btn-space">
              <span>Nos services</span>
            </Link>
            
            <CircleText />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;