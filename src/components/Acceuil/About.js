import React from 'react'
import { mainColors } from '../../styles/variables';

function About() {
  return (
    <section id="about" className='flex flex-col justify-between h-[1150px] px-10 py-20 md:px-20 xl:px-72 md:flex-row md:h-[900px] lg:h-[700px]'>
      <div className="h-3/5 flex flex-col justify-between md:w-[500px] md:mr-16 md:h-full">
        <h3 data-aos="fade-up" style={{color: mainColors.mainBrown}}>Explorez notre <span className='font-thin'>univers</span></h3>
          <p className="text-justify" data-aos="fade-up" >ENARA Design Agency est une agence d’aménagement 
            d’intérieur basée à Madagascar. Nous créons des 
            intérieurs personnalisés pour les nouvelles constructions 
            ou assurons la rénovation et/ou la transformation de vos 
            espaces existants. Que vous soyez un particulier, un professionnel
            ou un promoteur, nous transformons vos idées en réalités tangibles,
            alliant esthétique et fonctionnalité. Des résidences privées aux 
            espaces collectifs, notre démarche créative donne vie à vos visions
            grâce à un mélange de créativité, d’expertise technique et de technologies
            de pointe. Nous sommes convaincus qu’un bon design raconte une
            histoire et nous avons hâte d’écrire la vôtre avec vous. 
          </p>
          <div className="flex">
            <img data-aos="fade-right" className="max-w-[70px] max-h-[50px] rounded-full mr-4" src='/img/about/2.jpg' alt="review"/>
            <p data-aos="fade-up"  className="text-base">"Créer avec passion <span style={{color: mainColors.mainBrown}}>les merveilles du Design, c'est </span> Libérer <span className="mil-thin" >une créativité sans limites"</span></p>
          </div>
      </div>
        <img data-aos="fade-left" className=" md:w-[200px] md:h-[400px] lg:w-[350px] lg:h-[500px] mt-10" src='/img/about/int_1.jpg' alt="tableImage"/>
    </section>
  )
}

export default About;