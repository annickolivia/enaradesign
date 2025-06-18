import { Swiper, SwiperSlide } from 'swiper/react';
import { ServiceCateg } from '../components/bdProjet';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function ServiceSlider() {
  return (
    <div className="w-full min-h-screen bg-[#f6f2ef] flex flex-col items-center justify-center py-20 px-4">
      <Link to="/"><i className='font-bold text-3xl fas fa-x mb-10 hover:scale-125 transform transition-all duration-500'/></Link>
      <div className="w-full max-w-6xl shadow-xl bg-white rounded-xl overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
        >
          {ServiceCateg.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10 items-center">
                {/* Text Left */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">{service.nom}</h2>
                  <ul className="space-y-3 text-gray-700 text-lg">
                    {service.descriptions.map((desc, i) => (
                      <li key={i}>• {desc}</li>
                    ))}
                  </ul>
                  <button className="mt-8 px-6 py-2 bg-[#bda98b] text-white rounded-full hover:bg-[#a28a6f] transition">En savoir plus</button>
                </div>

                {/* Image Right */}
                <div className="h-[300px] bg-gray-200 rounded-lg shadow-inner flex items-center justify-center">
                  <img className='w-full h-full' alt={service.title} src={service.imgSrc}/>
                  {/* Remplace par une image réelle si dispo */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}