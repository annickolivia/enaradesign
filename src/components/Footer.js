import React, {useState} from 'react'
import Nav from './Nav';
import EmailBox from './EmailBox';
import { mainColors } from '../styles/variables';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

function Footer() {
    const [clicked, setClicked] = useState('');
    const PortCateg = [
      'Professionnel',
      'Commercial',
      'Residentiel',
      'Urbain'
    ]
    
    const decouvrir = [
      "A-propos",
      "Services",
      "Contact"
    ]
    
    const contact = [
      'project@senso-agency.com',
      'Antananarivo, Madagascar'
    ]

    const policy = [
      {
        name: 'Facebook',
        link: 'https://web.facebook.com/enaradesign',
        icon:'fab fa-facebook'
      },
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/company/enara-design-agency/',
        icon:'fab fa-linkedin'
      },
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/enara.mg/',
        icon:'fab fa-instagram'
      },
      {
        name: 'Tiktok',
        link: "#",
        icon: 'fab fa-tiktok'
      }
    ]
  
  return (
    <footer 
      className='z-40 py-6 px-6 md:px-20 flex flex-col w-screen justify-between lg:h-[400px] h-fit items-center
        'style={{backgroundColor: mainColors.mainBrown}}>
        <div className='flex justify-center flex-col md:flex-row md:justify-between xl:w-full items-center'>
          <img className="md:block h-14 w-1/3 md:h-[120px] md:w-48 my-5 md:my-0" src="/img/logo_complete_blanc.png" alt="logoBlanc" data-aos="fade-right"/>
          <div className='w-2/3 text-white grid grid-cols-1 md:grid-cols-3 justify-between space-y-5 md:space-y-0' data-aos="fade-up" data-aos-delay="200">
            <div className='text-left flex flex-col items-center'>
              <h5 className='text-white mb-2 w-full text-center md:text-left'>DECOUVRIR</h5>
              {
                decouvrir.map((m, index) => {return (<p key={index}  className='text-center md:text-left w-full'>{m}</p>)} )
              }
            </div>
            <div className='text-left flex flex-col  items-center'>
              <h5 className='text-white mb-2 w-full text-center md:text-left'>PORTFOLIO</h5>
              {
                PortCateg.map((m, index) => {return (<Link to="/projets" key={index}  className='text-center md:text-left w-full'>{m}</Link>)})
              }
            </div>
            <div className='flex flex-col items-center'>
              <h5 className='text-white mb-2 w-full text-center md:text-left'>CONTACT</h5>
              {
                contact.map((m, index) => {return (<p key={index} className='text-center md:text-left  w-full'>{m}</p>)})
              }
            </div>
          </div>
        </div>
        <p className='text-white text-xl py-5 md:py-0' data-aos="fade-up" data-aos-delay="300">NOUS SUIVRE</p>
        <div className='flex w-2/4 xl:w-1/4  justify-between border-t-2 pt-10'>
          {
            policy.map((po, index) => {
              return (
                <Link to={po.link} key={index} style={{textDecoration: 'none'}}>
                  <motion.i className={`text-white ${po.icon} text-4xl`}
                  whileHover={{ scale: 1.2}}
                  whileTap={{ scale: 0.8 }}
                  ></motion.i>
                </Link>
              )
            })
          }
        </div>
        <p className='text-white py-3 md:py-0'>COPYRIGHT SENSO DESIGN AGENCY 2025</p>
    </footer>
  )
}

export default Footer;