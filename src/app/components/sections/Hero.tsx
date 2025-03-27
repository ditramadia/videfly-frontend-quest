import React from 'react'
import Image from 'next/image'

import Label from '@/app/components/Label'
import Button from '@/app/components/Button'

const Hero = () => {
  return (
    <div className='flex justify-center items-center min-h-[calc(100vh-74px)] bg-white md:bg-gradient-to-br md:from-[#7261EF] md:via-[#B9AFF7] md:to-[#F1EDFD]'>
      <div className='md:max-w-[1200px] w-full md:w-11/12 py-12 md:px-10 bg-white md:rounded-3xl'>
        {/* <div>
          <Image 
            src='/images/hero-mockup.png'
            alt=''
            priority
          />
        </div> */}
        
        <div className='w-11/12 mx-auto md:mx-0 md:w-7/12'>
          <div className='flex flex-col items-center md:items-start gap-4'>
            <Label text='Live Demo' />
            <h1 className='font-nunito font-bold text-3xl md:text-4xl lg:text-5xl text-center md:text-start leading-10 md:leading-12 lg:leading-16'>Coba Fitur URL to Video <br/> 
              <span className='bg-gradient-to-r from-[#7F52FF] to-[#FB8570] text-transparent bg-clip-text'>Tanpa Biaya!</span>
            </h1>
            <p className='text-balance text-center md:text-left text-paragraph'>Masukkan URL, ubah jadi video dalam hitungan detik. <br /> Mudah dan gratis!</p>
          </div>
          
          <div className='flex flex-col min-[420px]:flex-row gap-2 mt-8'>
            <div className='h-11 w-full bg-white border-2 border-primary-500 rounded-lg'>
              {/* Text Input Field */}
            </div>
            <div className='h-11 transition-150 hover:scale-105'>
              <Button text='Analisa' color="primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero