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
      '+261 32 05 802 56',
      'project@senso-design.com',
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
      className='z-40 py-6 px-6 md:px-20 flex flex-col w-screen justify-between lg:h-[300px] h-fit items-center
        'style={{backgroundColor: mainColors.mainBrown}}>
       <div className='flex justify-center flex-col md:flex-row md:justify-between xl:w-full items-center'>
          <div className="w-full lg:mt-10 mx-auto text-white grid grid-cols-1 md:grid-cols-4 gap-y-10 gap-x-16 px-5 place-items-center" data-aos="fade-up" data-aos-delay="200">

            {/* Logo agrandi et centré */}
            <div className="flex justify-center items-center">
              <img className="w-56 md:w-64 h-auto" src="/img/logo_complete_blanc.png" alt="logoBlanc" data-aos="fade-right" />
            </div>

            {/* Bloc Portfolio */}
            <div className='text-center md:text-left flex flex-col items-center md:items-start'>
              <h5 className='text-white mb-3 text-lg font-semibold'>PORTFOLIO</h5>
              {PortCateg.map((m, index) => (
                <Link to="/projets" key={index} className='w-full'>
                  {m}
                </Link>
              ))}
            </div>
            
            {/* Bloc Contact */}
            <div className='text-center md:text-left flex flex-col items-center md:items-start'>
              <h5 className='text-white mb-3 text-lg font-semibold'>CONTACT</h5>
              {contact.map((m, index) => (
                <p key={index} className='w-full'>
                  {m}
                </p>
              ))}
            </div>
            
            <div className='text-center space-y-4 md:text-left flex flex-col items-center md:items-center'>
              <h5 className='text-white mb-3 text-lg font-semibold' >RESEAUX SOCIAUX</h5>
                {/* Bloc Policy (icônes) */}
                <div className='flex justify-center md:justify-start w-full space-x-6'>
                  {policy.map((po, index) => (
                    <Link to={po.link} key={index} style={{ textDecoration: 'none' }}>
                      <motion.i
                        className={`text-white ${po.icon} text-3xl md:text-4xl`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      ></motion.i>
                    </Link>
                  ))}
                </div>
            </div>
            
            
          </div>
        </div>
        {/* <p className='text-white text-xl py-5 md:py-0' data-aos="fade-up" data-aos-delay="300">NOUS SUIVRE</p>
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
        </div> */}
        <p className='text-white py-3 md:py-0'>COPYRIGHT SENSO DESIGN AGENCY 2025</p>
    </footer>
  )
}

export default Footer;