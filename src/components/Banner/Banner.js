// // components/Banner/Banner.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import CircleText from '../shared/circleText';
// import AnimationFrame from '../shared/AnimationFrame';

// const Banner = () => {
//   return (
//     <section className="mil-banner mil-dark-bg">
//       <div className="mi-invert-fix">
//         <div>
//           <img className="bgpic" src="/img/bg_accueil.jpg" alt="Founder" />
//         </div>
        
//         <AnimationFrame />
        
//         <div className="container">
//           <div className="mil-banner-content mil-up">
//             <h1 className="mil-muted mil-mb-60">
//               Créer <span className="mil-thin">des Espaces</span> Uniques <span className="mil-thin">et Inspirants</span>
//             </h1>
            
//             <div className="row">
//               <div className="col-md-6 col-lg-5">
//                 <p className="mil-muted mil-mb-60">
//                   Bienvenue dans notre univers où chaque espace devient une œuvre d'art...
//                 </p>
//               </div>
//             </div>
            
//             <Link to="/services" className="mil-button mil-arrow-place mil-btn-space">
//               <span>Nos services</span>
//             </Link>
            
//             <CircleText />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Banner;

import React from "react";

const Banner = () => {
  return (
    <section className="mil-banner mil-dark-bg">
      <div className="mi-invert-fix z-index-100">
        <div className="mil-animation-frame">
          <div
            className="mil-animation mil-position-1 mil-scale"
            data-value-1="7"
            data-value-2="1.6"
          ></div>
          <div
            className="mil-animation mil-position-2 mil-scale"
            data-value-1="4"
            data-value-2="1"
          ></div>
          <div
            className="mil-animation mil-position-3 mil-scale"
            data-value-1="1.2"
            data-value-2=".1"
          ></div>
        </div>

        <div className="mil-gradient"></div>

        <div className="container">
          <div className="mil-banner-content mil-up">
            <h1 className="mil-muted mil-mb-60">
              Créer <span className="mil-thin">des Espaces</span>
              <br /> Uniques <span className="mil-thin">et Inspirants</span>
            </h1>
            <div className="row">
              <div className="col-md-6 col-lg-5">
                <p className="mil-muted mil-mb-60">
                  Bienvenue dans notre univers où chaque espace devient une
                  œuvre d'art. Ensemble, transformons vos idées uniques et
                  inspirants, alliant élégance, fonctionnalité et créativité
                  sans limites.
                </p>
              </div>
            </div>

            <a href="pages/services.php" className="mil-button mil-arrow-place mil-btn-space">
              <span>Nos services</span>
            </a>

            <a href="pages/project.php" className="mil-link mil-muted mil-arrow-place">
              <span>Voir nos projets</span>
            </a>

            <div className="mil-circle-text">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 300 300"
                xmlSpace="preserve"
                className="mil-ct-svg mil-rotate"
                data-value="360"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                  />
                </defs>
                <circle cx="150" cy="100" r="75" fill="none" />
                <g>
                  <use xlinkHref="#circlePath" fill="none" />
                  <text style={{ letterSpacing: "6.5px" }}>
                    <textPath xlinkHref="#circlePath">
                      Scroll down - Scroll down -
                    </textPath>
                  </text>
                </g>
              </svg>
              <a
                href="#about"
                className="mil-button mil-arrow-place mil-icon-button mil-arrow-down"
              ></a>
            </div>
          </div>
        </div>
      </div>
      <div>
          <img className="bgpic" src="/img/banner/bg_accueil.jpg" alt="Founder" />
        </div>
    </section>
  );
};

export default Banner;
