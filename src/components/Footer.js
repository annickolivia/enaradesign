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
      "à-propos",
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
      className='z-40 py-16 px-20 flex flex-col justify-between h-[600px]  items-center
        ' style={{backgroundColor: mainColors.mainBrown}}>
        <img className="h-52 w-48" src="/img/logo_blanc.png" alt="logoBlanc"/>
        <div className='text-white flex flex-row justify-between'>
          <div className=''>
            <h5 className='text-white'>DECOUVRIR</h5>
            {
              decouvrir.map((m, index) => {return (<p key={index}>{m}</p>)} )
            }
          </div>
          <div>
            <h5 className='text-white'>PORTFOLIO</h5>
            {
              PortCateg.map((m, index) => {return (<p key={index}>{m}</p>)})
            }
          </div>
          <div>
            <h5 className='text-white'>CONTACT</h5>
            {
              contact.map((m, index) => {return (<p key={index}>{m}</p>)})
            }
          </div>
        </div>
        <div className='flex w-2/4 justify-between'>
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
    </footer>
  )
}

export default Footer;