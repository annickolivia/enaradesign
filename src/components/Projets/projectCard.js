import React from 'react'
import { mainColors } from '../../styles/variables'


function ProjectCard({path, imgPath, title, date, handleCardClick, id}) {
  return (
        <a 
          href={path}  onClick={() => handleCardClick(id)} data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="600" data-aos-delay="300"
          className="border-gray-200 h-[750px] w-full"
        >
          <img src={imgPath} alt="projectImg" className="h-5/6 object-cover w-full"/>
          <div className='flex pt-4 justify-between'>
            <h5 className=''>{title}</h5>
            <p className=''>{date}</p>
          </div>
          <p></p>
        </a>
  )
}

export default ProjectCard;