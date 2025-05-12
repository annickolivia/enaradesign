import React from 'react'
import { mainColors } from '../../styles/variables'

function ProjectCard({imgSrc, title, desc, place}) {
  return (
    <div className='h-[800px] w-[450px] bg-white hover:-translate-y-5 transition-all duration-700'>
      <img className="w-full h-[500px] object-cover" src={imgSrc} alt="projectImag"/>
      <div className='px-6 py-4'>
        <h6 style={{color:mainColors.mainBrown}}>{title}</h6>
        <p className='font-thin'>{place}</p>
        <p className="mt-5 text-justify font-light">{desc}</p>
        <button className="bg-gray-200 text-gray-800 p-2 float-right">Voir plus</button>
      </div>
    </div>
  )
}

export default ProjectCard
