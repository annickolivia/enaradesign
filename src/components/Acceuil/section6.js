import React from 'react'
import { mainColors } from '../../styles/variables'

function Section6() {
  return (
    <section className="flex flex-col items-center mb-32 h-[400px] justify-between" style={{color: mainColors.mainBrown}}>
      <p className='text-5xl'>Des espaces pensés pour </p>
      <div className='flex items-center'>
        <img className="w-28"src="/img/about/bird_beige.png" alt="birdBeige"/>
        <p className='text-7xl font-bold'>INSPIRER</p>
      </div>
      <p className='text-5xl'>conçus pour vous</p>
      <p className='text-7xl font-bold'>ACCUEILLIR</p>
    </section>
  )
}

export default Section6
