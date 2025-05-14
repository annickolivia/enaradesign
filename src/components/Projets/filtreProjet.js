import React from 'react';
import { mainColors } from '../../styles/variables';

function FiltreProjet({setSelectedCateg}) {
  return (
    <div className="justify-center items-center md:w-full mb-10 hidden md:flex">
            <button className="text-white text-sm px-3 md:px-5" onClick={() => setSelectedCateg('tout')}
            data-aos="fade-down" data-aos-easing="ease-in-out-quart"
            >Tout</button>
            <button className="text-sm text-white px-3 md:px-5" onClick={() => setSelectedCateg('commercial')}
             data-aos="fade-down" data-aos-delay="100" data-aos-easing="ease-in-out-quart"
            >Commercial</button>
            <button className="text-sm text-white px-3 md:px-5" onClick={() => setSelectedCateg('urbain')}
             data-aos="fade-down" data-aos-delay="200" data-aos-easing="ease-in-out-quart"
            >Urbain</button>
            <button className="text-sm text-white px-3 md:px-5" onClick={() => setSelectedCateg('residentiel')}
             data-aos="fade-down" data-aos-delay="300" data-aos-easing="ease-in-out-quart"
            >Residentiel</button>
            <button className="text-sm text-white px-3 md:px-5" onClick={() => setSelectedCateg('professionel')}
             data-aos="fade-down" data-aos-delay="400" data-aos-easing="ease-in-out-quart"
            >Professionel</button>
    </div>
  )
}

export default FiltreProjet;