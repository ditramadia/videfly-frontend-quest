import React from 'react'

import Label from '@/app/components/Label'

const Hero = () => {
  return (
    <div className='min-h-[calc(100vh-74px)] flex justify-center items-center bg-gradient-to-br from-[#7261EF] via-[#B9AFF7] to-[#F1EDFD]'>
      <div className='container bg-white'>
        <div>
          <Label text='Live Demo' />
        </div>

        <div></div>
      </div>
    </div>
  )
}

export default Hero