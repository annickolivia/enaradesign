import React from 'react'
import { motion } from 'framer-motion';
import { mainColors } from '../styles/variables';
function Devis() {
  return (
        <motion.div
            initial={{ x: window.innerWidth }}
            animate={{ x: 0 }}
            exit={{ x: window.innerWidth }}
            transition={{ duration: 1.7 , ease: "easeInOut" }}
            className=' text-white h-screen w-screen absolute top-0'
            style={{backgroundColor: mainColors.mainBrown}}
        >
            <p className='text-5xl'>faire un devis</p>
        </motion.div>
  )
}

export default Devis;
