'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import urlSelection from '@/app/data/url-selection'

import Label from '@/app/components/Label'
import Button from '@/app/components/Button'
import InputDropdown from '@/app/components/InputDropdown'

const Hero = () => {
  const [selectedValue, setSelectedValue] = useState<string>("")

  const handleAnalyze = () => {
    console.log("Analyzing:", selectedValue)
  }

  return (
    <div className='flex justify-center items-center min-h-[calc(100vh-74px)] md:py-16 lg:py-28 bg-white md:bg-gradient-to-br md:from-[#7261EF] md:via-[#B9AFF7] md:to-[#F1EDFD]'>
      <div className='overflow-hidden md:relative md:max-w-[1200px] w-full md:w-11/12 md:min-h-[450px] py-12 md:px-10 bg-white md:rounded-3xl'>
        <div className='hidden md:block md:absolute md:top-[-324px] xl:top-[-484px] md:right-[-444px] xl:right-[-600px] md:w-[768px] xl:w-[1120px] md:h-[768px] xl:h-[1120px]'>
          <Image 
            src='/icons/hero-vignette.svg'
            alt='Purple ellipse vignette'
            fill
            objectFit='contain'
            priority
          />
        </div>
        
        <div className='relative md:absolute md:inset-y-0 md:-right-12 w-full md:w-1/2 h-72 md:h-full'>
          <Image 
            src='/images/hero-mockup.png'
            alt=''
            fill
            objectFit='contain'
            priority
          />
        </div>
        
        <div className='w-11/12 md:w-1/2 mx-auto md:mx-0 mt-12 md:mt-0'>
          <div className='flex flex-col items-center md:items-start gap-4'>
            <Label text='Live Demo' />
            <h1 className='font-nunito font-bold text-3xl md:text-4xl lg:text-5xl text-center md:text-start leading-10 md:leading-12 lg:leading-16'>Coba Fitur URL to Video <br/> 
              <span className='bg-gradient-to-r from-[#7F52FF] to-[#FB8570] text-transparent bg-clip-text'>Tanpa Biaya!</span>
            </h1>
            <p className='text-balance text-center md:text-left text-paragraph'>Masukkan URL, ubah jadi video dalam hitungan detik. <br /> Mudah dan gratis!</p>
          </div>
          
          <div className='flex flex-col min-[420px]:flex-row gap-2 mt-8 md:mt-16 md:mb-16 lg:mt-24 xl:mb-56'>
            <div className='flex-1 h-11'>
              <InputDropdown 
                options={urlSelection} 
                placeholder='Pilih Link URL Product'
                value={selectedValue}
                onChange={setSelectedValue}
              />
            </div>
            {/* <div className='h-11 flex-1 bg-yellow-500 overflow-hidden text-ellipsis'>
              dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            </div> */}
            <div className='h-11 transition-150 hover:scale-105'>
              <Button text='Analisa' color="primary" onClick={handleAnalyze} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero