import React from 'react'
import { mainColors } from '../../styles/variables'


function ProjectCard({path, imgPath, title, date, handleCardClick, id}) {
  return (
        <a href={path} onClick={() => handleCardClick(id)} className="">
            <div className="border-gray-200 md:w-full xl:w-auto h-[75px] md:h-[200px]"
              style={{backgroundImage: `url(${imgPath})`, backgroundSize:"cover", backgroundPosition: "center"}}
            >
              <div className="flex flex-col py-3 pl-7 justify-end opacity-0 hover:opacity-90 backdrop-blur-md h-full w-full transition-all"
                style={{backgroundColor: mainColors.mainBrown}}
              >
                <h6 className="text-base text-white">{title}</h6>
                <p className="text-xs text-white">{date}</p>
              </div>
            </div>
        </a>

  )
}

export default ProjectCard;