import React from 'react'
import { mainColors } from '../../styles/variables'
import { main } from 'framer-motion/client'

function Section2() {
  return (
    <section className='px-20 py-20 flex flex-row items-center justify-between h-[550px]'>
        <div className='flex w-1/2 flex-col'>
            <img className="w-24 h-auto mx-10" src="/img/about/bird_beige.png" alt="birdBeige"
              data-aos="fade-right"
            />
            <h2 className="font-thin"style={{color: mainColors.mainBrown}} data-aos="fade-left"><span className='font-medium' data-aos="fade-up">Explorez <br></br>notre </span>univers</h2>
        </div>
        <p className="text-justify text-lg font-extralight w-2/3" data-aos="fade-up">ENARA Design Agency est une agence d’aménagement d’intérieur basée à Madagascar, spécialisée également dans la sous-traitance de modélisation 3D et de visualisation architecturale.
        Notre mission ? Donner vie à vos visions grâce à un mélange unique de créativité, d’expertise technique et de technologies de pointe. Nous menons vos projets vers l'élégance et l'innovation.
        Que vous soyez un particulier, un professionnel ou un promoteur, nous transformons vos idées en réalités tangibles, alliant esthétique et fonctionnalité avec professionnalisme.  </p>
    </section>
  )
}

export default Section2
