import React from 'react'
import { mainColors } from '../../styles/variables'

function ProjectCard({imgSrc, title, desc="", place , h}) {
  return (
    <div className={`h-[650px] w-full bg-white rounded-sm hover:scale-110 transform transition-all duration-700`}
      data-aos="fade-up"
    >
      <img className="w-full h-[500px] rounded-t-sm object-cover" src={imgSrc} alt="projectImag"/>
      <div className='px-6 py-4'>
        <h6 style={{color:mainColors.mainBrown}}>{title}</h6>
        <p className='font-thin'>{place}</p>
        <p className="mt-5 text-justify font-light h-2/5 overflow-auto">{desc}</p>
        <button className="bg-gray-200 text-gray-800 p-2 float-right hover:bg-gray-300 hover:scale-105 transition duration-300 rounded-lg">Voir plus</button>
      </div>
    </div>
  )
}

export default ProjectCard
