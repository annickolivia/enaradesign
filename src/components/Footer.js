import React, {useState} from 'react'
import Nav from './Nav';
import EmailBox from './EmailBox';
import { mainColors } from '../styles/variables';
import Logo from './Logo';
import { Link } from 'react-router-dom';

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
      'project@enaradesign.com',
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
      className='z-40 py-16 px-72 flex flex-col justify-between w-screen h-[800px]  items-center
        'style={{backgroundColor: mainColors.mainBrown}}>
        <img className="h-44 w-40" src="/img/logo_blanc.png" alt="logoBlanc"/>
        <div className='text-white grid grid-cols-5 justify-between w-full'>
          <div className='text-left flex flex-col items-center'>
            <h5 className='text-white mb-2'>DECOUVRIR</h5>
            {
              decouvrir.map((m, index) => {return (<p key={index}  className='text-left'>{m}</p>)} )
            }
          </div>
          <div className='text-left flex flex-col col-start-3 items-center'>
            <h5 className='text-white mb-2'>PORTFOLIO</h5>
            {
              PortCateg.map((m, index) => {return (<p key={index}  className='text-left'>{m}</p>)})
            }
          </div>
          <div className='flex flex-col items-center col-start-5'>
            <h5 className='text-white mb-2'>CONTACT</h5>
            {
              contact.map((m, index) => {return (<p key={index} className='text-left '>{m}</p>)})
            }
          </div>
        </div>
        <p className='text-white text-xl'>NOUS SUIVRE</p>
        <div className='flex w-2/4 justify-between border-t-2 pt-10'>
          {
            policy.map((po, index) => {
              return (
                <Link to={po.link} key={index} style={{textDecoration: 'none'}} data-aos="fade-left" data-aos-delay="100">
                  <i className={`text-white ${po.icon} text-4xl`} ></i>
                </Link>
              )
            })
          }
        </div>
        <p className='text-white'>COPYRIGHT ENARA DESIGN AGENCY 2025</p>
    </footer>
  )
}

export default Footer;