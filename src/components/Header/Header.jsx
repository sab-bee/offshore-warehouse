import React, { useState } from 'react'

const Header = () => {
  const [imageLoadError, setImageLoadError] = useState(true)

  const src1 =
    'https://images.unsplash.com/photo-1650636187799-0a09fbbd01af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
  const src2 =
    'https://images.unsplash.com/photo-1650532596364-37b8a537f3f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
  return (
    <div>
      <div className='h-44 bg-blue-500'>
        <img
          src={src1}
          onError={(e) => {
            // e.target.onError = null
            if (imageLoadError) {
              setImageLoadError(false)
              e.target.src = src2
            }
          }}
          alt='wallpaper'
        />
      </div>
    </div>
  )
}

export default Header
