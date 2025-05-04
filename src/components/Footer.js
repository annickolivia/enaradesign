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
    <footer 
      className=' z-50 py-16 px-10 flex flex-col justify-between h-[700px]
        md:flex-row md:py-20 md:h-[400px] md:px-72
        ' style={{backgroundColor: mainColors.mainBrown}}>
      <div className='h-1/2 mb-10 flex flex-col justify-around md:w-1/2 md:h-full'>
        <Logo source='/img/logo_blanc.png'size={12}/>
        <p className='text-white' data-aos="fade-up">Contactez-nous:</p>
        <EmailBox />
      </div>
      <div className='h-1/2 flex flex-col justify-between md:items-end md:w-1/2 md:h-full '>
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
        <h6 
          className='text-white'
          data-aos="fade-up"
        >Madagascar</h6>
        <div className='text-white'  data-aos="fade-up" data-aos-delay="100">
          <p>Lot xxxxxxxxxxxxx Antsakaviro</p>
          <p>Antananrivo +261 32 05 802 56</p>
        </div>
      </div>
     
    </footer>
  )
}

export default Footer;