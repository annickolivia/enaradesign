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
    
    const services = [
      "Conception",
      "Construction"
    ]
  
    const articles = [
      "Blog",
      "Formation"
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
      }
    ]
  
  return (
    <footer className='px-10 py-16 flex flex-col h-full justify-between' style={{backgroundColor: mainColors.mainBrown, height:'600px'}}>
      <Logo source='/img/logo_blanc.png'size={12}/>
      <p className='text-white'>Contactez-nous:</p>
      <EmailBox />
      <div className='flex w-2/4 justify-between'>
        {
          policy.map((po, index) => {
            return (
              <Link to={po.link} key={index} style={{textDecoration: 'none'}}>
                <i className={`text-white ${po.icon} text-4xl`} ></i>
              </Link>
            )
          })
        }
      </div>
      <h6 className='text-white'>Madagascar</h6>
      <div className='text-white'>
        <p>Lot xxxxxxxxxxxxx Antsakaviro</p>
        <p>Antananrivo +261 32 05 802 56</p>
      </div>
    </footer>
  )
}

export default Footer;