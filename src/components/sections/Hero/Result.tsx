'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

import spinnerAnimation from '@public/lotties/spinner.json'

import Button from '@/components/Button'

const Result = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchDummy = async () => {
      try {
        setIsLoading(true)

        await new Promise((resolve) => setTimeout(resolve, 3000));
      } catch (error) {
        return {
          message: error,
          notFound: true
        }
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchDummy()
  }, [])

  return (
    isLoading ? 
    <div className="flex items-center justify-center flex-1  w-full h-full">
      <Lottie
        animationData={spinnerAnimation} 
        loop
        autoPlay
        className="w-10 h-10"
      />
    </div> :
    <AnimatePresence>
      <div className='w-11/12 md:w-full mx-auto md:mx-0 mt-12 md:mt-0'>
        <motion.div
          initial={{ y: '-100%' }} 
          animate={{ y: '0%' }} 
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className='flex flex-col items-center gap-8'
        >
          <div className='flex flex-col items-center gap-4'>
            <h2 className='font-nunito text-center font-bold text-3xl md:text-4xl lg:text-5xl text-center md:text-start leading-12 md:leading-14 lg:leading-16'>Videomu Sudah Siap!</h2>
            <p className='text-balance text-center text-paragraph'>Yuk, coba jadwalkan demo untuk bikin video tanpa batas dengan semua fitur lengkap. Butuh yang lebih fleksibel? Lihat paket harga yang sesuai dengan kebutuhanmu!</p>
          </div>

          <div className='flex flex-col min-[425px]:flex-row gap-4'>
            <div className='h-11 transition-150 hover:scale-105 active:scale-95'>
              <Button text='Lihat Pricing' color='primaryOutline' border/>
            </div>
            <div className='h-11 transition-150 hover:scale-105 active:scale-95'>
              <Button text='Jadwalkan Demo' color='primary'/>
            </div>
          </div>
        </motion.div>

        {/* Vignette */}
        <motion.div 
          initial={{ y: '70%' }} 
          animate={{ y: '0%' }} 
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className='hidden lg:block lg:absolute lg:inset-x-0 lg:top-[50%] lg:bottom-[-100%]'>
          <Image
            src="/icons/hero-result-vignette.svg"
            alt="Purple ellipse vignette"
            className="object-contain"
            fill
            sizes="(max-width: 1024px) 0, 50vw"
          />
        </motion.div>

        <motion.div 
          initial={{ y: '100%' }} 
          animate={{ y: '0%' }} 
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className='relative max-w-[700px] w-full mx-auto top-12 aspect-video'
        >
          <Image 
            src="/images/hero-result.webp"
            alt="Mockup marketing produk Limerush Sparkling Energy Drink"
            className="object-contain"
            fill
            sizes="(max-width: 1025px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default Result