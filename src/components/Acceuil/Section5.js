import React from 'react'
import { mainColors } from '../../styles/variables'

function Section5() {
  return (
    <section className='grid grid-cols-1 md:grid-cols-[1fr_1.3fr_1.5fr] gap-3 md:h-[650px] h-fit mb-32'>
      <img className="h-full w-full object-cover bg-center" src="/img/about/vue5.png" alt="section5img"/>
      <img className="h-full w-full object-cover bg-center" src="/img/about/vue6.png" alt="section5img"/>
      <div className='flex flex-col justify-between text-center px-6 md:px-14 py-10 h-full w-full object-cover' style={{backgroundColor: mainColors.mainBrown}}>
        <h3 className='text-white font-extralight'>Satisfaction <span className='font-semibold'>client</span></h3>
        <p className='text-white text-justify text-xl font-extralight'>“ Travailler avec Enara Design a été une expérience exceptionnelle du début à la fin. L’équipe a su comprendre mes attentes, mes goûts et les a transformés en un intérieur qui me ressemble à 100 %. Chaque détail a été pensé avec soin — de l’agencement des espaces à la sélection des matériaux. J’ai été particulièrement impressionnée par leur sens de l’écoute, leur créativité et leur professionnalisme. Aujourd’hui, je me sens vraiment bien chez moi, et c’est grâce à eux. Un immense merci à toute l’équipe d’Enara Design  “ - <span className='font-semibold'>SARAH</span> </p>
        <p className="text-white font-semibold">PROJET SARAH - 2025</p>
      </div>
    </section>
  )
}

export default Section5
