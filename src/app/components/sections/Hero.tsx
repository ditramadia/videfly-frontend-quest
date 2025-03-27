import React from 'react'
import Image from 'next/image'

import Label from '@/app/components/Label'
import Button from '@/app/components/Button'

const Hero = () => {
  return (
    <div className='min-h-[calc(100vh-74px)] flex justify-center items-center bg-white md:bg-gradient-to-br md:from-[#7261EF] md:via-[#B9AFF7] md:to-[#F1EDFD]'>
      <div className='flex flex-col items-center gap-16 w-full py-12 bg-white'>
        <div className='relative w-full h-[320px]'>
          <Image 
            src='/images/hero-mockup.png' 
            alt='Lime Rush Sparkling Energy Drink social media marketing mockup'
            objectFit='contain'
            fill
          />
        </div>
       
        <div className='container'>
          <div className='flex flex-col items-center gap-4'>
            <Label text='Live Demo' />
            <h1 className='font-nunito font-bold text-3xl text-center leading-10'>Coba Fitur URL to Video <br/> 
              <span className='bg-gradient-to-r from-[#7F52FF] to-[#FB8570] text-transparent bg-clip-text'>Tanpa Biaya!</span>
            </h1>
            <p className='text-balance text-center text-paragraph'>Masukkan URL, ubah jadi video dalam hitungan detik. <br /> Mudah dan gratis!</p>
          </div>
          
          <div className='flex flex-col gap-4'>
            <div className=''>
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