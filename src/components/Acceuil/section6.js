import React from 'react'
import { mainColors } from '../../styles/variables'

function Section6() {
  return (
    <section className="flex  space-y-8 md:space-y-0 scale-75 md:scale-100 flex-col items-center mb-32 h:fit md:h-[350px] justify-between" style={{color: mainColors.mainBrown}}>
      <p className='md:text-5xl text-4xl' data-aos="fade-right">Des espaces pensés pour </p>
      <div className='flex items-center' data-aos="fade-right" data-aos-delay='200'>
        <img className="w-28"src="/img/about/bird_beige.png" alt="birdBeige"/>
        <p className='md:text-6xl text-4xl font-semibold'>INSPIRER</p>
      </div>
      <p className='md:text-5xl text-4xl' data-aos="fade-right" data-aos-delay='300'>conçus pour vous</p>
      <p className='md:text-6xl text-4xl font-semibold' data-aos="fade-right" data-aos-delay='400'>ACCUEILLIR</p>
    </section>
  )
}

export default Section6
