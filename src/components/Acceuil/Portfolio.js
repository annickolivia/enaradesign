// components/Portfolio/Portfolio.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Portfolio = ({ projects }) => (
  <section className="mil-portfolio-slider-frame">
    <div className="container">
      <Swiper>
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="mil-portfolio-item">
              <img src={project.image} alt={project.title} />
              <h5>{project.title}</h5>
              {/* <Link to={`/project/${project.id}`} className="mil-button"> */}
                <span>Voir le Projet</span>
              {/* </Link> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default Portfolio;