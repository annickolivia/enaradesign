import React from 'react'
import { mainColors } from '../styles/variables';

function EmailBox() {
  return (
    <div className='flex justify-between items-center px-3 rounded-full max-w-80 max-h-16' style={{backgroundColor: mainColors.lightBrown}} data-aos="fade-right" data-aos-delay="200">
      <input className='outline-none border-none m-0 bg-transparent text-xs' type='email' placeholder='Votre email ...' />
      <button className='border-radius-20 rounded-full w-14 p-3' style={{backgroundColor: mainColors.mainBrown}} type='submit'><i className='fas fa-arrow-right text-white text-sm'/></button>
    </div>
  )
}

export default EmailBox;