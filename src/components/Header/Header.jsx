import React, { useState } from 'react'
import banner from '../../assets/image/banner.jpg'
import { motion } from 'framer-motion'
const Header = () => {
  const [imageLoadError, setImageLoadError] = useState(true)
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
    >
      <div className=' bg-blue-500 flex'>
        <img
          className='object-cover h-[400px] md:h-auto'
          src={banner}
          alt='wallpaper'
        />
      </div>
    </motion.div>
  )
}

export default Header
